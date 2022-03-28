import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard, Rating } from '../../components';
import './styles.css';

const ShopPage = () => {
	const [categories, setCategories] = useState([]);
	const [fetchedProducts, setFetchedProducts] = useState([]);
	const [products, setProducts] = useState([]);
	const [filterGroups, setFilterGroups] = useState([[], [], []]);
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
	const hasPriceRange = (lowest, highest) => item => item.price >= lowest && item.price < highest;
	const hasAtLeastRating = value => item => Math.round(item.rating) === value;
	const hasCategoryId = value => item => item.categoryId === value;

	const addFilter = (groupIndex, filterFunction) => {
		const newFilterGroups = [[...filterGroups[0]], [...filterGroups[1]], [...filterGroups[2]]];
		newFilterGroups[groupIndex].push(filterFunction);

		setFilterGroups(newFilterGroups);
	};
	// remove function will not diferentiate functions if value is a mapped item, maybe symbols key?
	const removeFilter = (groupIndex, filterFunction) => {
		const index = filterGroups[groupIndex].findIndex(filter => String(filter) === String(filterFunction));
		if (index > -1) {
			const newFilterGroups = [[...filterGroups[0]], [...filterGroups[1]], [...filterGroups[2]]];
			newFilterGroups[groupIndex].splice(index, 1);
			setFilterGroups(newFilterGroups);
		}
	};

	const filterProducts = () => {
		const filteredProducts = fetchedProducts.filter(product => filterGroups.every(filters => (
			filters.some(condition => condition()(product)) || !filters.length
		)));
		setProducts(filteredProducts);
	};

	useEffect(() => {
		filterProducts();
	}, [filterGroups[0], filterGroups[1], filterGroups[2]]);

	useEffect(() => {
		fetchProducts();
		fetchCategories();
	}, []);

	return (
		<div className="ShopPage-container">
			<div className="ShopPage-categories">

				{/* make into component filterGroups.map(item, index) => 
				<GroupCheckbox index={index} filterFunction={hasCategoryId} checkboxArray={categories} 
				/>  */}
				<p>Categories</p>
				{categories.length === 0 ? <p>No categories were found</p> : categories.map(item => (
					<label key={item.id}>
						<input
							type="checkbox"
							onChange={event => {
								event.target.checked
									? addFilter(0, () => hasCategoryId(item.id))
									: removeFilter(0, () => hasCategoryId(item.id))
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
								event.target.checked
									? addFilter(1, () => hasAtLeastRating(item))
									: removeFilter(1, () => hasAtLeastRating(item))
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
									event.target.checked
										? addFilter(2, () => hasPriceRange(lowest, highest))
										: removeFilter(2, () => hasPriceRange(lowest, highest))
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
