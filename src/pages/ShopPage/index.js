import { useState, useEffect} from 'react';
import { ProductCard } from '../../components';
import './styles.css';

const ShopPage = () => {
	
	const [products, setProducts] = useState([]);
	const mockProducts = [{title: 'hello'}, {title: 'world'}]
	
	useEffect(() => {

	},[]);

	return (
	<div className="ShopPage-container">
		<div className="ShopPage-categories"></div>
		<div className="ShopPage-product-feed">
			{mockProducts.length !== 0 && mockProducts.map(item => 
				<ProductCard {...item}/>
			)}
		</div>
	</div>
  );
};

export default ShopPage;
