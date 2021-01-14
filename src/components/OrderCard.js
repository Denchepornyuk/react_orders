import React from 'react';
import PropTypes from 'prop-types';
import { typeProduct, typeUser } from '../types';

export const OrderCard = ({ order }) => (
  <div className="ui card">
    <div className="ui content">
      <div className="ui description">
        <p>{`${order.title} - (${order.user.name})`}</p>
        <ul className="ui list">
          {order.products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

OrderCard.propTypes = {
  order: PropTypes.shape({
    title: PropTypes.string.isRequired,
    user: typeUser,
    products: typeProduct.isRequired,
  }).isRequired,
};
