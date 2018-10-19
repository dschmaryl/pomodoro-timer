import { connect } from 'react-redux';

import { toggleFirstBoot } from '../../actions';

import { Start } from './Start';

const mapStateToProps = state => ({
  firstBoot: state.settings.firstBoot,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  toggleFirstBoot: () => dispatch(toggleFirstBoot())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);
