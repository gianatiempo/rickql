import { Button, Result, Typography } from 'antd'
import { useErrorBoundary } from 'react-error-boundary'
import { useNavigate } from 'react-router-dom'

const { Paragraph } = Typography

const ErrorFallback = ({ error }: { error: Error }) => {
  const navigate = useNavigate()
  const { resetBoundary } = useErrorBoundary()

  const home = () => {
    resetBoundary()
    navigate('/')
  }
  const reset = () => {
    resetBoundary()
  }

  return (
    <Result
      status="error"
      title="Something went wrong"
      subTitle="Please Check this error"
      extra={[
        <Button type="primary" key="home" onClick={() => home()} style={{ width: '45%' }}>
          Back to Login
        </Button>,
        <Button key="retry" onClick={() => reset()} style={{ width: '45%' }}>
          Reset and Try again
        </Button>,
      ]}
    >
      <div className="desc">
        <Paragraph>{error.message}</Paragraph>
      </div>
    </Result>
  )
}

export default ErrorFallback
