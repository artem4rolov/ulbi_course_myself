import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const stylesLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            mode: "local",
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes(".module.")),
            localIdentName: options.isDev
              ? "[name]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [stylesLoader, typeScriptLoader];
}
