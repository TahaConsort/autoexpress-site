// Images live in public/assets and are served verbatim. Resolving them through
// BASE_URL keeps them working when the site is hosted under a subpath, such as
// a GitHub Pages project site at /autoexpress-site/.
export function asset(name) {
  return `${import.meta.env.BASE_URL}assets/${name}`
}
