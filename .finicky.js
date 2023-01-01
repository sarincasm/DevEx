/**
 * https://github.com/johnste/finicky
 * Generator https://finicky-kickstart.vercel.app/
 * Save as ~/.finicky.js
 */

module.exports = {
	defaultBrowser: 'Safari',
	handlers: [
		{
			match: /^https?:\/\/google\.com\/.*$/,
			browser: 'Safari',
		},
		{
			match: /^https?:\/\/.*\.youtube\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 3',
			},
		},
		{
			match: /^https?:\/\/github\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Default',
			},
		},
		{
			match: /^https?:\/\/mail\.google\.com\/.*$/,
			browser: 'Firefox',
		},
		{
			match: /^https?:\/\/drive\.google\.com\/.*$/,
			browser: 'Firefox',
		},
		{
			match: /^https?:\/\/docs\.google\.com\/.*$/,
			browser: 'Firefox',
		},
		{
			match: /^https?:\/\/onefootball\.atlassian\.net\/.*$/,
			browser: 'Firefox',
		},
		{
			match: /^https?:\/\/.*\.onefootball\.com\/.*$/,
			browser: 'Firefox',
		},
		{
			match: /^https?:\/\/.*\.jumpcloud\.com\/.*$/,
			browser: 'Firefox',
		},
	],
}
