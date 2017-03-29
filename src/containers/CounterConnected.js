import { connect } from "react-redux";
import Counter from "../components/Counter";
import { createIncrementAction, createDecrementAction } from '../actions';

function mapStateToProps(state) {
    return {
        value: state.count
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(createIncrementAction()),
        onDecrement: () => dispatch(createDecrementAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);