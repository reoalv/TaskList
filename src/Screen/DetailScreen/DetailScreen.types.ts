import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes, RoutesStackParams} from '../Screen.types';
import {UseFormReturn} from 'react-hook-form';
import {UseMutateFunction, UseMutationResult} from 'react-query';

export type DetailScreenNavigationProps = NativeStackNavigationProp<
  RoutesStackParams,
  Routes.DetailScreen
>;

export type DetailScreenParams = {
  id?: number;
  userId?: number;
  todo?: string;
  completed?: boolean;
  isNew: boolean;
};

export type DetailScreenPropParams = DetailScreenParams | undefined;

export type DetailScreenProps = {
  navigation: DetailScreenNavigationProps;
  route: {
    params: DetailScreenPropParams;
  };
};

export type StringSetter = React.Dispatch<React.SetStateAction<string>>;

export type FormTodo = {
  todo: string;
};
export type RenderFieldProps = {
  formContext: UseFormReturn<FormTodo>;
  isFinish?: boolean;
};

export type AnyAction = {payload?: any; type: string};
export type AnyActionFn = (action: AnyAction) => void;

export type DataTodos = {
  userId: string | number;
  id?: string | number;
  todo: string;
  completed: boolean;
};

export type OnSaveData = {
  mutateAddTodo: UseMutateFunction<any, unknown, DataTodos, unknown>;
  mutateUpdateTodo: UseMutateFunction<any, unknown, DataTodos, unknown>;
  navigation: DetailScreenNavigationProps;
  isNew?: boolean;
} & DataTodos;

export type DataDelete = {
  id: string | number;
};

export type onDeleteData = {
  mutationDeleteTodo: UseMutationResult<any, unknown, DataDelete, unknown>;
  id: string | number;
  navigation: DetailScreenNavigationProps;
};
