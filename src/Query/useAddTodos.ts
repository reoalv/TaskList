import {useMutation} from 'react-query';
import axios from 'axios';
import {urlTodos} from './url';
import {DataTodos} from '../Screen/DetailScreen/DetailScreen.types';

const fetchAddTodos = async (data: DataTodos) => {
  const {data: response} = await axios.post(`${urlTodos}/add`, {
    todo: data?.todo,
    completed: data?.completed,
    userId: data?.userId,
  });

  return response.data;
};

const useAddTodos = () => useMutation(fetchAddTodos);

export default useAddTodos;
