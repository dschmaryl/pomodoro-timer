import { connect } from 'react-redux';

import { showPicker } from '../../../actions/picker';

import { Adjuster } from '../components/Adjuster'

const mapStateToProps = state => ({
  label: 'Color theme',
  value: state.theme.themeName,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(showPicker('theme'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
