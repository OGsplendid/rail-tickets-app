import { useNavigate } from "react-router-dom"
import { useActions } from "../../hooks/actions";

export const ChangeButton = ({ type }: { type: string }) => {
  const navigate = useNavigate();
  const { setStage } = useActions();

  const handleClick = () => {
    if (type === 'passengers') {
      setStage(1);
      navigate('/train');
    } else if (type === 'card') {
      setStage(3);
      navigate('/passengers');
    } else if (type === 'payment') {
      setStage(4);
      navigate('/payment');
    }
  }

  return (
    <button onClick={handleClick} className="change-button">Изменить</button>
  )
}
