import { connect } from 'react-redux';

import {
  decreaseVolume,
  increaseVolume
} from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Volume',
  time: state.sound.volume,
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  onDecrease: () => dispatch(decreaseVolume()),
  onIncrease: () => dispatch(increaseVolume())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
