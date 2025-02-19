const DOTENV = require('dotenv-webpack');

module.exports = ({
	experimental: {
		concurrentFeatures: true
	},
	plugins: [new DOTENV()],
	images: {
		domains: [
			'rawcdn.githack.com'
		]
	},
	env: {
		WEBSITE_URI: 'https://buyback.yearn.finance/',
		WEBSITE_NAME: 'YFI Buyback',
		WEBSITE_TITLE: 'YFI Buyback',
		WEBSITE_DESCRIPTION: 'You dump, we buy. Simple.',
		PROJECT_GITHUB_URL: 'https://github.com/yearn/yBuyback',
		USE_WALLET: true,
		USE_PRICES: true,
		USE_NETWORKS: false,
		USE_PRICE_TRI_CRYPTO: false,
		ALCHEMY_KEY: process.env.ALCHEMY_KEY,
		CG_IDS: ['yearn-finance'],
		TOKENS: [
			['0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', 18, 1],
			['0x6b175474e89094c44da98b954eedeac495271d0f', 18, 1],
			['0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e', 18, 1337],
			['0x6b175474e89094c44da98b954eedeac495271d0f', 18, 1337]
		],
		RPC_URL: {
			1: process.env.RPC_URL_MAINNET,
			250: process.env.RPC_URL_FANTOM || 'https://rpc.ftm.tools',
			42161: process.env.RPC_URL_ARBITRUM || 'https://arbitrum.public-rpc.com'
		},
		BUYBACK_SOURCE: 'https://raw.githubusercontent.com/yearn/ychad-audit/master/reports/financial/buybacks/buybacks.json',
		BUYBACK_ADDR: '0x6903223578806940bd3ff0c51f87aa43968424c8',
		LLAMA_STREAM_ADDR: '0x60c7B0c5B3a4Dc8C690b074727a17fF7aA287Ff2',
		YFI_ADDR: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
		DAI_ADDR: '0x6b175474e89094c44da98b954eedeac495271d0f'
	}
});
