import {useMutation} from 'react-query';
import axios from 'axios';
import {urlTodos} from './url';
import {DataDelete} from '../Screen/DetailScreen/DetailScreen.types';

const fetchDeleteTodos = async (data: DataDelete) => {
  const {data: response} = await axios.delete(`${urlTodos}/${data?.id}`);

  return response.data;
};

const useDeleteTodos = () => useMutation(fetchDeleteTodos);

export default useDeleteTodos;
