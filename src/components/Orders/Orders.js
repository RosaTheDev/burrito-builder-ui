import React from 'react';
import { deleteOrder } from '../../apiCalls';
import './Orders.css';
const Orders = props => {

  const deleteThisOrder = (id) => {
       deleteOrder(id)
       refreshPage()
  }

  const refreshPage = () =>  {
    window.location.reload(false)
  }
  const orderEls = props.orders.orders.map((order, index) => {
    return (
      <div className="order" key={index}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>
          })}
        </ul>
        <button onClick={e => deleteThisOrder(order.id)}>Delete</button>
      </div>
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;