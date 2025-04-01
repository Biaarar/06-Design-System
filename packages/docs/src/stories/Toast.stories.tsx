import type { Meta, StoryObj } from '@storybook/react'
import React, { useRef } from 'react'
import { Toast, ToastProps, ToastHandle, Button } from '@ignite-ui/react'


export default {
  title: 'Form/Toast',
  component: Toast,
  args: {},
  argTypes: {
    duration: {
      control: { type: 'number' },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj = {
  render: (args) => {
    const toastRef = useRef<ToastHandle>(null)

    const handleShowToast = () => {
      toastRef.current?.show()
    }

    return (
      <div style={{ position: 'relative', height: '650px' }}>
        <Button onClick={handleShowToast}>Mostrar Toast aaa</Button>
        <Toast ref={toastRef} {...args} />
      </div>
    )
  },
}