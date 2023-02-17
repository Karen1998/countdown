import styled from 'styled-components';

export const DashboardStyled = styled.div({
    display: 'flex',
    flexDirection: 'column',

    '.Dashboard-Input': {
        flex: 1,
    },

    '.Dashboard-action-buttons': {
        display: 'flex',
        flex: 1,
        marginTop: '12px',

        '& button:first-child': {
            flex: 3,
            marginRight: '8px',
        },

        '& button:last-child': {
            flex: 1,
        },
    },
});
