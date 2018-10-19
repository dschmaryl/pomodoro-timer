import { connect } from 'react-redux';

import { showTimePicker } from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Focus time',
  value: state.session.focusTime,
  valueLabel: 'min',
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onPress: oldTime => dispatch(showTimePicker('focus', oldTime))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
