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
				profile: 'Profile 4',
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
			match: /^https?:\/\/youtu\.be\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 3',
			},
		},
		{
			match: /^https?:\/\/duckduckgo\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 4',
			},
		},
		{
			match: /motain/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 1',
			},
		},
		{
			match: /^https?:\/\/github\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 2',
			},
		},
		{
			match: /^https?:\/\/mail\.google\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 1',
			},
		},
		{
			match: /^https?:\/\/drive\.google\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 1',
			},
		},
		{
			match: /^https?:\/\/docs\.google\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 1',
			},
		},
		{
			match: /^https?:\/\/onefootball\.atlassian\.net\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 1',
			},
		},
		{
			match: /onefootball/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 1',
			},
		},
		{
			match: /^https?:\/\/.*\.jumpcloud\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 1',
			},
		},
		{
			match: /^https?:\/\/.*\eu.mixpanel\.com\/.*$/,
			browser: {
				name: 'Brave Browser',
				profile: 'Profile 1',
			},
		},
	],
}
