interface ISwitchProps {
  value: boolean,
  name: string,
  onChange: (name: string) => void
}

export const Switch = ({ value, name, onChange }: ISwitchProps) => {
  return (
    <label className="switch">
      <input onChange={() => onChange(name)} checked={value} type="checkbox" className="switch__input" />
      <span className="switch__slider"></span>
    </label>
  )
}
