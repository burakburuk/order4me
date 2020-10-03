module.exports = {
    extends: ['airbnb-base', 'plugin:react/recommended', 'plugin:import/react'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    ignorePatterns: ['node_modules/'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-use-before-define': ['error', { functions: false }],
        'max-len': ['error', { code: 120 }],
        'no-confusing-arrow': ['error', { allowParens: true }],
        'import/prefer-default-export': 'off',
        'no-plusplus': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
        },
        react: {
            version: '16.8',
        },
    },
    parser: 'babel-eslint',
};
