// src/components/AccountSection.jsx

import React from 'react';
import TransactionButton from './TransactionButton';

const AccountSection = ({ title, amount, description, onViewTransactions }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <TransactionButton onClick={onViewTransactions} />
      </div>
    </section>
  );
};

export default AccountSection;
