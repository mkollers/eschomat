import { Route } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { Mock } from 'src/test';
import { when } from 'ts-mockito';

import { ConnectionNavigator, NetworkAwarePreloadStrategy, NetworkSpeed } from './network-aware-preload-strategy';

describe('NetworkAwarePreloadStrategy', () => {
    let navigator: Mock<ConnectionNavigator>;

    beforeEach(() => {
        navigator = new Mock<ConnectionNavigator>();
    });

    it('should create', () => {
        // Act
        const strategy = new NetworkAwarePreloadStrategy(navigator.instance);

        // Assert
        expect(strategy).toBeTruthy();
    });

    describe('- preload() -', () => {
        let strategy: NetworkAwarePreloadStrategy;

        beforeEach(() => {
            strategy = new NetworkAwarePreloadStrategy(navigator.instance);
        });

        it('should preload because of undefined connection', () => {
            // Arrange
            const expected$ = of();
            when(navigator.mock.connection).thenReturn(undefined);

            // Act
            const result$ = strategy.preload({} as Route, () => expected$);

            // Assert
            expect(result$).toBe(expected$);
        });

        it('should not preload because of save data enabled', () => {
            // Arrange
            when(navigator.mock.connection).thenReturn({
                saveData: true,
                effectiveType: '2g'
            });

            // Act
            const result$ = strategy.preload({} as Route, () => of());

            // Assert
            expect(result$).toBe(EMPTY);
        });

        const slow: (NetworkSpeed | undefined)[] = ['slow-2g', '2g', undefined];
        for (const speed of slow) {
            it(`should not preload because of ${speed} network`, () => {
                // Arrange
                when(navigator.mock.connection).thenReturn({
                    saveData: false,
                    effectiveType: speed
                });

                // Act
                const result$ = strategy.preload({} as Route, () => of());

                // Assert
                expect(result$).toBe(EMPTY);
            });
        }

        const fast: NetworkSpeed[] = ['3g', '4g'];
        for (const speed of fast) {
            it(`should preload because of ${speed} network`, () => {
                // Arrange
                const expected$ = of();
                when(navigator.mock.connection).thenReturn({
                    saveData: false,
                    effectiveType: speed
                });

                // Act
                const result$ = strategy.preload({} as Route, () => expected$);

                // Assert
                expect(result$).toBe(expected$);
            });
        }
    });
});