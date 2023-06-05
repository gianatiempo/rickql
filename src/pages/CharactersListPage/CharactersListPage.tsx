import { useState } from 'react'
import { Card, Row, Col, Pagination } from 'antd'
import { PageHeader } from '@ant-design/pro-layout'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import { useCharactersQuery } from '../../gql/graphql'

const { Meta } = Card

const CharactersListPage = () => {
  const [page, setPage] = useState(1)
  const navigate = useNavigate()
  const { data, error, loading } = useCharactersQuery({ variables: { page } })

  if (loading) {
    return <Loading />
  }

  if (error) {
    if (error) throw error
  }

  return data ? (
    <>
      <PageHeader title="Rick & Morty Characters" subTitle="Pick yours" />
      <div className="page-wrapper">
        <Row gutter={[24, 24]}>
          {data.characters?.results?.map(character =>
            character ? (
              <Col span={4.8} key={character.id as string}>
                <Card
                  hoverable
                  cover={<img alt={character.name as string} src={character.image as string} />}
                  onClick={() => navigate(`/info/${character.id}`)}
                >
                  <Meta title={character.name as string} description={`Status: ${character.status as string}`} />
                </Card>
              </Col>
            ) : null,
          )}
        </Row>
        <Pagination
          style={{ margin: 8, display: 'flex', justifyContent: 'flex-end' }}
          pageSize={20}
          showSizeChanger={false}
          current={page}
          onChange={setPage}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} Characters`}
          total={data.characters?.info?.count as number}
        />
      </div>
    </>
  ) : null
}

export default CharactersListPage
