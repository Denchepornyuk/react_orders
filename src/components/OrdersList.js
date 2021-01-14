import React from 'react';
import PropTypes from 'prop-types';
import { OrderCard } from './OrderCard';
import { typeOrder } from '../types';

export const OrdersList = ({ orders }) => (
  <div>
    {orders.map(order => (
      <OrderCard order={order} key={order.id} />
    ))}
  </div>
);

OrdersList.propTypes = {
  orders: PropTypes.arrayOf(typeOrder).isRequired,
};
