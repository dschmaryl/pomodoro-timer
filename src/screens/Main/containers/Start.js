import { connect } from 'react-redux';

import { setFirstRunToFalse } from '../../../actions/settings';

import { Start } from '../components/Start';

const mapStateToProps = state => ({
  firstRun: state.settings.firstRun,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  setFirstRunToFalse: () => dispatch(setFirstRunToFalse())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);
