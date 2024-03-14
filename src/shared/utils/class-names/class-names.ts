export const classNames = (
  mainClass: string,
  condition: Record<string, boolean>,
  addtitional: string[],
): string => {
  return [
    mainClass,
    ...Object.entries(condition)
      .filter(([key, value]) => !!value)
      .map(([key, value]) => key),
    ...addtitional.filter((additionalClass) => !!additionalClass),
  ].join(' ')
}
