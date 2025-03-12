import  { useEffect, useState } from 'react'
import Product from './Product';
import Header from './Header';

function ListProduct() {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch("https://67c83bb60acf98d070858496.mockapi.io/myreactapp/myAppReact")
      .then((req) => req.json())
      .then((data) => setProducts(data));
  }, []);

  if(products.length==0){
    return (
      <div>Loading</div>
    )
  }

  return (
    <div>
      {/* <Header/> */}
      <div style={{ maxWidth: '1300px', margin: "50px auto" }}>
        <div className='grid grid-cols-4 gap-3'>
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