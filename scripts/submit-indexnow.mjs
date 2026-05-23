/**
 * Submit all site URLs to Bing via IndexNow.
 * Run from project folder: npm run indexnow
 * Requires INDEXNOW_KEY in .env (no Vercel access needed).
 */

const HOST = "morsecodeworld.org";
const LANGS = [
  "es", "ko", "zh", "pt", "ar", "ja", "ru", "de", "cs",
  "fr", "it", "tr", "pl", "nl", "hi", "id", "vi", "th", "uk"
];
const PATHS = [
  "/",
  "/about",
  "/morse-code-picture-translator",
  "/audio-morse-code-decoder",
  "/llms.txt",
  ...LANGS.flatMap((lang) => [
    `/${lang}`,
    `/${lang}/audio-morse-code-decoder`,
    `/${lang}/morse-code-picture-translator`
  ])
];

const key = process.env.INDEXNOW_KEY?.trim();
if (!key) {
  console.error("Missing INDEXNOW_KEY in .env");
  console.error("Add: INDEXNOW_KEY=your-key-here");
  process.exit(1);
}

const urlList = PATHS.map((p) => `https://${HOST}${p}`);
const keyLocation = `https://${HOST}/${key}.txt`;

const body = { host: HOST, key, keyLocation, urlList };

console.log(`Submitting ${urlList.length} URLs to IndexNow...`);
console.log(`Key file: ${keyLocation}`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body)
});

const text = await res.text();

if (res.ok) {
  console.log(`Success (${res.status}): URLs accepted by IndexNow.`);
  console.log("Check Bing Webmaster Tools in a few hours for indexing activity.");
  process.exit(0);
}

console.error(`Failed (${res.status}):`, text || res.statusText);
if (res.status === 403) {
  console.error("403 = key file missing or key text does not match. Open keyLocation in a browser first.");
}
process.exit(1);
