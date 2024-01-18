import {View, Text} from 'react-native';
import React from 'react';
import {HeaderProps} from './Header.types';
import styles from './Header.styles';

const Header = (props: HeaderProps) => {
  const {leftComponent, righComponent, title, centerComponent, bgColor} = props;

  return (
    <View style={[styles.container, {backgroundColor: bgColor || '#fff'}]}>
      {leftComponent && (
        <View style={styles.containerLeft}>{leftComponent}</View>
      )}
      {title && <Text style={styles.containerText}>{title}</Text>}
      {centerComponent && (
        <View style={styles.centerComp}>{centerComponent}</View>
      )}
      {righComponent && (
        <View style={styles.containerRight}>{righComponent}</View>
      )}
    </View>
  );
};

export default Header;
