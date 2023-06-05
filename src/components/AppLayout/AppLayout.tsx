/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Layout, Menu, Typography, theme } from 'antd'
import type { MenuProps } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { ErrorBoundary } from 'react-error-boundary'
import { Link, Outlet } from 'react-router-dom'
import ensoLogo from '../../assets/enso.png'
import './AppLayout.css'
import ErrorFallback from '../ErrorFallback'

const { Content, Sider, Footer } = Layout
const { Title } = Typography
const { useToken } = theme

const baseMenu: MenuProps['items'] = [{ icon: <UserOutlined />, label: <Link to="/">Characters</Link>, key: '/' }]

const App = () => {
  const { token } = useToken()

  return (
    <Layout hasSider className="app-layout" style={{ height: '100%' }}>
      <Sider theme="light" style={{ overflow: 'auto', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%' }}>
          <span>
            <div className="logo">
              <Link to="/">
                <img src={ensoLogo} data-testid="enso-logo" alt="Logo" height={32} />
              </Link>
              <Title level={2} style={{ margin: '-2px 5px' }}>
                RickQL
              </Title>
            </div>
            <Menu mode="inline" defaultSelectedKeys={['/']} items={baseMenu} />
          </span>
          <Footer
            style={{
              backgroundColor: token.colorBgBase,
              borderTop: `1px solid ${token.colorSplit}`,
              textAlign: 'center',
            }}
          >
            Ariel Gianatiempo
          </Footer>
        </div>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ minHeight: '100vh', overflow: 'initial' }}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
