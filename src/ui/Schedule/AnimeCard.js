import React from 'react';
import { colors } from '../../constants/colors';
import { Card, Row, Col, Spin, Popover, Tag, Typography, Progress } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

export default function AnimeCard({ data, isLoadingSchedule }) {
  function content(anime) {
    const { genres, score, episodes, type } = anime;
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <div className="content__container">
        <Progress
          type="circle"
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={Math.round(score * 10)}
          format={() => (
            <div>
              {score ? score : 0} <br /> Score
            </div>
          )}
        />
        <Text className="content__text">
          {type} {episodes && <span>&#8226; {episodes} episodes</span>}
        </Text>
        <div className="content__genre">
          {genres.map((genre) => (
            <Tag className="content__genre-tag" color={color}>
              {genre.name}
            </Tag>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="card__container">
      <Spin spinning={isLoadingSchedule} />
      <Row justify="space-around" gutter={[16, 24]}>
        {data.map((anime) => (
          <div key={anime.mal_id} className="swing-in-top-fwd">
            <Col>
              <Popover content={content(anime)} placement="rightTop">
                <Card
                  hoverable
                  style={{ width: 220 }}
                  cover={<img alt="Not available" src={anime.image_url} />}
                >
                  <Meta title={anime.title} />
                </Card>
              </Popover>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
}
