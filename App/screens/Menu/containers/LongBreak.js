import { connect } from 'react-redux';

import { showPicker } from '../../../actions/picker';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Long break',
  value: state.timer.longBreakTime,
  valueLabel: 'min',
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onPress: oldValue => dispatch(showPicker('longBreakTime', oldValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
