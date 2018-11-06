import { connect } from 'react-redux';

import { setAppState } from '../../../actions/timer';

import { Main } from '../components/Main';

const mapStateToProps = state => ({
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  setAppState: nextAppState => dispatch(setAppState(nextAppState))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
