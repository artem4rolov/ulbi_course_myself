import { ProgressPlugin, WebpackPluginInstance } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins(pathHtml: string): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: pathHtml,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin(),
  ]
}
