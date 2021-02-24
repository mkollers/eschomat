import { isPlatformBrowser } from "@angular/common";

export const storageFactory = (platformId: string) => {
    if (isPlatformBrowser(platformId)) {
        return sessionStorage;
    }
    return null;
};
