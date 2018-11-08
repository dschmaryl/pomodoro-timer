import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const deviceWidth = width;
export const deviceHeight = height;

export const makeSize = size => size * width * height / 650;
