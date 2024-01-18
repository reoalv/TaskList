export type HeaderDetailProps = {
  onPressBack: () => void;
  onPressDelete: () => void;
  onPressSave: () => void;
  onPressDone: () => void;
  isDone: boolean;
  disabled: boolean;
  isNew?: boolean;
};
