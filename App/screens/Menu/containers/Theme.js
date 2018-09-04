import { connect } from 'react-redux';

import { setTheme } from '../../../actions';

import { Theme } from '../components/Theme';

const mapStateToProps = state => ({
  theme: state.colors.theme,
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  setTheme: theme => dispatch(setTheme(theme))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Theme);
