import {useMutation} from 'react-query';
import axios from 'axios';
import {urlTodos} from './url';
import {DataTodos} from '../Screen/DetailScreen/DetailScreen.types';

const fetchUpdateTodos = async (data: DataTodos) => {
  const {data: response} = await axios.put(`${urlTodos}/${data?.id}`, {
    todo: data?.todo,
    userId: data?.userId,
    completed: data?.completed,
  });

  return response.data;
};

const useUpdateTodos = () => useMutation(fetchUpdateTodos);

export default useUpdateTodos;
