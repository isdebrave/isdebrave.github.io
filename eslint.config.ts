import eslint from "@eslint/js";
import ts from "typescript";
import tseslint from "typescript-eslint";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.json",
                ecmaFeatures: { jsx: true },
            }
        },
        ignores: ["dist/", "node_modules/"],
        rules: {}
    }
);