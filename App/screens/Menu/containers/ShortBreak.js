import { connect } from 'react-redux';

import { showTimePicker } from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Short break',
  value: state.session.shortBreakTime,
  valueLabel: 'min',
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onPress: oldTime => dispatch(showTimePicker('shortBreak', oldTime))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
