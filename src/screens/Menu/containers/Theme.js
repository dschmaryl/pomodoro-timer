import { connect } from 'react-redux';

import { themes } from '../../../themes';
import { showPicker } from '../../../actions/picker';
import { Adjuster } from '../components/Adjuster'

const mapStateToProps = state => ({
  label: 'Color theme',
  value: themes[state.settings.themeIndex].name,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(showPicker('theme'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
