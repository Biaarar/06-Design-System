import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eligendi tenetur vero in, repellendus, exercitationem possimus ullam quibusdam eos, vitae ex dolor dolores. Obcaecati quia dignissimos ipsa et natus nihil.'
  ,size: 'md'
},argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args:{
        children: 'Strong text',
        as: 'strong',
    }
}
