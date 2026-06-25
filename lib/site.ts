export const SITE_NAME = "morsecodeworld.org";
export const SITE_DOMAIN = "morsecodeworld.org";
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const SITE_OPERATOR_NAME = "Morse Code World";

/** Single canonical postal address — used on About, Contact, and structured data. */
export const SITE_POSTAL_ADDRESS = {
  streetLine1: "13/3A, Gamunu Mawatha",
  streetLine2: "Keselwaththa, Panadura",
  country: "Sri Lanka",
  streetAddress: "13/3A, Gamunu Mawatha, Keselwaththa",
  locality: "Panadura",
  countryCode: "LK"
} as const;

export const SITE_POSTAL_ADDRESS_SCHEMA = {
  "@type": "PostalAddress",
  streetAddress: SITE_POSTAL_ADDRESS.streetAddress,
  addressLocality: SITE_POSTAL_ADDRESS.locality,
  addressCountry: SITE_POSTAL_ADDRESS.countryCode
};

export function absoluteUrl(path = "/"): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}
