interface Props {
  borderColor?: string;
  size?: number;
}

export const UiSpin = ({ borderColor = "red-500" }: Props) => {
  return (
    <div
      className={`w-4 h-4 border-2 border-t-2 border-${borderColor} rounded-full animate-spin`}
    />
  );
};
