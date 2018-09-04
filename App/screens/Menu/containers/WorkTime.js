import { connect } from 'react-redux';

import {
  decreaseWorkTime,
  increaseWorkTime
} from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Work time',
  time: state.times.workTime,
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  onDecrease: () => dispatch(decreaseWorkTime()),
  onIncrease: () => dispatch(increaseWorkTime())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
