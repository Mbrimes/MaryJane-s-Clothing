import Button from './Button';
import { GrMenu } from 'react-icons/gr';
import { FaTimes } from 'react-icons/fa';
import {AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
const Header = ({title, menu, showAdd}) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button text={showAdd ? <FaTimes /> : <GrMenu />}
			 onClick={menu} />
			<AiOutlineShoppingCart/>
			<BsFillPersonFill/>
		</header>
	)
}

Header.defaultProps = {
	title:"Mary Jane's Clothing Company"
}

export default Header; 