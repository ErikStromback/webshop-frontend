import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import './styles.css';

const ProductCard = ({title, price, rating, description, mainImage}) => {
	
	const shortDescription = description.length > 160 ? description.slice(0, 160) + '…' : description;
	
	return (
		<div className="ProductCard-container">
			<div style={{ width: 280, height: 170, borderRadius: 8, margin: 8 }}>
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
					<button style={buttonStyle}><AiOutlineHeart /></button>
					<button style={buttonStyle}><AiOutlineUser /></button>
					<button style={buttonStyle}><FiShoppingCart /></button>
				</div>
			</div>
		</div>
	);
};

const buttonStyle = {
	display: 'flex',
	fontSize: 16,
	margin: 8,
	padding: 8,
	borderRadius: 30,
	background: 'none',
	color: '#111c85',
	borderWidth: 1,
	border: 'solid',
	boxShadow: 'rgba(240, 240, 240, 0.9)',
}

export { ProductCard };