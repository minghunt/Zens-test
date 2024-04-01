module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "airbnb",
    parser: "@babel/eslint-parser",
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "quotes": "off",
        "indent": "off",
        "linebreak-style": 0,
        "no-underscore-dangle": "off",
        "react/jsx-filename-extension": "off",
        "comma-dangle": "off",
    },
};
