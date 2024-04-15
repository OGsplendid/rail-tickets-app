import { Slider, ConfigProvider } from 'antd';

interface IAntdSliderProps {
  railSize: number,
  handleSize: number,
  handleSizeHover: number,
  min: number,
  max: number,
  defaultValue: number[],
}

export const AntdSlider = ({
  railSize,
  handleSize,
  handleSizeHover,
  min,
  max,
  defaultValue
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
        <Slider 
          range defaultValue={defaultValue} min={min} max={max}
          tooltip={{
            placement: 'bottom', 
            color: 'transparent', 
            arrow: false,
            overlayInnerStyle: {fontSize: '16px', boxShadow: 'none', marginTop: '-7px'},
          }} />
      </ConfigProvider>
    </>
  )
}
