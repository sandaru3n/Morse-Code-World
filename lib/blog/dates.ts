/** Blog posts store dates as YYYY-MM-DD; Schema.org requires ISO 8601 with timezone. */
export function toSchemaDateTime(date: string): string {
  if (/^\d{4}-\d{2}-\d{2}T/.test(date)) return date;
  return `${date}T00:00:00Z`;
}
