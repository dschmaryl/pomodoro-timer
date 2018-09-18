import { connect } from 'react-redux';

import {
  decreaseWorkTime,
  increaseWorkTime
} from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Work time',
  value: state.times.workTime,
  valueLabel: 'min',
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
