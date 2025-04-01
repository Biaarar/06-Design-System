import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
    title: 'Form/Button',
    component: Button,

    args: {
        children: 'Send',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: { type: 'inline-radio' }
        },
        size:{
            options: ['sm', 'md'],
            control: { type: 'inline-radio' },
        },
        disabled: {
            control: { type: 'boolean' }},
        onClick: { action: 'clicked' },
        //é equivalent a um console.log

    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    args: {
        variant: 'primary',
        children: 'Send',
        size: 'md',
        disabled: false,


    }
}
export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        children: 'Create new',
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        children: 'Cancel',
    }
}
export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
        children: 'Small',
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        children: 'disabled',
        disabled: true,
    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
        <>
            Próximo passo
            <ArrowRight weight='bold' />
        </>
        )
    },
}





