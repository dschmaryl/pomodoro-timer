import { connect } from 'react-redux';

import { showPicker } from '../../../actions/picker';

import { Adjuster } from '../components/Adjuster'

const mapStateToProps = state => ({
  label: 'Color theme',
  value: state.settings.themeName,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(showPicker('theme'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
