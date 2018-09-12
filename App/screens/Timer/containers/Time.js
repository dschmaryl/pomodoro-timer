import { connect } from 'react-redux';

import { Time } from '../components/Time';

const mapStateToProps = state => ({
  timeLeft: state.timer.timeLeft,
  colors: state.colors.colors
});

export default connect(mapStateToProps)(Time);
