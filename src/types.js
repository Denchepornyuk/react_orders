import PropTypes from 'prop-types';

export const typeProduct = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  orderId: PropTypes.number.isRequired,
});

export const typeUser = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export const typeOrder = PropTypes.shape({
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: typeUser,
  products: typeProduct.isRequired,
});
