import React, { FC } from 'react';
import { ButtonStyled } from './Button.styled';

interface IProps {
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}

const Button: FC<IProps> = ({ onClick = () => {}, disabled = false, children }) => {
    const handleOnClick = () => {
        if (!disabled) {
            onClick();
        }
    };

    return (
        <ButtonStyled disabled={disabled} onClick={handleOnClick}>
            {children}
        </ButtonStyled>
    );
};

export default Button;
