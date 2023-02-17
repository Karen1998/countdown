import React, { FC } from 'react';
import TimeInput from 'src/components/TimeInput/TimeInput';
import { DashboardStyled } from './Dashboard.styled';
import Button from 'src/components/ui-components/Button/Button';
import { useAtom } from 'jotai';
import { progressAtom, stackAtom } from 'src/store';
import { DEFAULT_TIME } from 'src/constants';

const Dashboard: FC = () => {
    const [activeStack, setActiveStack] = useAtom(stackAtom);
    const [, setProgressStack] = useAtom(progressAtom);

    const handlePause = () => {
        setActiveStack({
            ...activeStack,
            paused: true,
        });
    };

    const handlePlay = () => {
        setActiveStack({
            ...activeStack,
            paused: false,
            isActive: true,
        });
    };

    const handleDrop = () => {
        setActiveStack({
            paused: true,
            isActive: false,
            timeStart: 0,
            timeEnd: 0,
        });

        setProgressStack({
            progress: 100,
            countDown: DEFAULT_TIME,
        });
    };

    const onTimeChange = (timestamp: number) => {
        const now = new Date().getTime();
        const newTime = now + timestamp * 1000;

        setActiveStack({
            paused: false,
            isActive: true,
            timeStart: now,
            timeEnd: newTime,
        });
    };

    return (
        <DashboardStyled>
            <div className="Dashboard-Input">
                <TimeInput onChange={onTimeChange} />
            </div>

            <div className="Dashboard-action-buttons">
                <Button
                    onClick={activeStack.paused ? handlePlay : handlePause}
                    disabled={!activeStack.isActive}
                >
                    {activeStack.paused ? 'Play' : 'Pause'}
                </Button>

                <Button onClick={handleDrop} disabled={!activeStack.isActive}>
                    Drop
                </Button>
            </div>
        </DashboardStyled>
    );
};

export default Dashboard;
