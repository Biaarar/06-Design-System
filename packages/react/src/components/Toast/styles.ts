import { styled } from "../../styles";
import { Button } from "../Button";

export const ButtonToast = styled(Button, {
    color: '$gray200',

    '.slide-in': {
        transform: 'translateX(0)',
        opacity: '1',
    }
})

export const ToastContainer = styled('div', {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1000,
    padding: '$4',
    borderRadius: '$md',
    backgroundColor: '$gray800',
    color: '$gray100',
    boxShadow: '$md',
    display: 'flex',
    flexDirection: 'row',
    gap: '5rem',
    border: '1px solid $gray600',
    transform: 'translateX(100%)',
    opacity: '0',
    transition: 'transform 0.5s ease, opacity 0.5s ease',
    willChange: 'transform, opacity',

    variants: {
        opened: {
            true: {
                opacity: 1,
                transform: 'translateX(0)',
            },
            false: {
                opacity: 0,
                transform: 'translateX(100%)',
            },
        },
    },

})
export const H1 = styled('h1', {

    fontSize: '$md',
    color: '$white',
    fontFamily: '$default',
})
export const P = styled('p', {
    fontSize: '$sm',
    color: '$white',
    fontFamily: '$default',

})