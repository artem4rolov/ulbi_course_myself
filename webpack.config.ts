import path from 'path'
import webpack from 'webpack'
import { buildConfig } from './config/webpack'
import { EnvTypes } from './config/webpack/types'

export default (env: EnvTypes) => {
  const mode = env.mode || 'development'
  const port = env.port || 3000
  // eslint-disable-next-line prefer-const
  let isDev = mode === 'development'

  const config: webpack.Configuration = buildConfig({
    mode: 'production',
    path: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
    port,
    isDev,
  })

  return config
}
