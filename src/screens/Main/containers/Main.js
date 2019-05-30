import { connect } from 'react-redux';

import { setAppState } from '../../../actions/timer';
import { toggleRunInBackground } from '../../../actions/settings';
import { Main } from '../components/Main';

const mapStateToProps = state => ({
  colors: state.settings.colors,
  runInBackground: state.settings.runInBackground, // to update persisted
  notificationIsEnabled: state.settings.notificationIsEnabled // same
});

mapDispatchToProps = dispatch => ({
  setAppState: nextAppState => dispatch(setAppState(nextAppState)),
  toggleRunInBackground: () => dispatch(toggleRunInBackground())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
