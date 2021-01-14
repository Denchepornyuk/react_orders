import React from 'react';

import './App.scss';

import usersFromServer from './api/users.json';
import productsFromServer from './api/products.json';
import ordersFromServer from './api/orders.json';
import { OrdersList } from './components/OrdersList';

const preparedOrders = ordersFromServer.map(order => ({
  ...order,
  user: usersFromServer.find(user => user.id === order.userId),
  products: productsFromServer.filter(product => product.orderId === order.id),
}));

function App() {
  return (
    <div className="container">
      <OrdersList orders={preparedOrders} />
    </div>
  );
}

export default App;
