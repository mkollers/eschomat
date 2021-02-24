import { AppModule } from './app.module';

describe('AppModule', () => {
    it('should create', () => {
        // Act
        const app = new AppModule();

        // Assert
        expect(app).toBeTruthy();
    });
});