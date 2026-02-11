// This file is only a thin re-export so that
// the actual Next.js App Router layout in `app/layout.tsx`
// is the single place that renders `<html>`, `<head>` and `<body>`.
// Having multiple React trees with `<html>/<body>` can contribute
// to hydration confusion in production.

export { metadata } from "./app/layout";
export { default } from "./app/layout";
