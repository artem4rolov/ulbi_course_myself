import type { Meta, StoryObj } from '@storybook/react'
import { ThemeMode } from 'app/context/theme-context/theme-context.types'
import { ThemeDecorator } from 'app/providers/storybook/theme-decorator/theme-decorator'
import { Loader } from './loader'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const LoaderLight: Story = {
  args: {},
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

export const LoaderDark: Story = {
  args: {},
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
