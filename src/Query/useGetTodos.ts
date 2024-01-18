import {useQuery} from 'react-query';
import axios from 'axios';
import {urlTodos} from './url';

const fetchGetTodos = async () => {
  const {data} = await axios.get(urlTodos);

  return data;
};

const useGetTodos = () => useQuery(['getTodos'], () => fetchGetTodos());

export default useGetTodos;
