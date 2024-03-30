import { ConfigProvider, Pagination } from "antd"

export const AntdPagination = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#928F94',
            fontFamily: 'bold',
            fontSize: 26,
            borderRadius: 5,
            colorText: '#928F94',
            // colorPrimaryHover: '#FFA800',
            colorBorder: '#928F94',
            // colorBgTextHover: '#FFA800',
            // colorBgTextActive: 'white',
          },
          components: {
            Pagination: {
              itemActiveBg: '#FFA800',
              itemSize: 75,
            }
          },
        }}
      >
        <Pagination total={100} showSizeChanger={false} showTitle={false} />
      </ConfigProvider>
    </>
  )
}
