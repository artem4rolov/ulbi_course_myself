export type ModeType = "production" | "development";

export type PathTypes = {
  entry: string;
  output: string;
  html: string;
};

export type EnvTypes = {
  mode: ModeType;
  port?: number;
};

export interface BuildOptions {
  mode: ModeType;
  path: PathTypes;
  port: number;
  isDev: boolean;
}
