/** @format */

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jest/recommended',
		'eslint-config-prettier',
	],
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
	},
	plugins: ['react'],
	rules: {},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
