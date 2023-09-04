export const baseUrl = 'https://dummyjson.com/';

export const headerBlock = [
	{
		name: "id",
		notClickable: true
	},
	{
		name: "name",
		notClickable: true
	},
	{
		name: "description",
		notClickable: true
	},
	{
		name: "price",
		children: [
			{
				title: "lower",
				actionVal: "price_lower"
			},
			{
				title: "higher",
				actionVal: "price_higher"
			}
		]
	},
	{
		name: "photo",
		notClickable: true
	},
	{
		name: "rating",
		children: [
			{
				title: "lower",
				actionVal: "rating_lower"
			},
			{
				title: "higher",
				actionVal: "rating_higher"
			}
		]
	},
	{
		name: "stock",
		children: [
			{
				title: "lower",
				actionVal: "stock_lower"
			},
			{
				title: "higher",
				actionVal: "stock_higher"
			}
		]
	},
	{
		name: "category",
		notClickable: true

	}
]
