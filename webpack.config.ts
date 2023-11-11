import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { buildConfig } from "./build-config/buildConfig";

const config: webpack.Configuration = buildConfig({
  mode: "production",
  path: {
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
  },
});

export default config;
