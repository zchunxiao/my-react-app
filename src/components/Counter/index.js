import {Component} from 'react'
import { connect } from "react-redux";
import { showMsg } from 'cxyyr'
// Action Creator
const increaseAction = { type: 'increase' }

console.log("fff:",require('cxyyr'))
showMsg();
function mapStateToProps(state) {
    return {
      value: state.counter.count
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}



class Counter extends Component {
    render() {
      const { value, onIncreaseClick } = this.props

      return (
        <div>
          <span>{value}</span>
          <button onClick={onIncreaseClick}>Increase</button>
        </div>
      )
    }
  }


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
