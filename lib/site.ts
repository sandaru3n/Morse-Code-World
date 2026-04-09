export const SITE_NAME = "morsecodeworld.org";
export const SITE_DOMAIN = "morsecodeworld.org";
export const SITE_URL = `https://${SITE_DOMAIN}`;

export function absoluteUrl(path = "/"): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}
