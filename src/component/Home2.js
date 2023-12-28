import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchBar from "./Searchbar"; 
import Nav from './Nav';
import './Nav.css';
import Footer from './Footer';
import './Footer.css';

import img13 from './img13.webp';
import img14 from './img14.webp';
import img15 from './img15.webp';
import img16 from './img16.webp';
import img17 from './img17.webp';
import img18 from './img18.webp';
import img19 from './img19.webp';
import img20 from './img20.webp';
import img21 from './img21.webp';
import img22 from './img22.webp';
import img23 from './img23.webp';
import img24 from './img24.webp';

const products = [
  { id: 1, name: "Milkbikis", image: img13 },
  { id: 2, name: "Maggie", image: img14 },
  { id: 3, name: "LittleHearts", image: img15 },
  { id: 4, name: "GoodDay", image: img16 },
  { id: 5, name: "ParleG", image: img17 },
  { id: 6, name: "Lays", image: img18 },
  { id: 7, name: "Milbikis(Cream)", image: img19 },
  { id: 8, name: "Dosa(Batter)", image: img20 },
  { id: 9, name: "Kurkure", image: img21 },
  { id: 10, name: "Cheetos", image: img22 },
  { id: 11, name: "Nutella", image: img23 },
  { id: 12, name: "Chocos", image: img24 },
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
        src="https://img.freepik.com/premium-photo/bag-chips_488220-43045.jpg?size=626&ext=jpg&uid=R131718550&ga=GA1.1.1728835906.1703087941&semt=ais"
        alt="Card Image"
        className="card4-image"/>
        <div className="card-content">
        <h2 className="card-title">Snacks🍿</h2>
        <p className="card-text">
        Snack Time, Elevated! 🍿✨ Dive into a world of irresistible flavors with our curated collection of snacks. Whether you crave the crunch of savory chips, the sweetness of artisanal chocolates, or the wholesome goodness of nut mixes, we have the perfect indulgence for every palate. Elevate your snack game with quality treats that add joy to every bite. Welcome to a snacking experience that goes beyond the ordinary. 🌮🍫 #SnackDelights #TastyTreats         </p>
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