/** Empty for local dev. GitHub Pages sets this to `/portfolio`. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix an in-site path so it works on GitHub Pages and on localhost. */
export function sitePath(path: string) {
  if (!path || /^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }
  const withBase = `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
  const [beforeHash, hash] = withBase.split("#");
  const isFile = /\.[a-z0-9]+$/i.test(beforeHash);
  const pathname = isFile || beforeHash.endsWith("/") ? beforeHash : `${beforeHash}/`;
  return hash ? `${pathname}#${hash}` : pathname;
}
