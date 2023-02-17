import styled from 'styled-components';

interface IStyledProps {
    progress: number;
}

export const StackStyled = styled.div<IStyledProps>(({ theme, progress }) => ({
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: theme.palette.white,
    borderRadius: 4,
    border: `1px solid ${theme.palette.black}`,

    '&:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: `${progress}%`,
        backgroundColor: theme.palette.blue,
        transition: 'height 0.5s ease',
    },
}));
