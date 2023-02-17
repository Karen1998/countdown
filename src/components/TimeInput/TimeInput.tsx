import React, { FC, useState } from 'react';
import { TimeInputStyled } from './TimeInput.styled';
import { useCountDown } from 'src/hooks/useCountdown.hook';
import { getMinutesAndSeconds } from 'src/helpers';
import { useAtom } from 'jotai';
import { stackAtom } from 'src/store';

interface IProps {
    onChange: (value: number) => void;
}

const TimeInput: FC<IProps> = ({ onChange }) => {
    const [activeStack] = useAtom(stackAtom);

    const [countDown] = useCountDown();

    const [value, setValue] = useState(countDown);

    const [minutes, seconds] = getMinutesAndSeconds(countDown);

    const shouldShowEditable = activeStack.paused && !activeStack.isActive;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setValue(Number(value));
    };

    const handleOnBlur = () => {
        onChange(value);
    };

    return (
        <TimeInputStyled className="bordered-content">
            {shouldShowEditable ? (
                <input
                    type="number"
                    value={value}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                />
            ) : (
                <span>{`${minutes} : ${seconds}`}</span>
            )}
        </TimeInputStyled>
    );
};

export default TimeInput;
