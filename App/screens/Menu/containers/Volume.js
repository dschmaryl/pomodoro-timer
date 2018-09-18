import { connect } from 'react-redux';

import {
  decreaseVolume,
  increaseVolume
} from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Volume',
  value: state.sound.volume,
  valueLabel: ' %',
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
