// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import { useState } from "react";
// export default function Home1() {


//     const [count,setCount]=useState(0);
//     const changeCount=()=>setCount(count+1);
//     const derCount=()=>setCount(count-1);

//    return(
//     <div class="home">
//     <ImageList id="Homeimg" sx={{ width: 500, height: 450 }}>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             src={`${item.img}?w=248&fit=crop&auto=format`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.title}
//             position="below"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//     </div>
//   )
// }

// const itemData = [
//   {
//     img: 'https://www.bigbasket.com/media/uploads/p/m/10000381_10-fresho-carrot-red.jpg?tr=w-1920,q=80',
//     title: 'Red Carrot',
    
//   },
//   {
//     img: 'https://www.bigbasket.com/media/uploads/p/m/40075537_5-fresho-onion.jpg?tr=w-1920,q=80',
//     title: 'Burger',
//     author: '@rollelflex_graphy726',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//   },
// ];


import React from 'react'
import { useState } from "react";
import Logo1 from './Logo1.png';
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
export default function Home1() {


    const [count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1);
    const derCount=()=>setCount(count-1);
    const changeCount1=()=>setCount(count+1);
    const derCount1=()=>setCount(count-1);

  return (
    <div class="parent">
          <div class="logohome">
         <img class="img2" src={Logo1} alt="Logo1"/>
         <h1 class="head">SmartCart</h1>
         </div> 
    <div class="image-container">
    <figure class="image">
      <div class="image1">
    <img class="items" src={img13} alt="img1"/> 
    <figcaption>
     Carrot
     <br></br>
     Add to cart:{count}
    <br></br>
    <button onClick={changeCount}>+</button> <button onClick={derCount}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img14} alt="img2"/>
    <figcaption>
    Onion
     <br></br> 
    Add to cart:{count}
    <br></br>
    <button onClick={changeCount1}>+</button> <button onClick={derCount1}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img15} alt="img3"/>
    <figcaption>  
      Tomato
     <br></br>
      Add to cart:{count}
    <br></br>
    <button onClick={changeCount}>+</button> <button onClick={derCount}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img16} alt="img4"/>
    <figcaption> 
    Potato
     <br></br>
      Add to cart:{count}
    <br></br>
    <button onClick={changeCount}>+</button> <button onClick={derCount}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img17} alt="img5"/>
    <figcaption> 
    Coconut
     <br></br>
      Add to cart:{count}
    <br></br>
    <button onClick={changeCount}>+</button> <button onClick={derCount}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img18} alt="img6"/>
    <figcaption> 
    Caulioflower
     <br></br>
      Add to cart:{count}
    <br></br>
    <button onClick={changeCount}>+</button> <button onClick={derCount}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img19} alt="img1"/> 
    <figcaption>
     Kiwi
     <br></br>
     Add to cart:{count}
    <br></br>
    <button onClick={changeCount}>+</button> <button onClick={derCount}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img20} alt="img2"/>
    <figcaption>
    Apple
     <br></br>
       Add to cart:{count}
    <br></br>
    <button onClick={changeCount1}>+</button> <button onClick={derCount1}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img21} alt="img3"/>
    <figcaption>
    Pomegranate
     <br></br>
       Add to cart:{count}
    <br></br>
    <button onClick={changeCount}>+</button> <button onClick={derCount}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img22} alt="img4"/>
    <figcaption> 
    Orange
     <br></br>
      Add to cart:{count}
    <br></br>
    <button onClick={changeCount}>+</button> <button onClick={derCount}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img23} alt="img5"/>
    <figcaption> Add to cart:{count}
    <br></br>
    Blueberry
     <br></br>
    <button onClick={changeCount}>+</button> <button onClick={derCount}>-</button> </figcaption>
    </div>
    <div class="image1">
    <img class="items" src={img24} alt="img6"/>
    <figcaption> 
    Rawmango
     <br></br>
      Add to cart:{count}
    <br></br>
    <button onClick={changeCount}>+</button> <button onClick={derCount}>-</button> </figcaption>
    </div>
</figure>
    </div>
    </div>
  )
}
