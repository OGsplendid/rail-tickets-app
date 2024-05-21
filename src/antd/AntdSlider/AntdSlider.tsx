import { Slider, ConfigProvider, SliderSingleProps } from 'antd';

interface IAntdSliderProps {
  railSize: number,
  handleSize: number,
  handleSizeHover: number,
  min: number,
  max: number,
  defaultValue: number[],
  time: boolean,
  onChange: (value: number[]) => void,
}

const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value: number | undefined): string => {
  let result = `${value}:00`;
  if (value && value < 10) result = `0${result}`;
  return result;
}

export const AntdSlider = ({
  railSize,
  handleSize,
  handleSizeHover,
  min,
  max,
  defaultValue,
  time,
  onChange,
}: IAntdSliderProps) => {

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Slider: {
              railSize,
              handleSize,
              handleSizeHover,
              handleColor: 'white',
              handleActiveColor: 'white',
              trackBg: '#FFA800',
              trackHoverBg: '#FFA800',
              colorPrimaryBorderHover: 'white',
            }
          },
        }}
      >
        {time && <Slider
          onChange={onChange}
          range defaultValue={defaultValue} min={min} max={max}
          tooltip={{
            formatter,
            placement: 'bottom', 
            color: 'transparent', 
            arrow: false,
            overlayInnerStyle: {fontSize: '16px', boxShadow: 'none', marginTop: '-7px', zIndex: 5},
          }} />}
        {!time && <Slider
          onChange={onChange}
          range defaultValue={defaultValue} min={min} max={max}
          tooltip={{
            placement: 'bottom', 
            color: 'transparent', 
            arrow: false,
            overlayInnerStyle: {fontSize: '16px', boxShadow: 'none', marginTop: '-7px', zIndex: 5},
          }} />}
      </ConfigProvider>
    </>
  )
}
