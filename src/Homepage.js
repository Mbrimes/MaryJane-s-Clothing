import React from 'react';
import { useState } from 'react';
import Header from './Components/Header'
import MenuPage from './Components/MenuPage'
import {BsWhatsapp} from 'react-icons/bs'

function Home() {
	const [showAddTask, setShowAddTask] = useState(false)
	
	return (
		<>
		<div className="container"> 
			<Header menu={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask} />
			{showAddTask && <MenuPage />}
		</div>
	{/*top section*/}
		<div>
			Gliding Pictures
			<button> Shop Now </button>
		</div>

	{/*main body*/}
	<h2>Shop by Category</h2>

	{/*About Mj's Clothing*/}
	<h3>About Mary Jane's Clothing Company</h3>
	<p>
		Mary Jane's Clothing is a fresh-hand modern <b>Women
		 Clothing Store in Lagos</b> Being the first of it's 
		 kind in Nigeria , MJ's carries it's own brand offering
		 the lastest fashion for women.
	</p>	

			<footer>
				<div>
				<p>Our Customer Service Hours</p>
				</div>
				<div>
					<p>Customer Care</p>
				</div>

				<div>
					<p>Useful Links</p>
					<p>Naijalink &copy; 2021</p>
					<div class="fot">
						<a href="http://whatsapp.com" target="_blank" rel="noreferrer"><BsWhatsapp /></a>
					</div>
				</div>
			</footer>

		</>
	);
}

export default Home;