import React from 'react'
import {connect} from 'react-redux'
import {addTransaction} from '../actions/addTransaction'

class TransactionForm extends React.Component {

  state = {
    exchange: 'deposit',
    amount: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTransaction(this.state, this.props.account.id)
    this.setState({
      exchange: 'deposit',
      amount: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Transaction Type:</label>
          <select name="exchange" value={this.state.kind} onChange={this.handleChange}>
            <option>deposit</option>
            <option>withdraw</option>
          </select>
          <label>Transaction Amount:</label>
          <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addTransaction})(TransactionForm)