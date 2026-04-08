/** Normalize user morse: underscore as dash, collapse whitespace. */
export function normalizeMorseInput(input: string): string {
  return input
    .replace(/_/g, "-")
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
