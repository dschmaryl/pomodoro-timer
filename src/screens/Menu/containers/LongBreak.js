import { connect } from 'react-redux';

import { getMin } from '../../../utils';
import { showPicker } from '../../../actions/picker';
import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Long break',
  value: getMin(state.timer.longBreakTime),
  valueLabel: 'min',
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onPress: oldValue => dispatch(showPicker('longBreakTime', oldValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
