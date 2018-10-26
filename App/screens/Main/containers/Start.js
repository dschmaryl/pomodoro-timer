import { connect } from 'react-redux';

import { setFirstRunToFalse } from '../../../actions';

import { Start } from '../components/Start';

const mapStateToProps = state => ({
  firstRun: state.settings.firstRun,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  setFirstRunToFalse: () => dispatch(setFirstRunToFalse())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);
