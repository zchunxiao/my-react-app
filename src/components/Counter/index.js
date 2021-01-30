import {Component} from 'react'
import { connect } from "react-redux";

function mapStateToProps(state) {
    console.log("dsdsa:",state)
    return {
      value: state.counter.count
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// Action Creator
const increaseAction = { type: 'increase' }

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
