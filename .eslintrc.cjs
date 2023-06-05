module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  overrides: [],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/*.test.tsx',
          './src/mocks/**/*.ts',
          './src/utils/testUtils.tsx',
          './src/setupTests.ts',
          './vite*.ts',
        ],
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
          { pattern: 'antd', group: 'external', position: 'before' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'never',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    '@typescript-eslint/no-shadow': 0,
  },
}
