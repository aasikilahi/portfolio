import fs from "node:fs";
import path from "node:path";
import { profile } from "@/content/site";
import { sitePath } from "@/lib/site-path";

export function resumePdfHref(): string | null {
  const file = path.join(process.cwd(), "public", profile.resumePdfFilename);
  return fs.existsSync(file) ? sitePath(`/${profile.resumePdfFilename}`) : null;
}
