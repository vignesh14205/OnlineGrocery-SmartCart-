import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchBar from "./Searchbar"; 
import Nav from './Nav';
import './Nav.css';
import Footer from './Footer';
import './Footer.css';
import Carousel from 'react-bootstrap/Carousel';

import car6 from './car6.webp';
import car7 from './car7.webp';
import car8 from './car8.webp';
import car9 from './car9.webp';

import img42 from './img42.webp';
import img43 from './img43.webp';
import img44 from './img44.webp';
import img45 from './img45.webp';
import img46 from './img46.webp';
import img47 from './img47.webp';
import img48 from './img48.webp';
import img49 from './img49.webp';
import img50 from './img50.webp';
// import img9 from './img9.webp';
// import img10 from './img10.webp';
// import img11 from './img11.webp';
// import img12 from './img12.webp';
// import img25 from './img25.webp';
// import img26 from './img26.webp';
// import img27 from './img27.webp';
// import img28 from './img28.webp';

const products = [
  { id: 1, name: "Egg(5P)", image: img42 },
  { id: 2, name: "Chicken(smallpieces)", image: img43 },
  { id: 3, name: "Chicken(Boneless)", image: img44 },
  { id: 4, name: "Fish(Katla)", image: img45 },
  { id: 5, name: "ChickenSauage", image: img46 },
  { id: 6, name: "ChickenNuggets", image: img47 },
  { id: 7, name: "Prawns", image: img48 },
  { id: 8, name: "DryFish", image: img49 },
  { id: 9, name: "Egg(12P)", image: img50 },
//   { id: 10, name: "Orange", image: img10 },
//   { id: 11, name: "Blueberry", image: img11 },
//   { id: 12, name: "RawMango", image: img12 },
//   { id: 13, name: "Banana", image: img25 },
//   { id: 14, name: "Mashroom", image: img26 },
//   { id: 15, name: "Gralic", image: img27 },
//   { id: 16, name: "Chilli(Green)", image: img28 },
 
];

export default function Home1() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [counts, setCounts] = useState(Array(products.length).fill(0));
  const [filteredProducts, setFilteredProducts] = useState(products);

  const changeCount = (index, increment) => {
    const newCounts = [...counts];
    newCounts[index] += increment;
    setCounts(newCounts);
  };

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    afterChange: (current) => {
    setSelectedProduct(filteredProducts[current]);
    },
  };

  return (
    <div className="parent">
      <Nav/>


        <SearchBar onSearch={handleSearch} />

    <div class="cardmeat">
      <div className="card4">
        <img
        src="https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Card Image"
        className="card4-image"/>
        <div className="card-content">
        <h2 className="card-title">Meats🥩</h2>
        <p className="card-text">
        Indulge in Unparalleled Freshness with Our Premium Meats! 🥩✨ Elevate your culinary experience with the finest cuts, handpicked for quality and flavor. From succulent steaks to tender roasts, our fresh meats promise a gastronomic delight. Sourced with care and delivered with precision, savor the excellence of every bite. Welcome to a world where freshness is not just a promise but a delicious reality. 🌿🍖 #PremiumMeats #CulinaryExcellence        
        </p>
        </div>
        </div>
    </div>
      

      <div className="image-container">
        <figure className="image">
          {filteredProducts.map((product, index) => (
            <div className="image1" key={index}>
              <img className="items" src={product.image} alt={`img${index + 1}`} />
              <figcaption>
                <strong>{product.name}</strong>
                <br />
                <span>Add to cart: {counts[index]}</span>
                <br />
                <button onClick={() => changeCount(index, 1)}>+</button>{" "}
                <button onClick={() => changeCount(index, -1)}>-</button>{" "}
              </figcaption>
            </div>
          ))}
        </figure>
      </div>

      {/* <div className="product-slider">
        <Slider {...settings}>
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-slide">
              <img src={product.image} alt={product.name} />
            </div>
          ))}
        </Slider>
        <div className="selected-product">
          {selectedProduct && (
            <>
              <h3>{selectedProduct.name}</h3>
              <p>Select quantity, add to cart, etc.</p>
            </>
          )}
        </div>
      </div> */}
      <Footer/>
    </div>
  );
}