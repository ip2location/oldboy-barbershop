export interface ButtonProps {
  background: string;
  buttonText: string;
  textColor: string;
  borderColor: string;
  height: string;
  width: string;
  onHover: string | null;
}

export const Button = ({
  background,
  buttonText,
  textColor,
  borderColor,
  height,
  width,
  onHover,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`bg-${background} text-${textColor} border-${borderColor} h-${height} w-${width}  m-2 font-button_font rounded-3xl hover:${onHover}`}
    >
      {buttonText}
    </button>
  );
};
