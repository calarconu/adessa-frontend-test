import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Table } from 'reactstrap';
import { formatThousands } from '../helper/format.number';
import { obtenerTotal } from "../helper/obtener.total";

class shoppingCart extends Component{

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render(){
    return(
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Productos:  <Badge color="danger">{this.props.shoppingCart.length}</Badge><br /> Total: $ {formatThousands(obtenerTotal(this.props.shoppingCart))}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Productos:</DropdownItem>
            <Table striped>
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
            {this.props.shoppingCart.map((item, i) =>
              <tr key={i}>
                <td><img src={item.image} width="40"/></td>
                <td>{item.nombre}</td>
                <td>$ {formatThousands(item.precio)}</td>
                <td><Button color="danger" size="sm" onClick={this.props.deleteItemShoppingCart.bind(this, item, i)}>Eliminar</Button></td>
              </tr>
            )}
            <tr>
              <td colSpan="2">
                Total:
              </td>
              <td>$ {formatThousands(obtenerTotal(this.props.shoppingCart))}</td>
              <td>&nbsp;</td>
            </tr>
            </tbody>
            </Table>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default shoppingCart;
