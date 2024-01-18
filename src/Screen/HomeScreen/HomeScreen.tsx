import {SafeAreaView, ActivityIndicator, View} from 'react-native';
import React from 'react';
import {useGetTodos} from '../../Query';
import HeaderHome from '../../Component/HeaderHome';
import {HomeScreenProps} from './HomeScreen.types';
import {Routes} from '../Screen.types';
import styles from './HomeScreen.styles';
import ListNotes from '../../Component/ListNotes';

const HomeScreen = (props: HomeScreenProps) => {
  const {data, isLoading, isSuccess} = useGetTodos();
  const dataTodos = data?.todos;
  const isEmpty = dataTodos?.length <= 0;

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <HeaderHome
        onPressAdd={() =>
          props.navigation.navigate(Routes.DetailScreen, {
            isNew: true,
            userId: (dataTodos?.length + 1).toString(),
          })
        }
      />
      <View style={styles.container}>
        {isLoading && <ActivityIndicator />}
        {isSuccess && !isEmpty ? (
          <ListNotes
            data={dataTodos}
            onPress={val =>
              props.navigation.navigate(Routes.DetailScreen, {
                ...val,
                isNew: false,
              })
            }
          />
        ) : (
          <View />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
