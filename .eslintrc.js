module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: [
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        // possible errors
        // ---------------
        'no-await-in-loop': 'error',
        'no-misleading-character-class': 'error',

        // best practices
        // --------------
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        complexity: ['error', 30],
        curly: ['error', 'all'],
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'guard-for-in': 'error',
        'max-classes-per-file': ['error', 1],
        'no-alert': 'error',
        'no-caller': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-import-assign': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-str': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-prototype-builtins': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-with': 'error',

        // strict mode
        // -----------
        strict: 'error',

        // variables
        // ---------
        'no-catch-shadow': 'error',
        'no-label-var': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-use-before-define': ['error', 'nofunc'],

        // stylistic issues
        // ----------------
        camelcase: [
            'error',
            {
                properties: 'always',
                allow: ['webpack_public_path'],
            },
        ],
        'no-async-promise-executor': 'error',
        'func-name-matching': 'error',
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: true,
            },
        ],
        'lines-between-class-members': ['error', 'always'],
        'max-depth': ['error', 4],
        'max-nested-callbacks': ['error', 3],
        'max-statements': ['error', 30],
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: false,
            },
        ],
        'no-array-constructor': 'error',
        'no-console': 'error',
        'no-lonely-if': 'error',
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-unneeded-ternary': [
            'error',
            {
                defaultAssignment: false,
            },
        ],
        'one-var': [
            'error',
            {
                let: 'never',
                const: 'never',
            },
        ],
        'operator-assignment': ['error', 'always'],
        'prefer-regex-literals': 'error',
        'spaced-comment': ['error', 'always', { exceptions: ['*'] }],

        // ES2015
        // ------
        'no-restricted-imports': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-const': [
            'error',
            {
                ignoreReadBeforeAssign: true,
            },
        ],
        'prefer-promise-reject-errors': 'error',
        'prefer-template': 'error',
        'require-yield': 'error',
    },
};
