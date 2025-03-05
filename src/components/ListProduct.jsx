import  { useEffect, useState } from 'react'
import Product from './Product';
import Header from './Header';

function ListProduct() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://67c83c700acf98d0708588de.mockapi.io/api/v1/product")
      .then((req) => req.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {/* <Header/> */}
      <div style={{ maxWidth: '1300px', margin: "50px auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
          {
            products.map((product, index) => (
              <Product key={index} product = {product}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ListProduct