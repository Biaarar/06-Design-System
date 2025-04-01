import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://avatars.githubusercontent.com/u/67181492?v=4',
    alt: 'Avatar',},argTypes: {
        src: {
          control: {
            type: 'text',
          },
        },
      },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}

