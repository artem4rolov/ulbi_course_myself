import type { Meta, StoryObj } from '@storybook/react'
import { ThemeMode } from 'app/context/theme-context/theme-context'
import { ThemeDecorator } from 'app/providers/storybook/theme-decorator/theme-decorator'
import { Modal } from './modal'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const ModalLight: Story = {
  args: {
    isOpen: true,
    setIsOpen: () => {},
    children: <>Modal light theme</>,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={ThemeMode.LIGHT}>
        <Story />
      </ThemeDecorator>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
}

export const ModalDark: Story = {
  args: {
    isOpen: true,
    setIsOpen: () => {},
    children: <>Modal light theme</>,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={ThemeMode.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
}
