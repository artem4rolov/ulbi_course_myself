export const classNames = (
  mainClass: string,
  condition: Record<string, boolean>,
  addtitional: string[]
): string => {
  console.log(addtitional);
  return [
    mainClass,
    ...addtitional,
    ...Object.entries(condition)
      .filter(([key, value]) => !!value)
      .map(([key, value]) => key),
  ].join(' ');
};
