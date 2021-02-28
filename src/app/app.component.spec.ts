import { Config } from 'src/config';
import { Mock } from 'src/test';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    it('should create', () => {
        // Arrange
        const config = new Mock<Config>();

        // Act
        const app = new AppComponent(config.instance);

        // Assert
        expect(app).toBeTruthy();
    });
});
