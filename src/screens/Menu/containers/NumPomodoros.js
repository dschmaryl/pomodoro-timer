import { connect } from 'react-redux';

import { showPicker } from '../../../actions/picker';
import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Number of short breaks',
  value: state.timer.numPomodoros ? state.timer.numPomodoros - 1 : 3,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onPress: oldValue => dispatch(showPicker('numPomodoros', oldValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
