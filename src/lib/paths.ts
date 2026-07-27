/**
 * Prefijo del repo en GitHub Pages (project site).
 * En local queda vacío; en el build de Actions se inyecta NEXT_PUBLIC_BASE_PATH.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
