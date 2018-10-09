import { connect } from 'react-redux';

import { showThemePicker } from '../../../actions';

import { Adjuster } from '../components/Adjuster'

const mapStateToProps = state => ({
  label: 'Color theme',
  value: state.theme.themeName,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(showThemePicker())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
