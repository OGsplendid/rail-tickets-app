import { useActions } from "../../hooks/actions"

export const Logo = () => {
  const { setStage } = useActions();

  return (
    <span onClick={() => setStage(0)} className="logo">Лого</span>
  )
}
