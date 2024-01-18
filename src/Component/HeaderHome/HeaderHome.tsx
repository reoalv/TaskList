import {Button} from 'react-native';
import React from 'react';
import Header from '../Header';

const _renderLeftComponent = (onPressAdd: () => void) => (
  <Button title="Add New" onPress={onPressAdd} color={'blue'} />
);

type HeaderHomeProps = {
  onPressAdd: () => void;
};

const HeaderHome = (props: HeaderHomeProps) => {
  return <Header leftComponent={_renderLeftComponent(props.onPressAdd)} />;
};

export default HeaderHome;
