import { connect } from 'react-redux';

import { showTimePicker } from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Long break',
  value: state.session.longBreakTime,
  valueLabel: 'min',
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onPress: oldTime => dispatch(showTimePicker('longBreak', oldTime))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
