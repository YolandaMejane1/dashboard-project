import React from "react";
import { transactionData } from '../data/mockData'; 
import { MdCheck, MdAccessTime } from "react-icons/md"; 
import { FaTimes } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const iconMap = {
  1: <MdCheck className="text-success" style={{ fontSize: '24px', marginRight: '8px' }} />, 
  2: <MdAccessTime className="text-warning" style={{ fontSize: '24px', marginRight: '8px' }} />,
  3: <FaTimes className="text-danger" style={{ fontSize: '24px', marginRight: '8px' }} />,
};

const Transaction = () => {
  return (
    <div className="transaction-list container p-4">
      {transactionData.map((transaction) => (
        <div
          key={transaction.id}
          className="transaction-item d-flex justify-content-between align-items-center border-bottom py-2"
        >
          <div className="d-flex align-items-center">
            {iconMap[transaction.id]}
            <div className="ml-4"> 
              <span className="font-weight-semibold text-xs">{`Payment from ${transaction.reference}`}</span>
              <div className="text-muted text-xs">{transaction.date}</div>
            </div>
          </div>
          <span className="font-weight-bold text-xs">${transaction.amount.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default Transaction;