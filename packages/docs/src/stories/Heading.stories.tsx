import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
    title: 'Typography/Heading',
    component: Heading,

    args: {
        children: 'Custom Title',
    },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'h1 Heading',
        as: 'h1',
        size: 'md',
    }, argTypes: {
        size: {
          options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
          control: {
            type: 'inline-radio',
          },
        }
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o heading sempre será um `h2`, mas você pode mudar isso passando a propriedade `as`'
            }
        }
    }

}
