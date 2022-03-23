import { useState, useEffect} from 'react';
import axios from 'axios';
import { ProductCard } from '../../components';
import './styles.css';

const ShopPage = () => {
	
	const [products, setProducts] = useState([]);
	
	const fetchProducts = async () => {
		try {
			const response = await axios.get('http://localhost:4010/products')
			// console.log('response', response);
			setProducts(response.data);
		} catch (error) {
			console.log('ERROR: fetch products', error);
		}
	};

	useEffect(() => {
		fetchProducts();
	},[]);

	return (
	<div className="ShopPage-container">
		<div className="ShopPage-categories"></div>
		<div className="ShopPage-product-feed">
			{products.length === 0&&
				<h3>No products were found</h3>
			}
			{products.length !== 0 && products.map(item => 
				<ProductCard key={products.id} {...item}/>
			)}
		</div>
	</div>
  );
};

export default ShopPage;
