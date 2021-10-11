/*
 * @Author: ryyyyy
 * @Date: 2021-09-21 11:52:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-21 11:56:06
 * @Description: Do not edit
 * @FilePath: /components/.eslintrc.js
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb/hooks"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
};
