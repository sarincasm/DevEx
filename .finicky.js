/**
 * https://github.com/johnste/finicky
 * Generator https://finicky-kickstart.vercel.app/
 * Save as ~/.finicky.js
 */

export default {
	defaultBrowser: {
		name: 'Comet',
		profile: 'eels',
	},
	// defaultBrowser: 'Safari',
	handlers: [
		{
			match: /^https?:\/\/google\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'P1',
			},
		},
		{
			match: /^https?:\/\/www\.google\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'P1',
			},
		},
		{
			match: /^https?:\/\/duckduckgo\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'P1',
			},
		},
		{
			match: /^https?:\/\/.*\.youtube\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'P2',
			},
		},
		{
			match: /^https?:\/\/youtu\.be\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'P2',
			},
		},
		{
			match: /kertos/i,
			browser: {
				name: 'Comet',
				profile: 'kertos',
			},
		},
		{
			match: /^https?:\/\/.*\.figma\.com\/.*$/,
			browser: {
				name: 'Comet',
				profile: 'kertos',
			},
		},
		{
			match: /^https?:\/\/github\.com\/.*$/,
			browser: {
				name: 'Comet',
				profile: 'eels',
			},
		},
		{
			match: /^https?:\/\/www\.amazon\.de\/.*$/,
			browser: {
				name: 'Comet',
				profile: 'Drop',
			},
		},
	],
}
