import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
import { BuildOptions } from "./types";

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
      rules: buildLoaders(),
    },
    resolve: buildResolves(),
    plugins: buildPlugins(path.html),
  };
}
