import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Container, Row, Col, Button } from 'reactstrap';
import ShoppingCart from './shopping-cart';
import { formatThousands } from '../helper/format.number';

const shoppingCart = [];

class ItemList extends Component{

  constructor(props){
    super(props);
    this.itemList = [
      {
        id: 1,
        nombre: "Notebook HP",
        precio: 100000,
        descripcion: "Notebook HP",
        image: "https://falabella.scene7.com/is/image/Falabella/5677871_1?$producto308$&wid=472&hei=472"
      },
      {
        id: 2,
        nombre: "Notebook Asus",
        precio: 129000,
        descripcion: "Notebook Asus",
        image: "https://falabella.scene7.com/is/image/Falabella/5773119_1?$producto308$&wid=472&hei=472"
      },
      {
        id: 3,
        nombre: "Notebook MSI",
        precio: 345000,
        descripcion: "Notebook MSI",
        image: "https://falabella.scene7.com/is/image/Falabella/5977140_1?$producto308$&wid=472&hei=472"
      },
    ];

    this.state = {
      shoppingCart
    };
  }


  render() {
    return (
      <Container>
        <div><ShoppingCart shoppingCart={this.state.shoppingCart}
                           deleteItemShoppingCart={this.deleteItemShoppingCart.bind(this)}/></div>
        <div className="flex">
          {this.itemList.map((item, i) =>
            <section key={i} className="itemList">
              <img src={item.image} alt="description" width="200" />
              <h2>{item.nombre}</h2>
              <p>{item.descripcion}</p>
              <aside>
                <p>$ {formatThousands(item.precio)}</p>
                <Button color="success" onClick={() => this.addToShoppingCart(item)}>Agregar al Carro</Button>
              </aside>
            </section>
          )}
        </div>
      </Container>
    );
  }

  addToShoppingCart(item){
    this.state.shoppingCart.push(item);
    this.setState({ shoppingCart: this.state.shoppingCart });
  }

  deleteItemShoppingCart(itemToDelete, indexToDelete){
    this.state.shoppingCart.forEach((item, index) => {
      if( itemToDelete.id === item.id && indexToDelete === index ) this.state.shoppingCart.splice(index, 1);
    });

    this.setState({ shoppingCart: this.state.shoppingCart });
  }
}

export default ItemList;
