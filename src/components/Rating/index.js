import { AiFillStar } from 'react-icons/ai';

const Rating = ({ rating, range = 5, style }) => {
	
	const stars = Array(range).fill(0);
	
	if ( rating && rating <= range) {
		stars.forEach((star, index) => {
			if (Math.round(rating) > index) {
				stars[index] = 1
			}
		});
	}

	return (
		<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 8, ...style}}>
			{ stars.map((item, index) => (
				<AiFillStar key={index} style={{ color: item ? '#FFC416' : '#B2B2B2' }}/>
			))}
		</div> 
	);
};

export { Rating };