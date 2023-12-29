import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchBar from "./Searchbar"; 
import Nav from './Nav';
import './Nav.css';
import Footer from './Footer';
import './Footer.css';

import img29 from './img29.webp';
import img30 from './img30.webp';
import img31 from './img31.webp';
import img32 from './img32.webp';
import img33 from './img33.webp';
import img34 from './img34.webp';
import img35 from './img35.webp';
import img36 from './img36.webp';
import img37 from './img37.webp';
import img38 from './img38.webp';
import img39 from './img39.webp';
import img40 from './img40.webp';

const products = [
  { id: 1, name: "TataSalt", image: img29 },
  { id: 2, name: "Sugar", image: img30 },
  { id: 3, name: "BlackPepper", image: img31 },
  { id: 4, name: "Dal", image: img32 },
  { id: 5, name: "GreenMong", image: img33 },
  { id: 6, name: "BasmathiRice", image: img34 },
  { id: 7, name: "JeeraRice", image: img35},
  { id: 8, name: "Chinnamon", image: img36 },
  { id: 9, name: "Pumkinseeds", image: img37 },
  { id: 10, name: "Turmeric", image: img38 },
  { id: 11, name: "ChilliPowder", image: img39 },
  { id: 12, name: "GoldWinner", image: img40 },
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



      <div class="cardmeat">
      <div className="card4">
        <img
        src="https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="Card Image"
        className="card4-image"/>
        <div className="card-content">
        <h2 className="card-title">Grains And Pulses🌾</h2>
        <p className="card-text">
        Embark on a nutrient-rich journey with our curated grains and pulses! 🌾✨ Packed with essential nutrients, these culinary gems form the foundation of a balanced diet. From hearty whole grains to protein-rich pulses, our collection ensures wholesome goodness on every plate. Elevate your meals with the purity and vitality of nature's bounty. Welcome to a culinary adventure where health and flavor converge seamlessly. 🍚🌱 #NutrientRich #WholesomeChoices        
         </p>
        </div>
        </div>
    </div>

      <SearchBar onSearch={handleSearch} />


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