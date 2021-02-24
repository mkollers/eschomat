import { Answer } from '../models/answer';

export const CalculationGrid: { [user: string]: { [party: string]: number } } = {
    [Answer.AGREE]: {
        [Answer.AGREE]: 2,
        [Answer.NEUTRAL]: 1,
        [Answer.DISAGREE]: 0
    },
    [Answer.NEUTRAL]: {
        [Answer.AGREE]: 1,
        [Answer.NEUTRAL]: 2,
        [Answer.DISAGREE]: 1
    },
    [Answer.DISAGREE]: {
        [Answer.AGREE]: 0,
        [Answer.NEUTRAL]: 1,
        [Answer.DISAGREE]: 2
    },
    [Answer.SKIP]: {
        [Answer.AGREE]: 0,
        [Answer.NEUTRAL]: 0,
        [Answer.DISAGREE]: 0
    }
};