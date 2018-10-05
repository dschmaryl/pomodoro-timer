import React from 'react';
// import { Text, TouchableNativeFeedback, View, Picker } from 'react-native';
import { Text, TouchableNativeFeedback, View } from 'react-native';

import { Picker } from '../Picker';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

export class Theme extends React.Component {
  constructor() {
    super();
    this.state = { showPicker: false };
  }

  hidePicker = () => this.setState({ showPicker: false });

  render() {
    return (
      <View style={styles.themeContainer}>
        <View style={[styles.rowView, this.props.colors.borderColor]}>
          <Text style={[styles.rowText, this.props.colors.textColor]}>
            Color theme:
          </Text>
          <View style={styles.themeButtonContainer}>
            {/* <View style={styles.adjusterView}> */}
            {/* <View style={styles.themeLabelView}>
                <Text style={[styles.rowText, this.props.colors.textColor]}>
                  {this.props.theme}
                </Text>
              </View> */}
            {/* <TouchableNativeFeedback
                onPress={() => this.setState({ showPicker: true })}
              >
                <View style={styles.buttonView}>
                  <Icon
                    name="md-arrow-up"
                    style={[styles.iconStyle, this.props.colors.buttonColor]}
                  />
                </View>
              </TouchableNativeFeedback> */}
            <Picker
              showPicker={true}
              data={['Cappuccino', 'Solarized', 'Monochrome']}
              selectedIndex={this.props.themeIndex}
              onSelect={itemValue => {
                this.props.setTheme(itemValue.position);
                this.setState({ showPicker: false });
              }}
              hidePicker={this.hidePicker}
              colors={this.props.colors}
            />
            {/* </View> */}
          </View>
        </View>

        {/* <Picker
          showPicker={this.state.showPicker}
          data={['Cappuccino', 'Solarized', 'Monochrome']}
          selectedIndex={this.props.themeIndex}
          onSelect={itemValue => {
            this.props.setTheme(itemValue.position);
            this.setState({ showPicker: false });
          }}
          hidePicker={this.hidePicker}
          colors={this.props.colors}
        /> */}
      </View>
    );
  }
}
