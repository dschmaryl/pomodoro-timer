import { connect } from 'react-redux';

import { showPicker } from '../../../actions/picker';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Focus time',
  value: state.timer.focusTime,
  valueLabel: 'min',
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onPress: oldValue => dispatch(showPicker('focusTime', oldValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
