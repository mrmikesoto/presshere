import React from 'react';
import type {PropsWithChildren} from 'react';
import {View} from 'react-native';
import styles from './styles';

type CircleProps = PropsWithChildren<{
  color: string;
}>;

const Circle = ({color}: CircleProps): JSX.Element => {
  return <View style={styles[color]} />;
};

export default Circle;
