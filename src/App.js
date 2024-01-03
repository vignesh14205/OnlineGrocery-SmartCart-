// App.js (or your main file)
import React from 'react';
import './App.css';
import './Home.css';
import'./component/signup.css';
import Navigator from './Router/Navigator';
import { BrowserRouter } from 'react-router-dom';
import Checkout from './component/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './component/Map';

function App() {
    return (
       <div>
        <BrowserRouter>
        <Navigator/>
        </BrowserRouter>
        {/* <Cart/> */}
        {/* <Map/> */}
      </div> 
    );
}

export default App;

// import React , {useState} from 'react';
// import Amazon from './component/Amazon';
// import Navbar from './component/Navbar';
// import Cart from './component/Cart';
// import './component/Amazon.css';

// const App = () => {
// 	const [show, setShow] = useState(true);
// 	const [cart , setCart] = useState([]);
// 	const [warning, setWarning] = useState(false);

// 	const handleClick = (item)=>{
// 		let isPresent = false;
// 		cart.forEach((product)=>{
// 			if (item.id === product.id)
// 			isPresent = true;
// 		})
// 		if (isPresent){
// 			setWarning(true);
// 			setTimeout(()=>{
// 				setWarning(false);
// 			}, 2000);
// 			return ;
// 		}
// 		setCart([...cart, item]);
// 	}

// 	const handleChange = (item, d) =>{
// 		let ind = -1;
// 		cart.forEach((data, index)=>{
// 			if (data.id === item.id)
// 				ind = index;
// 		});
// 		const tempArr = cart;
// 		tempArr[ind].amount += d;
		
// 		if (tempArr[ind].amount === 0)
// 			tempArr[ind].amount = 1;
// 		setCart([...tempArr])
// 	}

//   return (
// 	<React.Fragment>
// 		<Navbar size={cart.length} setShow={setShow} />
// 		{
// 			show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
// 		}
// 		{
// 			warning && <div className='warning'>Item is already added to your cart</div>
// 		}
// 	</React.Fragment>
//   )
// }

// export default App
