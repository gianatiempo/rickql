import { useState } from 'react'
import { Typography, Table, Card, Row, Col, Alert } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import { Character, Episode, useCharacterInfoQuery } from '../../gql/graphql'

const { Title } = Typography

const episodeColumns = [
  { title: 'Episode Name', dataIndex: 'name', key: 'name' },
  { title: 'Aired', dataIndex: 'air_date', key: 'air_date' },
  {
    title: 'Characters',
    dataIndex: 'characters',
    key: 'characters',
    render: (_: string, row: Episode) => <span>{row.characters.length}</span>,
  },
]

const charactersColumns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (type: string) => <span>{type || 'Human (?)'}</span>,
  },
]

const CharactersInfoPage = () => {
  const { characterId } = useParams()
  const { data, error, loading } = useCharacterInfoQuery({ variables: { characterId: characterId ?? '1' } })
  const [charData, setCharData] = useState<Character[]>([])

  if (loading) {
    return <Loading />
  }

  if (error) {
    if (error) throw error
  }

  return data ? (
    <>
      <PageHeader title={data.character?.name} subTitle={data.character?.status} />
      <div className="page-wrapper">
        <Row gutter={8}>
          <Col span={12}>
            <Title level={5}>Episodes showcasing {data.character?.name}:</Title>
            <Card size="small">
              <Table
                rowKey="id"
                size="small"
                bordered
                dataSource={(data.character?.episode ?? []) as Episode[]}
                columns={episodeColumns}
                rowSelection={{
                  type: 'radio',
                  onChange: (_, selectedRows) => setCharData(selectedRows[0].characters as Character[]),
                }}
                pagination={{ showSizeChanger: false }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Title level={5}>Characters in episode:</Title>{' '}
            <Card size="small">
              {charData.length ? (
                <Table
                  rowKey="id"
                  size="small"
                  bordered
                  columns={charactersColumns}
                  dataSource={charData}
                  pagination={{ pageSize: 10 }}
                />
              ) : (
                <Alert message="Select an Episode to see included Characters" type="warning" />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  ) : null
}

export default CharactersInfoPage
