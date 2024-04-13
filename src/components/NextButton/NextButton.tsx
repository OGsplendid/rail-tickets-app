interface IButtonProps {
  width: string,
  height: string,
  title: string,
  disabled: boolean,
}

export const NextButton = ({ width, height, title, disabled }: IButtonProps) => {
  return (
    <button
      className={`next-button ${disabled ? 'next-button-disabled' : 'next-button-active'}`}
      style={{ width: width, height: height }}
    >
      {title}
    </button>
  )
}
