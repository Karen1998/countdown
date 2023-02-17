export type TStackAtom = {
    isActive: boolean;
    timeStart: number;
    timeEnd: number;
    paused: boolean;
};

export type TProgressAtom = {
    countDown: number;
    progress: number;
};
