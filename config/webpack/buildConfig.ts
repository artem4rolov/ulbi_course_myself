// import { ConfigurationDevServer } from "webpack-dev-server";
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolves } from './buildResolves'
import { devServer } from './devServer'
import { BuildOptions } from './types'
import { Configuration } from 'webpack'

export function buildConfig(options: BuildOptions): Configuration {
  const { mode, path, port, isDev } = options

  return {
    mode,
    entry: path.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: path.output,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    resolve: buildResolves(options),
    plugins: buildPlugins(path.html, options.isDev),
    devServer: isDev ? devServer(port) : undefined,
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  }
}
