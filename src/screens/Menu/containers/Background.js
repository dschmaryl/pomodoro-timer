import { connect } from 'react-redux';

import { toggleRunInBackground } from '../../../actions/settings';
import { Background } from '../components/Background';

const mapStateToProps = state => ({
  isOn: state.settings.runInBackground,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleRunInBackground())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Background);
