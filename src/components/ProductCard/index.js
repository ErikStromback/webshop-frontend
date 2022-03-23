import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import './styles.css';

const ProductCard = ({title, price, rating, description, mainImage}) => {
	
	const shortDescription = description.length > 160 ? description.slice(0, 160) + '…' : description;
	
	return (
		<div className="ProductCard-container">
			<div style={{ width: 280, height: 170, borderRadius: 8, marginRight: 16}}>
				<img src={mainImage}  className="ProductCard-thumbnail"/>
			</div>
			<div className='ProductCard-content'>
				<p className="ProductsCard-title">{title}</p>
				<div className='ProductCard-priceRating'>
					<p className="ProductsCard-title">{`€ ${price}`}</p>
					<p className="ProductsCard-description">{rating}</p>
				</div>
				<p className="ProductsCard-description">{shortDescription}</p>
				<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
					<AiOutlineHeart style={{ fontSize: 24, margin: 20 }}/>
					<AiOutlineUser style={{ fontSize: 24, margin: 20 }}/>
					<FiShoppingCart style={{ fontSize: 24, margin: 20 }}/>
				</div>
			</div>
		</div>
	);
};

export { ProductCard };