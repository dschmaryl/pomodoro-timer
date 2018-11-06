import { connect } from 'react-redux';

import { Time } from '../components/Time';

const mapStateToProps = state => ({
  minutes: state.timer.minutes,
  seconds: state.timer.seconds,
  colors: state.theme.colors
});

export default connect(mapStateToProps)(Time);
