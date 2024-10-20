import React from 'react';

const TransactionButton = ({ onClick }) => {
  return (
    <button className="transaction-button" onClick={onClick}>
      View transactions
    </button>
  );
};

export default TransactionButton;
