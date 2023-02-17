import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';
import { DEFAULT_TIME } from 'src/constants';
import { progressAtom, stackAtom } from 'src/store';

export const useCountDown = (): [number, number] => {
    const [activeStack, setActiveStack] = useAtom(stackAtom);
    const [progressData, setProgressData] = useAtom(progressAtom);

    const interval = useRef<any>(null);
    const timeLeft = useRef(0);

    useEffect(() => {
        if (!activeStack.isActive) {
            timeLeft.current = 0;
        }

        if (activeStack.paused) {
            interval.current = clearInterval(interval.current);
            return;
        }

        if (activeStack.isActive && !interval.current) {
            const timeDifference = activeStack.timeEnd - activeStack.timeStart;

            if (timeLeft.current === 0) {
                timeLeft.current = activeStack.timeEnd - activeStack.timeStart;
            }

            interval.current = setInterval(() => {
                timeLeft.current -= 1000;

                if (timeLeft.current <= 1) {
                    setActiveStack({
                        timeStart: 0,
                        timeEnd: 0,
                        paused: false,
                        isActive: false,
                    });
                    setProgressData({
                        countDown: DEFAULT_TIME,
                        progress: 100,
                    });

                    interval.current = clearInterval(interval.current);
                    return;
                }

                setProgressData({
                    countDown: timeLeft.current,
                    progress: Math.floor((timeLeft.current / timeDifference) * 100),
                });
            }, 1000);
        }

        return () => {
            clearInterval(interval.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeStack]);

    return [progressData.countDown, progressData.progress];
};
