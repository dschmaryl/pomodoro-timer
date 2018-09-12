// import React from 'react';
// import { Text, View, Picker } from 'react-native';

// import { styles } from './styles';

// const renderPickerItems = () =>
//   Array(100)
//     .fill()
//     .map((_, i) => <Picker.Item label={i + 1} value={i + 1} />);

// export const TimePicker = ({ theme, colors, setTheme }) => (
//   <View style={[styles.rowView, colors.borderColor]}>
//     <Text style={[styles.rowText, colors.textColor]}>Theme:</Text>
//     <View style={styles.themeButtonContainer}>
//       <Picker
//         selectedValue={theme}
//         style={[styles.themePicker, colors.textColor]}
//         textStyle={styles.rowText}
//         onValueChange={itemValue => setTheme(itemValue)}
//       >
//         {renderPickerItems()}
//       </Picker>
//       {/* </Text> */}
//     </View>
//   </View>
// );
