import React from 'react';
import { Alert } from 'react-native';

import { Switcher } from './Switcher';

export class Background extends React.PureComponent {
  state = { key: 0 };

  handleToggle = () => {
    if (!this.props.isOn) {
      Alert.alert(
        'Are you sure?',
        'Running the timer in the background can be buggy on some phones.',
        [
          {
            text: 'Yes',
            onPress: () => this.props.onToggle()
          },
          {
            text: 'Cancel',
            onPress: () => {
              this.setState({ key: this.state.key + 1 });
            },
            style: 'cancel'
          }
        ],
        { cancelable: true }
      );
    } else {
      this.props.onToggle();
    }
  };

  render = () => {
    const { isOn, disabled, colors } = this.props;

    return (
      <Switcher
        label="Run timer in background"
        key={this.state.key}
        isOn={isOn}
        onToggle={this.handleToggle}
        disabled={disabled}
        colors={colors}
      />
    );
  };
}
