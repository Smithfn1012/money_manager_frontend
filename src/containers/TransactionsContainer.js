import React from 'react'
import TransactionForm from '../components/TransactionForm'
import TransactionList from '../components/TransactionList'

class TransactionsContainer extends React.Component {


  render() {
    return (
      <div>
          <TransactionForm account={this.props.account}/><br/>
          <TransactionList transactions={this.props.account && this.props.account.transactions}/>
      </div>

    )

  }

}

export default TransactionsContainer