import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins(
  pathHtml: string,
  isDev: boolean,
): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: pathHtml,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin(),
    new DefinePlugin({
      __IS_DEV__: isDev,
    }),
  ]
}
