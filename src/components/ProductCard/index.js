import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import './styles.css';

const ProductCard = ({title, price, rating, description, mainImage}) => {
	return (
		<div className="ProductCard-container">
			<img />
			<div>
				<h3>{title}</h3>
				<div>
					<h3>{price}</h3>
					<h3>{rating}</h3>
				</div>
				<p>{description}</p>
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