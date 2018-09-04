import { connect } from 'react-redux';

import { toggleLightDark } from '../../../actions';

import { LightDark } from '../components/LightDark';

const mapStateToProps = state => ({
  lightDark: state.colors.lightDark,
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  toggleLightDark: () => dispatch(toggleLightDark())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LightDark);
