import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types";
import path from "path";

export function buildConfig(options: BuildOptions) {
  const { mode, path } = options;

  return {
    mode,
    entry: path.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: path.output,
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: buildPlugins(path.html),
  };
}
