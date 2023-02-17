import React, { FC } from 'react';
import { StackStyled } from './Stack.styled';
import { useCountDown } from 'src/hooks/useCountdown.hook';

const Stack: FC = () => {
    const [, progress] = useCountDown();

    return <StackStyled progress={progress} className="bordered-content"></StackStyled>;
};

export default Stack;
