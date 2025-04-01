import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Calendar, CalendarProps } from '@ignite-ui/react'

export default {
    title: 'Form/Calendar',
    component: Calendar,
    argTypes: {
      onClick: { action: 'clicked' },
    },
    decorators: [
      (Story) => (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10rem',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: '$default',
          }}
        >
          {Story()}
        </Box>
      ),
    ],
  } as Meta<CalendarProps>;
  

export const Primary: StoryObj<CalendarProps> = {}
export const Selected: StoryObj<CalendarProps> = {
    args:{
        // selectedDate: new Date('2025-03-10'),

    }
}


