import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

// eslint-config-next 16 ships native flat configs, so the old FlatCompat
// (@eslint/eslintrc) wrapper is no longer needed — and breaks under ESLint 10.
const eslintConfig = [
  { ignores: [".next/**", "out/**", "next-env.d.ts"] },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  // eslint-plugin-react's auto-detection calls `context.getFilename()`, removed
  // in ESLint 10. Pinning the version explicitly skips that code path.
  { settings: { react: { version: "19.2" } } },
];

export default eslintConfig;
