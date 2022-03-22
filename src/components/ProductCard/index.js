import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import './styles.css';

const ProductCard = ({title, price, rating, description, mainImage}) => {
	
	const shortDescription = description.length > 160 ? description.slice(0, 160) + '…' : description;
	
	return (
		<div className="ProductCard-container">
			<div style={{ width: 280, height: 200}}>
				<img src={mainImage}  className="ProductCard-thumbnail"/>
			</div>
			<div className='ProductCard-content'>
				<h3>{title}</h3>
				<div className='ProductCard-priceRating'>
					<h3>{price}</h3>
					<h3>{rating}</h3>
				</div>
				<p>{shortDescription}</p>
				<div>
					<AiOutlineHeart />
					<AiOutlineUser />
					<FiShoppingCart />
				</div>
			</div>
		</div>
	);
};

export { ProductCard };