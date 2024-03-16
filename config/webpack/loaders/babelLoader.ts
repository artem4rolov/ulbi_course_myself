export const babelLoader = () => {
  return {
    test: /\.(js|jsx|tsx|ts)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  }
}
