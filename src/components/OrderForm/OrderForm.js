import React, { Component } from 'react';
import { postOrders } from '../../apiCalls';
class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  handleIngredientChange = (e, ingredient) => {
    e.preventDefault();
    this.setState({...this.state, ingredients: [...this.state.ingredients, ingredient]})
  }
  
  handleSubmit = () => {
    this.clearInputs();
  }
  
  clearInputs = (e) => {
    if(this.state.name.length === 0 && this.state.ingredients.length < 1) {
      e.preventDefault();
      console.log('please insert a name and ingredient')
    } else {
      this.setState({name: '', ingredients: []});
      postOrders(this.state.name, this.state.ingredients)
      console.log('submited!')
    }


  }

  render() {
    console.log(this.state)
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e, ingredient)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>
        <button onClick={e => this.clearInputs(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
