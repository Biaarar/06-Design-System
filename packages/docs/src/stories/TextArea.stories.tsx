import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'

export default {
    title: 'Form/TextArea',
    component: TextArea,

    args: {},
    decorators: [
        (Story) => (
            <Box as= "label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                <Text size="sm">Obsarvations</Text>
                {Story()}
            </Box>
        ),
    ]
} as Meta<TextAreaProps>




export const Primary: StoryObj<TextAreaProps> = { args: {
    placeholder: 'Add your observations',
}}
export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true,
      },
}

