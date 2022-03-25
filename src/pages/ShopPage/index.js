import { useState, useEffect} from 'react';
import axios from 'axios';
import { ProductCard, Rating } from '../../components';
import './styles.css';

const ShopPage = () => {
	const [categories, setCategories] = useState([]);
	const [fetchedProducts, setFetchedProducts] = useState([]);
	const [products, setProducts] = useState([]);
	const [filters, setFilters] = useState([]);
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

	const addFilter = (filterName, filterFunction) => {
		const newFilters = [...filters];
		newFilters.push({[filterName]: filterFunction});
		setFilters(newFilters);
	};
	const removeFilter = filterName => {
		const index = filters.findIndex(filter => Object.keys(filter)[0] === filterName);
		const newFilters = [...filters];
		if (index > -1) {
			newFilters.splice(index, 1);
			setFilters(newFilters);
		}
	};

	const filterProducts = () => {
		if (filters.length === 0) {
			setProducts(fetchedProducts);
			return;
		}
		const filteredProducts = fetchedProducts.filter(product => {
			const conditions = filters.map(filter => {
				return Object.values(filter)[0]()(product);
			});
			const isValid = conditions.includes(true);
			return isValid;
		});
		setProducts(filteredProducts);
	};

	useEffect(() => {
		filterProducts();
	},[filters]);

	useEffect(() => {
		fetchProducts();
		fetchCategories();
	},[]);

	return (
	<div className="ShopPage-container">
		<div className="ShopPage-categories">
			<p>Categories</p>
			{ categories.length === 0 ? <p>No categories were found</p> : categories.map(item => (
				<label key={item.id}>
					<input 
						type="checkbox" 
						onChange={ event => {
							event.target.checked
							? addFilter(`categoryId${item.id}`, () => hasCategoryId(item.id))
							: removeFilter(`categoryId${item.id}`)
						}}
					/>{item.title}
				</label>
			))}
			<div style={{height: 60}} />
			<p>Rating</p>
			{ [5, 4, 3, 2, 1].map(item => (
				<label key={item.toString()}>
					<input 
						type="checkbox" 
						onChange={ event => {
							event.target.checked
							? addFilter(`rating${item.id}`, () => hasAtLeastRating(item))
							: removeFilter(`rating${item.id}`)
						}}
					/>{item.title}<Rating rating={item} style={{ margin: 0 }}/>
				</label>
			))}
			<div style={{height: 60}} />
			<p>Rating</p>
			{ prices.map(item => {
				const { id, lowest, highest } = item;
				return (
					<label key={id}>
						<input 
							type="checkbox" 
							onChange={ event => {
								event.target.checked
								? addFilter(`price${id}`, () => hasPriceRange(lowest, highest))
								: removeFilter(`price${id}`)
							}}
						/>{`€${lowest}.00 - €${highest}.00`}
					</label> 
				);
			})}
		</div>
		<div className="ShopPage-product-feed">
			{ products.length === 0 ? <h3>No products were found</h3> :  products.map(product => 
				<ProductCard key={product.id} {...product}/>
			)}
		</div>
	</div>
  );
};

export default ShopPage;
