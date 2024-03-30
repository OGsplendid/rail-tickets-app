import { Slider, ConfigProvider } from 'antd';

interface IAntdProps {
  railSize: number,
  handleSize: number,
  handleSizeHover: number,
}

export const AntdSlider = ({ railSize, handleSize, handleSizeHover }: IAntdProps) => {
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
          range defaultValue={[20, 50]} 
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
