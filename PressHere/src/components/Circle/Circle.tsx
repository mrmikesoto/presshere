import React from 'react';
import type {PropsWithChildren} from 'react';
import {Alert, Text, TouchableHighlight, View} from 'react-native';
import styles from './styles';

type CircleProps = PropsWithChildren<{
  color: string;
}>;

const _onPressButton = () => {
  Alert.alert('You tapped the button!');
};

const Circle = ({color}: CircleProps): JSX.Element => {
  return (
    <TouchableHighlight onPress={_onPressButton} underlayColor="white">
      <View style={styles[color as keyof typeof Circle]} />
    </TouchableHighlight>
  );
};

export default Circle;
