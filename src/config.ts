import { InjectionToken } from '@angular/core';
import { Answer } from './app/shared/helper/models/answer';

export const CONFIG = new InjectionToken<Config>('CONFIG');

export interface Party {
    description: string;
    name: string;
    logo: string;
    manifesto: string;
};

export interface Faq {
    question: string;
    answer: string;
};

export interface Thesis {
    image: {
        desktop: string,
        mobile: string,
        alttext: string
    };
    thesis: string;
    category: string;
    description?: string;
    evaluation: {
        [party: string]: {
            position: Answer,
            statement: string
        }
    };
};

export interface Config {
    logo: string,
    welcome_text: string,
    parties: { [key: string]: Party };
    theses: Thesis[];
    faq: Faq[];
};
