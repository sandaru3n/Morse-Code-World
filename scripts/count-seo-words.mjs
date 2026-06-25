import fs from "fs";
import path from "path";

const dir = "lib/i18n/seoArticles";
const cjk = new Set(["ja", "ko", "th"]);

for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".ts") && !["index.ts", "types.ts"].includes(x))) {
  const text = fs.readFileSync(path.join(dir, f), "utf8");
  const strings = [...text.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
  const body = strings.filter((s) => s.length > 25 && !s.includes("SeoArticle") && !s.startsWith("./"));
  const joined = body.join(" ").replace(/\*\*/g, "");
  const locale = f.replace(".ts", "");
  if (cjk.has(locale)) {
    const chars = joined.replace(/\s/g, "").length;
    console.log(`${locale}: ${chars} chars`);
  } else {
    const words = joined.split(/\s+/).filter(Boolean).length;
    console.log(`${locale}: ${words} words`);
  }
}
