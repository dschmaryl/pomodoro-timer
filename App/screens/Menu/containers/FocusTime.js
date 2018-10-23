import { connect } from 'react-redux';

import { showPicker } from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Focus time',
  value: state.timer.focusTime,
  valueLabel: 'min',
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onPress: oldValue => dispatch(showPicker('focusTime', oldValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
