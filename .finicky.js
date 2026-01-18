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
	rewrite: [
		{
			match: () => true,
			url: (url) => {
				const trackingParamsToRemove = [
					'utm_source',
					'utm_medium',
					'utm_campaign',
					'utm_term',
					'utm_content',
					'fbclid',
					'gclid',
					'ref',
					'source',
					'si',
					'igshid',
				]

				trackingParamsToRemove.forEach((param) =>
					url.searchParams.delete(param)
				)

				return url
			},
		},
	],
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
			match: /^https?:\/\/.*\.spendesk\.com\/.*$/,
			browser: {
				name: 'Comet',
				profile: 'kertos',
			},
		},
		{
			match: /^https?:\/\/oidc\.eu-central-1\.amazonaws\.com\/.*$/,
			browser: {
				name: 'Comet',
				profile: 'kertos',
			},
		},
		{
			match: /^https?:\/\/.*\.leapsome\.com\/.*$/,
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
		{
			match: /^https?:\/\/www\.swk\.de\/.*$/,
			browser: {
				name: 'Comet',
				profile: 'Drop',
			},
		},
		{
			match: /^https?:\/\/my\.dpd\.de\/.*$/,
			browser: {
				name: 'Comet',
				profile: 'Drop',
			},
		},
	],
}
