import { useState, useEffect} from 'react';
import axios from 'axios';
import { ProductCard } from '../../components';
import './styles.css';

const ShopPage = () => {
	const [categories, setCategories] = useState([]);
	const [fetchedProducts, setFetchedProducts] = useState([]);
	const [products, setProducts] = useState([]);
	const [filters, setFilters] = useState({});

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

	const filterByCategory = (event, category) => {
		const value = event.target.checked;
		console.table({category, value});
		
		if (value) {
			const filteredProducts = fetchedProducts.filter(item => item.category === category);
			setFilters({category: category});
			setProducts(filteredProducts);
		} else {
			const filteredProducts = fetchedProducts.filter(item => filters.includes(item.categoryId));
			setProducts(filteredProducts);
		}
	};

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
						onChange={event => filterByCategory(event, item.title)}
					/>{item.title}
				</label>
			))}
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
