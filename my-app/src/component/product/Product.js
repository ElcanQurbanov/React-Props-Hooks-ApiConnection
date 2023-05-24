import React from 'react'
import x5 from '../../assets/img/X5.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product(props) {
  return (
    <div>

      <main>
        <section id='products'>
        <div className="container">
          <h1 className='text-center py-3'></h1>
        <div className="row">
          <div className="col-3">

            <Card 
            style={{ width: '18rem' }}>
              <Card.Img variant="top" src={x5} />
              <Card.Body>
                <Card.Title>
                  
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

          </div>

        
        </div>
      </div>
        </section>
      
      </main>
     













    </div>
  )
}

export default Product