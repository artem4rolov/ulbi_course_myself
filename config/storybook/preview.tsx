import type { Preview } from '@storybook/react'
import { ThemeMode } from 'app/context/theme-context/theme-context.types'
import { StyleDecorator } from 'app/providers/storybook/style-decorator/style-decorator'
import '../../src/app/styles/index.scss'
import { ThemeContextProvider } from 'app'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeContextProvider>
        <Story />
      </ThemeContextProvider>
    ),
  ],
}

export default preview
