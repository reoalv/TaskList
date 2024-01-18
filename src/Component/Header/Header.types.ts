import {ReactNode} from 'react';

export type HeaderProps = {
  leftComponent?: ReactNode;
  righComponent?: ReactNode;
  centerComponent?: ReactNode;
  title?: string;
  bgColor?: string;
};
