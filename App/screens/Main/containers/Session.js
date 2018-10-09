import { connect } from 'react-redux';

import { Session } from '../components/Session';

const mapStateToProps = state => ({
  sessionString: state.session.sessionString,
  colors: state.theme.colors
});

export default connect(mapStateToProps)(Session);
