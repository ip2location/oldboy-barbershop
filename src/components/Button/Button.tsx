export interface ReusableBtnProps {
  bg: string;
  btnText: string;
  textColor: string;
  borderColor: string;
  height: string;
  width: string;
  onHover: string | null;
}

export const ReusableButton = ({
  bg,
  btnText,
  textColor,
  borderColor,
  height,
  width,
  onHover,
}: ReusableBtnProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`bg-${bg} text-${textColor} border-${borderColor} h-${height} w-${width} m-2 font-button_font rounded-3xl hover:${onHover}`}
    >
      {btnText}
    </button>
  );
};
