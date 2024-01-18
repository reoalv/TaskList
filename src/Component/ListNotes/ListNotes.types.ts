import {CardOptProps, CardProps} from '../CardNotes/CardNotes.types';

export type ListNotesProps = {
  data: Array<CardProps>;
  onPress: CardOptProps['onPress'];
};
