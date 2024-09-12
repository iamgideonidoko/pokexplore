import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import tailwind from 'eslint-plugin-tailwindcss';
import jest from 'eslint-plugin-jest';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tailwind.configs['flat/recommended'],
      eslintPluginPrettierRecommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    settings: {
      react: {
        version: 'detect',
      },
      tailwindcss: {
        whitelist: ['scrollbarless', 'drop-signal', 'form-err-msg', 'dot', 'color-input'],
        callees: ['classnames', 'clsx', 'ctl', 'twMerge'],
        classRegex: '^(parentC|c)lass(Name)?$',
      },
    },
  },
  {
    files: ['src/__tests__/**', 'src/**/*.test.js', 'src/**/*.test.jsx', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
    extends: [jest.configs['flat/recommended'], jest.configs['flat/style']],
  },
  {
    files: ['src/hooks/**/*.hook.ts'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
);
