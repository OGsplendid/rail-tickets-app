import ruble from '../../assets/ruble-sign.svg';
import { Price } from '../../models/models';

interface ISeatsDetailsProps {
    prices: Price | undefined,
    type: string,
}

export const SeatsDetails = ({ prices, type }: ISeatsDetailsProps) => {
  return (
    <div className='seats-details'>
        {type === 'first' &&
        <div className='seats-details__wrapper'>
            <div className="seats-details__seat-type">цена</div>
            <div>от <span>{prices?.bottom_price}</span> <img src={ruble} alt="" /> </div>
        </div>}

        {type === 'second' &&
        <>
            <div className='seats-details__wrapper'>
                <div className="seats-details__seat-type">верхние</div>
                <div><span>{prices?.top_price}</span> <img src={ruble} alt="" /> </div>
            </div>
            <div className='seats-details__wrapper'>
                <div className="seats-details__seat-type">нижние</div>
                <div><span>{prices?.bottom_price}</span> <img src={ruble} alt="" /> </div>
            </div>
        </>}

        {type === 'third' &&
        <>
            <div className='seats-details__wrapper'>
                <div className="seats-details__seat-type">верхние</div>
                <div><span>{prices?.top_price}</span> <img src={ruble} alt="" /> </div>
            </div>
            <div className='seats-details__wrapper'>
                <div className="seats-details__seat-type">нижние</div>
                <div><span>{prices?.bottom_price}</span> <img src={ruble} alt="" /> </div>
            </div>
            <div className='seats-details__wrapper'>
                <div className="seats-details__seat-type">боковые</div>
                <div><span>{prices?.side_price}</span> <img src={ruble} alt="" /> </div>
            </div>
        </>}

        {type === 'fourth' &&
        <div className='seats-details__wrapper'>
            <div className="seats-details__seat-type">цена</div>
            <div>от <span>{prices?.bottom_price}</span> <img src={ruble} alt="" /> </div>
        </div>}
    </div>
  )
}
