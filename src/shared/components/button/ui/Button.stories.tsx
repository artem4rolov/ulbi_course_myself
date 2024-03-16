import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { Logo } from 'shared/assets'
import { ButtonVariant } from '../lib/button.types'
import { ThemeMode } from 'app/context/theme-context/theme-context'
import { ThemeDecorator } from 'app/providers/storybook/theme-decorator/theme-decorator'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {},
  args: { width: '250px' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Link: Story = {
  args: {
    variant: ButtonVariant.LINK,
    children: 'Button link',
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

export const LinkWithIcon: Story = {
  args: {
    variant: ButtonVariant.LINK,
    children: 'Button link-inverted',
    leftIcon: <Logo />,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={ThemeMode.LIGHT}>
        <Story />
      </ThemeDecorator>
    ),
  ],
}

export const SolidLightTheme: Story = {
  args: {
    variant: ButtonVariant.SOLID_INVERTED,
    children: 'Button solid-inverted',
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={ThemeMode.LIGHT}>
        <Story />
      </ThemeDecorator>
    ),
  ],
}

export const SolidDarkTheme: Story = {
  args: {
    variant: ButtonVariant.SOLID_INVERTED,
    children: 'Button solid-inverted',
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={ThemeMode.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
}

export const SolidWithIcon: Story = {
  args: {
    variant: ButtonVariant.SOLID_INVERTED,
    children: 'Button solid-inverted',
    leftIcon: <Logo />,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={ThemeMode.LIGHT}>
        <Story />
      </ThemeDecorator>
    ),
  ],
}

export const Outline: Story = {
  args: {
    variant: ButtonVariant.OUTLINE,
    children: 'Button outline-inverted',
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={ThemeMode.LIGHT}>
        <Story />
      </ThemeDecorator>
    ),
  ],
}

export const OutlineWithIcon: Story = {
  args: {
    variant: ButtonVariant.OUTLINE,
    children: 'Button outline-inverted',
    leftIcon: <Logo />,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={ThemeMode.LIGHT}>
        <Story />
      </ThemeDecorator>
    ),
  ],
}
