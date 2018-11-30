import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');
const fontScaler = (height > width ? width : height) / 360;

export const scaleSize = size => size * (height > width ? width : height);

export const scaleFont = fontSize => fontSize * fontScaler;

export const scaleFontWithPixelRatio = fontSize =>
  fontSize * fontScaler * PixelRatio.get();
