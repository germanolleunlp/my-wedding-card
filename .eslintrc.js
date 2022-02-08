module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    camelcase: 'off',
    'import/no-dynamic-require': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-unreachable': 'warn',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off'
  }
};
