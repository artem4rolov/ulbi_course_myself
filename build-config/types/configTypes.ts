export type ModeType = "production" | "development";

export type PathTypes = {
  entry: string;
  output: string;
  html: string;
};

export interface BuildOptions {
  mode: ModeType;
  path: PathTypes;
}
