import { connect } from 'react-redux';

import { getMin } from '../../../utils';
import { showPicker } from '../../../actions/picker';
import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Focus time',
  value: getMin(state.timer.focusTime),
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
