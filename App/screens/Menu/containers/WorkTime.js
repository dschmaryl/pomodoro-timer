import { connect } from 'react-redux';

import { showTimePicker } from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Work time',
  value: state.times.workTime,
  valueLabel: 'min',
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onPress: oldTime => dispatch(showTimePicker('work', oldTime))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
