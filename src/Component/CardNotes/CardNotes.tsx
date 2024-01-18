import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import type {CardOptProps, CardProps} from './CardNotes.types';
import styles from './CardNotes.styles';

const _finishCard = () => (
  <View style={styles.containerFinish}>
    <Text style={styles.finishText}>Selesai</Text>
  </View>
);

const CardNotes = (props: CardProps & CardOptProps) => {
  const {todo, completed, onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress()}
      style={styles.container}>
      <Text numberOfLines={5} style={styles.title}>
        {todo}
      </Text>
      {completed && _finishCard()}
    </TouchableOpacity>
  );
};

export default CardNotes;
