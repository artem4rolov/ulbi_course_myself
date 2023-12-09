import { Configuration } from "webpack-dev-server";

export function devServer(port: number): Configuration {
  return {
    open: true,
    port,
    // watchContentBase: true,
    historyApiFallback: true,
  };
}
