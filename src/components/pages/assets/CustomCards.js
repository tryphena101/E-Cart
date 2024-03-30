import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../fonts/RightGrotesk/RightGrotesk-CompactBlack.otf';
import '../../fonts/NimbusSan/NimbusSanL-Reg.otf';
import './CustomCards.css';
import CartContext from '../context/CartContext.tsx';

// still need to fix dropdown menu styling and the background but you're basically done! Well done!


export function CustomCards({product}) {

  const { selectedItem, onChange, addProductToCart, productList } = useContext(CartContext)
  


  return (
        <div class="container">
          <div class="row gy-9">
            <Card style={styles.card}>
            <div class="prod-img" style={styles.product}>
            <Card.Img class="img-fluid" variant="top" src={product.img}/>
            </div>
              <Card.Body>
                <Card.Title style={styles.title}>{product.name} - ${product.price}</Card.Title>
                <Card.Text style={styles.desc}>
                  {product.desc}
                </Card.Text>
                      <Form.Select aria-label="item select" style={styles.select}
                            onChange={(e) => selectedItem(e, true)}>
                         <option>Choose Size</option>
                         <option value= {product.id}>SMALL</option>
                         <option value= {product.id}>MEDIUM</option>
                         <option value= {product.id}>LARGE</option>
                        </Form.Select>
                          <Button variant="primary" style={styles.button}
                                  onClick ={(e) => {addProductToCart(productList)}}> Add to Cart</Button>
              </Card.Body>
           </Card>
          </div>
        </div>
  );

};

const styles = {
  card: {
    width: 345,
    height: 312,
    left: 50,
    top: 100,
    margin: 100,
    gap: 20,
    background: '#FF4100',
    border: 0

  },

  product: {
    position: 'absolute',
    width: 550,
    height: 338,
    left: 5,
    bottom: 235

  },

  title: {
    // margin: 50,
    fontFamily: 'Right Grotesk',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: 24,
    lineHeight: 29,

    position: 'absolute',
    left: 80,
    top: -20,

    color: '#FF4100'



  },

  desc: {
    position: 'absolute',
    left: 5,
    top: 350,

    fontFamily: 'Nimbus Sans L',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 15,
    textAlign: 'justify',
    letterSpacing: 0.05,

    color: '#FF4100'
  },

  select: {
    fontFamily: 'Nimbus Sans L',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,
    gap: 9,

    position: 'absolute',
    width: 190,
    height: 35,
    paddingTop: 0,
    paddingBottom: 0,
    left: 80,
    top: 415,

    background: '#FFFFFF',
    border: 1.3,
    borderRadius: 8,
    backgroundSize: 'auto'


  },

  toggle: {
    background: 'white',
    color: 'black',
    borderColor: 'white',
    width: 100,
    height: 35,
    fontSize: 14

  },

  button: {
    fontFamily: 'Nimbus Sans L',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: 0.05,

    color: '#FF4100',

    boxSizing: 'border-box',

    position: 'absolute',
    width: 238,
    height: 34,
    left: 50,
    top: 460,

    background: '#FFA900',
    border: '1',
    borderColor: '#FF4100',
    borderSize: 1.3,
    borderRadius: 8
  }
}

// const StyledCard = styled.div`
//     width: 345px;
//     height: 312px;
//     left: 50px;
//     top: 100px;
//     margin: 100px;
//     gap: 20px;
//     background: #FF4100;
//     border: 0px;
//   `;
//
//   const Product = styled.div`
//     position: absolute;
//     width: 550px;
//     height: 338px;
//     left: -100px;
//     bottom: -3px;
//
//   `};



//   const Title {
//     position: 'absolute',
//     left: 5,
//     top: 350,
//
//     fontFamily: 'Nimbus Sans L',
//     fontStyle: 'normal',
//     fontWeight: 400,
//     fontSize: 15,
//     textAlign: 'justify',
//     letterSpacing: 0.05,
//
//     color: '#FF4100'
//   },
//
//   dropdown: {
//     fontFamily: 'Nimbus Sans L',
//     // fontSize: 5,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 11,
//     gap: 9,
//
//     position: 'absolute',
//     width: 99,
//     height: 45,
//     minHeight: 35,
//     paddingTop: 0,
//     paddingBottom: 0,
//     left: 100,
//     top: 415
//
//
//   }
// }