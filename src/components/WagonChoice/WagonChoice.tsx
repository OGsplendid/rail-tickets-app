import { useEffect, useState } from "react";
import { WagonIcons } from "../WagonIcons/WagonIcons";
import { WagonType } from "../WagonType/WagonType";
import { useSeatsDefiner } from "../../hooks/useSeatsDefiner";
import { useFetchSeatsQuery } from "../../store/students.netoservices.api";
import { IWagon } from "../../models/models";

interface IWagonChoiceProps {
  id: string,
  from: boolean,
  onLoad: (loading: boolean) => void
}

export const WagonChoice = ({ id, from }: IWagonChoiceProps) => {
  const query = useSeatsDefiner();

  const { data } = useFetchSeatsQuery({ id, query });

  const [wagonClass, setWagonClass] = useState<string | null>(null);
  const [wagonData, setWagonData] = useState<IWagon[] | []>([]);

  const handleClassChange = (wagonClass: string | null) => {
    setWagonClass(wagonClass);
  }

  // console.log(isSuccess)

  // useEffect(() => {
  //   if (!isSuccess) onLoad(true);
  //   if (isSuccess) onLoad(false);
  // }, [isSuccess])

  useEffect(() => {
    if (!data) return;
    let chosenClass = data?.filter((c) => c.coach.class_type === wagonClass);
    if (!chosenClass) chosenClass = [];
    setWagonData(chosenClass);
  }, [data, wagonClass]);

  return (
    <div className='wagon-choice'>
      <h3>Тип вагона</h3>
      <WagonIcons onChange={handleClassChange} />
      <WagonType wagonClass={wagonClass} wagonData={wagonData} from={from} />
    </div>
  )
}
