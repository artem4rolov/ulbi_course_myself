import type { Meta, StoryObj } from '@storybook/react'
import { ThemeMode } from 'app/context/theme-context/theme-context'
import { ThemeDecorator } from 'app/providers/storybook/theme-decorator/theme-decorator'
import { NavPanel } from './navpanel'
import { RouterWithTranslatorDecorator } from 'app/providers/storybook'

RouterWithTranslatorDecorator

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Widgets/NavPanel',
  component: NavPanel,
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
} satisfies Meta<typeof NavPanel>

export default meta
type Story = StoryObj<typeof meta>

export const NavPanelLight: Story = {
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

export const NavPanelDark: Story = {
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
