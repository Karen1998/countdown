import styled from 'styled-components';

export const ButtonStyled = styled.button(({ theme }) => ({
    padding: '8px 12px',
    cursor: 'pointer',
    border: `1px solid ${theme.palette.black}`,
}));
