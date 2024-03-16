import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types'
import { styleLoader } from './loaders/styleLoader'
import { babelLoader } from './loaders/babelLoader'
import { svgLoader } from './loaders/svgLoader'

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const stylesLoader = styleLoader(options.isDev)

  // const typeScriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // }
  const fileLoader = babelLoader()

  const svgLoaders = svgLoader()

  return [stylesLoader, fileLoader, svgLoaders]
}
