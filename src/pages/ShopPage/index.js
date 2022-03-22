import { ProductCard } from '../../components';

const ShopPage = () => {
	
	const mockProducts = [{title: 'hello'}, {title: 'world'}]
	
	return (
	<div className="ShopPage-container">
		<div className="ShopPage-categories"></div>
		<div className="ShopPage-product-feed">
			{mockProducts.map(item => 
				<ProductCard {...item}/>
			)}
		</div>
	</div>
  );
};

export default ShopPage;
