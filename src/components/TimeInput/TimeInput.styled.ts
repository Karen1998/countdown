import styled from 'styled-components';

export const TimeInputStyled = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.white,
    color: theme.palette.black,
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '24px',
}));
