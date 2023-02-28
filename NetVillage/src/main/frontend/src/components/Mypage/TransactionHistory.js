import React from 'react';
import '../../styles/mypage.css';

const TransactionHistory = ({transactionHistory}) => {
    return (
        <div className="transactionItem">
            <div className="transactionTitle">
                <span className="transactionHistoryTitle">{transactionHistory.title}</span>
                <div className="transactionSeller">
                    <span className="transactionSellerList">{transactionHistory.seller}</span>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;