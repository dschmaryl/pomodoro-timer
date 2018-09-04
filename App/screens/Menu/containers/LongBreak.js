import { connect } from 'react-redux';

import {
  decreaseLongBreakTime,
  increaseLongBreakTime
} from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Long break',
  time: state.times.longBreakTime,
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  onDecrease: () => dispatch(decreaseLongBreakTime()),
  onIncrease: () => dispatch(increaseLongBreakTime())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
