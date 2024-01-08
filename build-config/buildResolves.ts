import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types";

export function buildResolves(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    // для абсолютных путей из node_modules
    modules: [options.path.src, "node_modules"],
    preferAbsolute: true,
    alias: {},
  };
}
