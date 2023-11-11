import path from "path";
import webpack from "webpack";
import { buildConfig } from "./build-config";

const config: webpack.Configuration = buildConfig({
  mode: "production",
  path: {
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
  },
});

export default config;
