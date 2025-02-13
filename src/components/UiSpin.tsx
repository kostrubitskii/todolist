interface Props {
  borderColor?: string;
  size?: number;
}

export const UiSpin = ({ borderColor = "red-500", size = 4 }: Props) => {
  return (
    <div
      className={`w-${size} h-${size} border-2 border-t-2 border-${borderColor} rounded-full animate-spin`}
    />
  );
};
