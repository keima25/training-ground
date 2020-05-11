import React from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

export default function AnimeCard({ data }) {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {data.map((anime) => (
        <div key={anime.mal_id}>
          <Col className="gutter-row" span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={anime.image_url} />}
            >
              <Meta title={anime.title} description={anime.synopsis} />
            </Card>
          </Col>
        </div>
      ))}
    </Row>
  );
}
