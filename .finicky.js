/**
 * https://github.com/johnste/finicky
 * Generator https://finicky-kickstart.vercel.app/
 * Save as ~/.finicky.js
 */

module.exports = {
	defaultBrowser: 'Safari',
	handlers: [
		{
			// https://www.icloud.com/shortcuts/a466e6ecc5d44d8189e5b6e597f42d56
			match: /^https?:\/\/www\.google\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 3',
			},
		},
		{
			match: /^https?:\/\/.*\.youtube\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 3',
			},
		},
		{
			match: /^https?:\/\/duckduckgo\.com\/.*$/,
			browser: {
				name: 'Arc',
			},
		},
		{
			match: /^https?:\/\/github\.com\/.*$/,
			browser: {
				name: 'Arc',
			},
		},
		{
			match: /^https?:\/\/mail\.google\.com\/.*$/,
			browser: 'Arc',
		},
		{
			match: /^https?:\/\/drive\.google\.com\/.*$/,
			browser: 'Arc',
		},
		{
			match: /^https?:\/\/docs\.google\.com\/.*$/,
			browser: 'Arc',
		},
		{
			match: /^https?:\/\/onefootball\.atlassian\.net\/.*$/,
			browser: 'Arc',
		},
		{
			match: /^https?:\/\/.*\.onefootball\.com\/.*$/,
			browser: 'Arc',
		},
		{
			match: /^https?:\/\/.*\.jumpcloud\.com\/.*$/,
			browser: 'Arc',
		},
	],
}
