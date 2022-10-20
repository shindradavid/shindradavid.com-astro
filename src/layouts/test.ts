export default {};

const foodnetwork: any = [
	{
		'@context': 'http://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				name: 'Food Network',
				url: 'https://www.foodnetwork.com',
				potentialAction: {
					'@type': 'SearchAction',
					target: 'https://www.foodnetwork.com/search/{search_term_string}-',
					'query-input': 'required name=search_term_string'
				}
			},
			{
				'@type': 'Organization',
				name: 'Food Network',
				url: 'https://www.foodnetwork.com',
				logo: {
					'@type': 'ImageObject',
					url: 'https://food.fnr.sndimg.com/etc/clientlibs/assets/images/food/fn-logo-flat-60x60.png',
					height: '60',
					width: '60'
				}
			}
		]
	},
	{
		'@context': 'http://schema.org',
		'@type': 'ItemList',
		itemListElement: [
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/recipes',
				position: 1,
				name: 'Recipes'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/shows',
				position: 2,
				name: 'Shows'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/profiles',
				position: 3,
				name: 'Chefs'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/how-to/packages/shopping',
				position: 4,
				name: 'Shop'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/features/articles/sweepstakes-and-contests',
				position: 5,
				name: 'Sweepstakes'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/shows/tv-schedule',
				position: 6,
				name: 'TV Schedule'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/site/newsletter-sign-up',
				position: 7,
				name: 'Newsletters'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/videos',
				position: 8,
				name: 'Videos'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/kitchen/classes',
				position: 9,
				name: 'Classes'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/magazine',
				position: 10,
				name: 'Magazine'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/fn-dish',
				position: 11,
				name: 'Blog'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/shows/a-z',
				position: 12,
				name: 'Shows A-Z'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/profiles/talent',
				position: 13,
				name: 'Chefs A-Z'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/restaurants',
				position: 14,
				name: 'Restaurants'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/holidays-and-parties/packages/halloween',
				position: 15,
				name: 'Halloween'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/recipes/photos/family-friendly-weeknight-dinner-recipes',
				position: 16,
				name: 'Family Dinners'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/recipes/packages/comfort-foods/slow-cooker-meals/easy-slow-cooker-recipes',
				position: 17,
				name: 'Slow-Cooker Recipes'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/healthy',
				position: 18,
				name: 'Healthy Meals + More'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/recipes/food-network-kitchen/taco-graveyard-dip-9343164',
				position: 19,
				name: 'Taco Graveyard Dip'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/recipes/food-network-kitchen/aloo-matar-tikki-9420974',
				position: 20,
				name: 'Aloo Matar Tikki'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/recipes/valerie-bertinelli/stout-and-caramel-milkshakes-3504728',
				position: 21,
				name: 'Stout + Caramel Milkshakes'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/recipes/food-network-kitchen/the-best-chicken-and-rice-8133711',
				position: 22,
				name: 'The Best Chicken and Rice'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/recipes/food-network-kitchen/hot-dog-mummies-11644422',
				position: 23,
				name: 'Hot Dog Mummies'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/shows/halloween-baking-championship',
				position: 24,
				name: 'Halloween Baking Championship'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/shows/halloween-wars',
				position: 25,
				name: 'Halloween Wars'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/shows/diners-drive-ins-and-dives',
				position: 26,
				name: 'Diners, Drive-Ins and Dives'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/shows/the-pioneer-woman',
				position: 27,
				name: 'The Pioneer Woman'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/shows/the-kitchen',
				position: 28,
				name: 'The Kitchen'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/shows/girl-meets-farm',
				position: 29,
				name: 'Girl Meets Farm'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/profiles/talent/kardea-brown',
				position: 30,
				name: 'Kardea Brown'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/profiles/talent/ree-drummond',
				position: 31,
				name: 'Ree Drummond'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/profiles/talent/ina-garten',
				position: 32,
				name: 'Ina Garten'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/profiles/talent/sunny-anderson',
				position: 33,
				name: 'Sunny Anderson'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/profiles/talent/bobby-flay',
				position: 34,
				name: 'Bobby Flay'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/profiles/talent/valerie-bertinelli',
				position: 35,
				name: 'Valerie Bertinelli'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/profiles/talent/guy-fieri',
				position: 36,
				name: 'Guy Fieri'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/profiles/talent/giada-de-laurentiis',
				position: 37,
				name: 'Giada De Laurentiis'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/profiles/talent/molly-yeh',
				position: 38,
				name: 'Molly Yeh'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/recipes/packages/trending-eats',
				position: 39,
				name: 'Trending Eats'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/fn-dish/news/pizza-cupcake-comes-walmart-nationwide',
				position: 40,
				name: 'Viral Frozen Snack \u2018The Pizza Cupcake\u2019 Is Now Easier to Find Than Ever'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/fn-dish/news/mms-new-purple-spokescandy',
				position: 41,
				name: 'We\u2019re Getting a New Purple M&M, But Not in Our Candy Bags'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/how-to/packages/shopping/product-reviews',
				position: 42,
				name: 'Product Reviews'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/how-to/packages/shopping/gift-ideas',
				position: 43,
				name: 'Gift Ideas'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/how-to/packages/shopping/articles',
				position: 44,
				name: 'Shop Everything'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/sponsored/sweepstakes/hauntingly-delicious-sweepstakes-2022',
				position: 45,
				name: 'Hauntingly Delicious Sweepstakes'
			},
			{
				'@type': 'SiteNavigationElement',
				url: 'https://www.foodnetwork.com/sponsored/sweepstakes/hgtv-urban-oasis-sweepstakes',
				position: 46,
				name: 'Urban Oasis 2022'
			}
		]
	}
];

let strv = {
	'@type': 'Organization',
	name: 'STRV',
	url: 'https://www.strv.com',
	logo: 'https://www.strv.com/logo.png',
	foundingDate: '2004',
	mainEntityOfPage: 'https://www.strv.com',
	founder: [
		{ '@type': 'Person', name: 'David Semerad' },
		{ '@type': 'Person', name: 'Martin Stava' },
		{ '@type': 'Person', name: 'Pavel Zeifart' },
		{ '@type': 'Person', name: 'Lubo Smid' }
	],
	sameAs: [
		'https://twitter.com/strvcom',
		'https://www.linkedin.com/company/638464',
		'https://dribbble.com/strvcom',
		'https://www.behance.net/strvcom',
		'https://www.facebook.com/strvcom',
		'https://vimeo.com/strv',
		'https://www.instagram.com/strvcom'
	],
	contactPoint: [
		{
			'@type': 'ContactPoint',
			contactType: 'customer service',
			telephone: '+1(415)2466774',
			areaServed: 'Worldwide',
			availableLanguage: 'English',
			email: 'hello@strv.com'
		}
	],
	'@context': 'https://schema.org'
};

let foodHome = [
	{
		'@context': 'http://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				name: 'Food Network',
				url: 'https://www.foodnetwork.com',
				potentialAction: {
					'@type': 'SearchAction',
					target: 'https://www.foodnetwork.com/search/{search_term_string}-',
					'query-input': 'required name=search_term_string'
				}
			},
			{
				'@type': 'Organization',
				name: 'Food Network',
				url: 'https://www.foodnetwork.com',
				logo: {
					'@type': 'ImageObject',
					url: 'https://food.fnr.sndimg.com/etc/clientlibs/assets/images/food/fn-logo-flat-60x60.png',
					height: '60',
					width: '60'
				}
			}
		]
	}
];
