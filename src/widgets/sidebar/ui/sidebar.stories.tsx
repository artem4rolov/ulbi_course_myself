import type { Meta, StoryObj } from '@storybook/react'
import {
  RouterWithTranslatorDecorator,
  ThemeDecorator,
} from 'app/providers/storybook'
import { SideBar } from './sidebar'
import { ThemeMode } from 'app'

RouterWithTranslatorDecorator

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/SideBar',
  component: SideBar,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  decorators: [
    (Story) => (
      <RouterWithTranslatorDecorator>
        <Story />
      </RouterWithTranslatorDecorator>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof SideBar>

export default meta
type Story = StoryObj<typeof meta>

export const SidebarLight: Story = {
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

export const SidebarDark: Story = {
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
