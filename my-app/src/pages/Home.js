import React, { useState } from 'react'
import '../../src/assets/scss/home.scss'


import Product from '../component/product/Product'
import Button from 'react-bootstrap/Button';


function Home() {
  const productName = "Iphone";

  const[num, setNum] = useState(3)

  const products = ["Iphone", "Nokia", "Samsung", "Xiomi"];

  const increment = () => {
    if (num == 10) {
      return;
    }
    setNum(num + 1)
  }

  const decrement = () => {
    if (num == 1) {
      return;
    }
    setNum(num - 1)
  }
  

  return (
    <>
      <header>

      </header>
      <main>
        <section id='products'>
          <div className="container">
            <h1 className='text-center py-3'>Products</h1>
            <div className="row">
              {
                products.map(function (item, i) {
                  return <div className="col-3">
                    <Product productName={item} />
                  </div>
                })
              }
            </div>
            
            <h1>{num}</h1>
            <Button onClick={increment} color='success mt-3'>Increment</Button>
            
            <Button variant="warning mx-2" onClick={decrement} >Decrement</Button>
 
          </div>
        </section>
      </main>


    </>
  )
}

export default Home