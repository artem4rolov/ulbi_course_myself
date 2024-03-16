import type { StorybookConfig } from '@storybook/react-webpack5'
import { RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { styleLoader, babelLoader, svgLoader } from '../webpack/loaders'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '../', '../', './src'))
    config.resolve.preferAbsolute = true
    config.module.rules.push(styleLoader(true), babelLoader())

    // исключаем правило для обработки svg
    config.module.rules = config?.module?.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    })

    config?.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.plugins.push(new MiniCssExtractPlugin())

    return config
  },
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  docs: {
    autodocs: 'tag',
  },
}
export default config
