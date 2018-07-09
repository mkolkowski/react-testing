import { connect } from 'react-redux'

import { colorInverse } from '../actions'
import CustomButton from '../components/CustomButton'

const mapStateToProps = (state, ownProps) => {
    return Object.assign({},state.colorReductor);
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch(colorInverse())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomButton)
