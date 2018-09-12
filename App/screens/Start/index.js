import { connect } from 'react-redux';

import { toggleFirstBoot } from '../../actions';

import { Start } from './Start';

const mapStateToProps = state => ({
  firstBoot: state.start.firstBoot,
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  toggleFirstBoot: () => dispatch(toggleFirstBoot())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);
