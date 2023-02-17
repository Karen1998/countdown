import { atom } from 'jotai';
import { TProgressAtom, TStackAtom } from 'src/@types';
import { DEFAULT_TIME } from 'src/constants';

export const stackAtom = atom<TStackAtom>({
    timeStart: 0,
    timeEnd: 0,
    isActive: false,
    paused: true,
});

export const progressAtom = atom<TProgressAtom>({
    countDown: DEFAULT_TIME,
    progress: 100,
});
