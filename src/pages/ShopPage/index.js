import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard, Rating } from '../../components';
import './styles.css';

const ShopPage = () => {
	const [categories, setCategories] = useState([]);
	const [fetchedProducts, setFetchedProducts] = useState([]);
	const [products, setProducts] = useState([]);

	const [filterCategories, setFilterCategories] = useState([]);
	const [filterRatings, setFilterRatings] = useState([]);
	const [filterPrices, setFilterPrices] = useState([]);
	const prices = [
		{ id: 1, lowest: 0, highest: 10 },
		{ id: 2, lowest: 10, highest: 50 },
		{ id: 3, lowest: 50, highest: 100 },
		{ id: 4, lowest: 100, highest: 500 },
		{ id: 5, lowest: 500, highest: Infinity },
	];

	const fetchProducts = async () => {
		try {
			const response = await axios.get('http://localhost:4010/products')
			setFetchedProducts(response.data);
			setProducts(response.data);
		} catch (error) {
			console.log('ERROR: fetch products', error);
		}
	};
	const fetchCategories = async () => {
		try {
			const response = await axios.get('http://localhost:4010/categories');
			setCategories(response.data);
		} catch (error) {
			console.log('ERROR: fetch categories', error);
		}
	};

	// filter functions
	const hasPriceRange = (range, item) => item.price >= range.split('_')[0] && item.price < range.split('_')[1];
	const hasAtLeastRating = (rating, item) => Math.round(item.rating) === rating;
	const hasCategoryId = (categoryId, item) => item.categoryId === categoryId;

	const toggleFilter = (isFiltering, setState, value) => {
		if (isFiltering) {
			setState(prev => [...prev, value]);
		} else {
			setState(prev => prev.filter((item, index) => index !== prev.indexOf(value)));
		}
	};

	const filterProducts = () => {
		const filteredProducts = fetchedProducts.filter(product => (
			[
				filterCategories.some(value => hasCategoryId(value, product)) || !filterCategories.length,
				filterRatings.some(value => hasAtLeastRating(value, product)) || !filterRatings.length,
				filterPrices.some(value => hasPriceRange(value, product)) || !filterPrices.length,
			].every(i => i)
		));
		setProducts(filteredProducts);
	};
	// update products
	useEffect(() => {
		filterProducts();
	}, [filterCategories, filterRatings, filterPrices]);
	// fetch data
	useEffect(() => {
		fetchProducts();
		fetchCategories();
	}, []);

	return (
		<div className="ShopPage-container">
			<div className="ShopPage-categories">
				<p>Categories</p>
				{categories.length === 0 ? <p>No categories were found</p> : categories.map(item => (
					<label key={item.id}>
						<input
							type="checkbox"
							onChange={event => {
								toggleFilter(event.target.checked, setFilterCategories, item.id)
							}}
						/>{item.title}
					</label>
				))}
				<div style={{ height: 60 }} />
				<p>Rating</p>
				{[5, 4, 3, 2, 1].map(item => (
					<label key={item.toString()}>
						<input
							type="checkbox"
							onChange={event => {
								toggleFilter(event.target.checked, setFilterRatings, item)
							}}
						/>{item.title}<Rating rating={item} style={{ margin: 0 }} />
					</label>
				))}
				<div style={{ height: 60 }} />
				<p>Rating</p>
				{prices.map(item => {
					const { id, lowest, highest } = item;
					return (
						<label key={id}>
							<input
								type="checkbox"
								onChange={event => {
									toggleFilter(event.target.checked, setFilterPrices, `${lowest}_${highest}`)
								}}
							/>{`€${lowest}.00 - €${highest}.00`}
						</label>
					);
				})}
			</div>
			<div className="ShopPage-product-feed">
				{products.length === 0 ? <h3>No products were found</h3> : products.map(product =>
					<ProductCard key={product.id} {...product} />
				)}
			</div>
		</div>
	);
};

export default ShopPage;
