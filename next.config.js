/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: { styledComponents: true },
	reactStrictMode: true,
	redirects: async () => {
		return [];
	},
	rewrites: async () => [],
};

const removeImports = require('next-remove-imports')();
module.exports = removeImports({});
module.exports = nextConfig;
