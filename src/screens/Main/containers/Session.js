import { connect } from 'react-redux';

import { Session } from '../components/Session';

const mapStateToProps = state => ({
  sessionString: state.timer.sessionString,
  colors: state.settings.colors
});

export default connect(mapStateToProps)(Session);
