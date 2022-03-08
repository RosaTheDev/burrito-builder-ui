export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postOrders = (name, ingredients) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: "POST",
    body: JSON.stringify({
      name: name,
      ingredients: ingredients
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log('post data', data))
  .catch(err => console.log(err))
}