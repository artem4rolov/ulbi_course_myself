export const svgLoader = () => {
  return {
    test: /\.svg$/,
    use: {
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: false,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
        ref: true,
      },
    },
  }
}
