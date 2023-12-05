import path from "path";
import webpack from "webpack";
import { buildConfig } from "./build-config";
import { EnvTypes } from "./build-config/types";

export default (env: EnvTypes) => {
  const mode = env.mode || "development";
  const port = env.port || 3000;
  let isDev = mode === "development";

  const config: webpack.Configuration = buildConfig({
    mode: "production",
    path: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "dist"),
      html: path.resolve(__dirname, "public", "index.html"),
    },
    port,
    isDev,
  });

  return config;
};
