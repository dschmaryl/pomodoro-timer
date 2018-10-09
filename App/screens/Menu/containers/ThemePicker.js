import { connect } from 'react-redux';

import { setTheme, hideThemePicker } from '../../../actions';

import { ThemePicker } from '../components/Picker';

const mapStateToProps = state => ({
  themeIndex: state.theme.themeIndex,
  themePickerVisible: state.theme.themePickerVisible,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  hideThemePicker: () => dispatch(hideThemePicker()),
  setTheme: themeIndex => dispatch(setTheme(themeIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemePicker);
