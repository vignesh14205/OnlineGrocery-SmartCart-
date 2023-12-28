import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchBar from "./Searchbar"; 
import Nav from './Nav';
import './Nav.css';
import Footer from './Footer';
import './Footer.css';

import img1 from './img1.webp';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.webp';
import img5 from './img5.webp';
import img6 from './img6.webp';
import img7 from './img7.webp';
import img8 from './img8.webp';
import img9 from './img9.webp';
import img10 from './img10.webp';
import img11 from './img11.webp';
import img12 from './img12.webp';
import img25 from './img25.webp';
import img26 from './img26.webp';
import img27 from './img27.webp';
import img28 from './img28.webp';

const products = [
  { id: 1, name: "Carrot", image: img1 },
  { id: 2, name: "Onion", image: img2 },
  { id: 3, name: "Tomato", image: img3 },
  { id: 4, name: "Potato", image: img4 },
  { id: 5, name: "Coconut", image: img5 },
  { id: 6, name: "Cauliflower", image: img6 },
  { id: 7, name: "Kiwi", image: img7 },
  { id: 8, name: "Apple", image: img8 },
  { id: 9, name: "Pomegranate", image: img9 },
  { id: 10, name: "Orange", image: img10 },
  { id: 11, name: "Blueberry", image: img11 },
  { id: 12, name: "RawMango", image: img12 },
  { id: 13, name: "Banana", image: img25 },
  { id: 14, name: "Mashroom", image: img26 },
  { id: 15, name: "Gralic", image: img27 },
  { id: 16, name: "Chilli(Green)", image: img28 },
 
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
        src="https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?size=626&ext=jpg&uid=R131718550&ga=GA1.1.1728835906.1703087941&semt=ais"
        alt="Card Image"
        className="card4-image"/>
        <div className="card-content">
        <h2 className="card-title">Fruits And Vegetabels</h2>
        <p className="card-text">
        Immerse in peak freshness with our vibrant fruits and vegetables! 🍇🥦 Handpicked for quality and wholesomeness, our produce is a testament to care. Sourced with precision, each bite brings vitality to your plate. Welcome to a world where every delivery is a celebration of freshness and well-being. 🌽🍓 #FreshProduce #VibrantEating        </p>
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