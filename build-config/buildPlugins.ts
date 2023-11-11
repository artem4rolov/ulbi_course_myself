import path from "path";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export function buildPlugins(pathHtml: string): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: pathHtml,
    }),
    new ProgressPlugin(),
  ];
}
