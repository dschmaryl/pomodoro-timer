import { connect } from 'react-redux';

import { nextTheme, setTheme } from '../../../actions';

import { Theme } from '../components/Theme';

const mapStateToProps = state => ({
  theme: state.colors.theme,
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  nextTheme: () => dispatch(nextTheme()),
  setTheme: themeIndex => dispatch(setTheme(themeIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Theme);
