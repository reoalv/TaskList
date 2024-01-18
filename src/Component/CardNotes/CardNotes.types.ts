export type CardProps = {
  id?: number;
  userId?: number;
  todo?: string;
  completed?: boolean;
};

export type CardOptProps = {
  onPress: (arg?: CardProps) => void;
};
