import {ActivityIndicator, ScrollView, View} from 'react-native';
import React, {useEffect} from 'react';
import {CommonActions} from '@react-navigation/native';
import {
  DetailScreenNavigationProps,
  DetailScreenProps,
  FormTodo,
  OnSaveData,
  RenderFieldProps,
  onDeleteData,
} from './DetailScreen.types';
import styles from './DetailScreen.styles';
import HeaderDetail from '../../Component/HeaderDetail/HeaderDetail';
import {Routes} from '../Screen.types';
import FormField from '../../Component/FormField';
import {FormProvider, useForm} from 'react-hook-form';
import {useAddTodos, useDeleteTodos, useUpdateTodos} from '../../Query';

const _renderTitleField = ({isFinish, formContext}: RenderFieldProps) => {
  return (
    <View style={{flex: 1}}>
      <FormProvider {...formContext}>
        <FormField
          name="todo"
          placeholder="Ketik todo disini..."
          editable={!isFinish}
          multiline
          rules={{
            required: 'harus diisi',
          }}
        />
      </FormProvider>
    </View>
  );
};

const resetToHome = (navigation: DetailScreenNavigationProps) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: Routes.HomeScreen}],
    }),
  );
};

const onSaveData = (props: OnSaveData) => async () => {
  const {
    mutateAddTodo,
    mutateUpdateTodo,
    todo,
    userId,
    id,
    completed,
    isNew = false,
  } = props;

  if (isNew) {
    mutateAddTodo({
      userId,
      completed,
      todo,
    });
  } else {
    mutateUpdateTodo({
      id,
      userId,
      completed,
      todo,
    });
  }
};

const onDelete = (props: onDeleteData) => async () => {
  const {
    mutationDeleteTodo: {mutate},
    id,
  } = props;

  await mutate({id: id});
};

const DetailScreen = (props: DetailScreenProps) => {
  const {
    route: {params},
    navigation,
  } = props;
  const mutationAddTodo = useAddTodos();
  const mutationUpdateTodo = useUpdateTodos();
  const mutationDeleteTodo = useDeleteTodos();

  const someSuccess =
    mutationAddTodo.isSuccess ||
    mutationUpdateTodo.isSuccess ||
    mutationDeleteTodo.isSuccess;
  const someLoading =
    mutationAddTodo.isLoading ||
    mutationUpdateTodo.isLoading ||
    mutationDeleteTodo.isLoading;

  const formContext = useForm<FormTodo>();
  const [isComplete, setIsComplete] = React.useState<boolean>(
    params?.completed || false,
  );
  const userId = params?.userId || '';
  const id = params?.id;
  const isNew = params?.isNew;
  const {
    getValues,
    setValue,
    formState: {isValid},
  } = formContext;
  const {todo} = getValues();
  const disable = !isValid || !isComplete;
  const paramSave = {
    mutateAddTodo: mutationAddTodo.mutate,
    mutateUpdateTodo: mutationUpdateTodo.mutate,
    navigation,
    userId,
    id,
    todo,
    completed: isComplete,
    isNew,
  };

  useEffect(() => {
    !!params?.todo && setValue('todo', params?.todo);
    if (someSuccess) {
      resetToHome(navigation);
    }
  }, [setValue, params?.todo, someSuccess, navigation]);

  return (
    <>
      <HeaderDetail
        onPressBack={() => navigation.goBack()}
        onPressDelete={onDelete({mutationDeleteTodo, id: id || '', navigation})}
        onPressSave={onSaveData(paramSave)}
        onPressDone={() => setIsComplete(v => !v)}
        isDone={isComplete}
        isNew={params?.isNew}
        disabled={disable}
      />
      <ScrollView contentContainerStyle={styles.containerScroll}>
        {someLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          _renderTitleField({
            formContext,
            isFinish: isComplete,
          })
        )}
      </ScrollView>
    </>
  );
};

export default DetailScreen;
