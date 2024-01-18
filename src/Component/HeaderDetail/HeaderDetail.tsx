import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../Header';
import {HeaderDetailProps} from './HeaderDetail.types';
import styles from './HeaderDetail.styles';

const _renderLeftComponent = (onPressBack: () => void) => (
  <TouchableOpacity activeOpacity={0.5} onPress={onPressBack}>
    <Text style={styles.backText}>BACK</Text>
  </TouchableOpacity>
);

const _contentSave = (onPressSave: () => void, disabled: boolean) => (
  <TouchableOpacity
    style={
      disabled
        ? styles.containerContentSaveDisable
        : styles.containerContentSave
    }
    activeOpacity={0.5}
    onPress={!disabled ? onPressSave : undefined}
    disabled={disabled}>
    <Text style={styles.textContentSave}>Simpan</Text>
  </TouchableOpacity>
);

const _contentDelete = (onPressDelete: () => void) => (
  <TouchableOpacity
    style={styles.containerContentDelete}
    activeOpacity={0.5}
    onPress={onPressDelete}>
    <Text style={styles.textContentDelete}>Hapus</Text>
  </TouchableOpacity>
);

const _contentIsDone = (isDone: boolean, onPressDone: () => void) => (
  <TouchableOpacity
    style={isDone ? styles.containerIsDone : styles.containerNotDone}
    activeOpacity={0.5}
    onPress={onPressDone}>
    <Text style={isDone ? styles.textContentIsDone : styles.textContentNotDone}>
      {isDone ? 'Ubah Kembali' : 'Tandai Selesai'}
    </Text>
  </TouchableOpacity>
);

const _renderRightComponent = (
  onPressSave: () => void,
  onPressDelete: () => void,
  onPressDone: () => void,
  isDone: boolean,
  isNew: boolean,
  disabled: boolean,
) => (
  <View style={{flexDirection: 'row'}}>
    {_contentIsDone(isDone, onPressDone)}
    {!isNew && _contentDelete(onPressDelete)}
    {_contentSave(onPressSave, disabled)}
  </View>
);

const HeaderDetail = (props: HeaderDetailProps) => {
  const {
    isDone,
    isNew = true,
    disabled = true,
    onPressBack,
    onPressDelete,
    onPressDone,
    onPressSave,
  } = props;
  return (
    <Header
      leftComponent={_renderLeftComponent(onPressBack)}
      righComponent={_renderRightComponent(
        onPressSave,
        onPressDelete,
        onPressDone,
        isDone,
        isNew,
        disabled,
      )}
    />
  );
};

export default HeaderDetail;
