import { connect } from 'react-redux';

import {
  decreaseShortBreakTime,
  increaseShortBreakTime
} from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Short break',
  value: state.times.shortBreakTime,
  valueLabel: 'min',
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  onDecrease: () => dispatch(decreaseShortBreakTime()),
  onIncrease: () => dispatch(increaseShortBreakTime())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
