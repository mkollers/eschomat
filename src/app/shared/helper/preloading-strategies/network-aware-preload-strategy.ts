import { Inject, Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { NAVIGATOR } from '../injection-tokens/navigator.injection-token';

export type NetworkSpeed = 'slow-2g' | '2g' | '3g' | '4g';
export interface ConnectionNavigator extends Navigator {
    connection?: {
        effectiveType?: NetworkSpeed;
        saveData: boolean;
    };
}

@Injectable({
    providedIn: 'root'
})
export class NetworkAwarePreloadStrategy implements PreloadingStrategy {
    constructor(@Inject(NAVIGATOR) private _navigator: ConnectionNavigator) { }

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        return this._hasGoodConnection() ? load() : EMPTY;
    }

    private _hasGoodConnection(): boolean {
        const conn = this._navigator.connection;

        // Connection is not supported by all browsers so far
        if (conn) {
            if (conn.saveData) {
                return false; // save data mode is enabled, so dont preload
            }
            const avoidTheseConnections: NetworkSpeed[] = ['slow-2g', '2g'];
            const effectiveType = conn.effectiveType || 'slow-2g';
            if (avoidTheseConnections.includes(effectiveType)) {
                return false;
            }
        }
        return true;
    }
}