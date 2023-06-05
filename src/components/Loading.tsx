import { theme } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const { useToken } = theme

const loadingStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Loading = () => {
  const { token } = useToken()

  return (
    <div style={loadingStyle} data-testid="loading">
      <LoadingOutlined style={{ fontSize: '128px', color: token.colorPrimary }} />
    </div>
  )
}

export default Loading
