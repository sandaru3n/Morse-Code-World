/** Marketing / attribution query keys stripped before indexable URLs (SEO). */
export const TRACKING_QUERY_PARAMS = new Set([
  "ref",
  "source",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "mc_cid",
  "mc_eid",
  "igshid",
  "si"
]);

export function isTrackingQueryParam(name: string): boolean {
  return TRACKING_QUERY_PARAMS.has(name.toLowerCase());
}
