import { styled } from '../../styles'

export const CalendarContainer = styled('div', {
    width: '540px',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
})
export const CalendarHeader = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$gray700',
    color: 'white',

    '& h2': {
        marginLeft: '10px',
    }
})

export const Button = styled('button', {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
})

export const TooltipStyle = styled('div', {
    position: 'absolute',
    top: '-30px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '5px 10px',
    backgroundColor: '$gray900',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    zIndex: 1,

})

export const CalendarWeekdays = styled('div', {
    fontWeight: 'bold',
    color: 'white',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    textAlign: 'center',
    padding: '0.5rem',
    backgroundColor: '$gray700',

})

export const CalendarDays = styled('div', {
    fontWeight: 'bold',
    color: 'white',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    textAlign: 'center',
    padding: '0.5rem',
    backgroundColor: '$gray700',

})

export const WeekDays = styled('div', {
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '$gray700',

})

export const Empty = styled('div', {
    visibility: 'hidden',
})
export const Days = styled('button', {
    all: 'unset',
    padding: ' 0.75rem 0',
    margin: '2px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background 0.2s',
    backgroundColor: '$gray800',
    color: 'white',
    '&:hover': {
        backgroundColor: '$gray700',
    },

    '&.indisponivel': {
        backgroundColor: '$gray700',
        color: '$white',
    },


})

export class DaysSelected {
    static baseStyle = {
        all: 'unset',
        padding: '0.75rem 0',
        margin: '2px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background 0.2s',
        backgroundColor: '$gray800',
        color: 'white',
    };

}






