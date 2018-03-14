import {Row, Col, Carousel as AntdCarousel} from 'antd'

const renderCarouselItem = (item, index) => {
  return (
    <div key={index} className="carousel-item" style={{backgroundImage:'url(' + item.img + ')'}}>
      <Row type="flex" justify="center">
        <Col span={16}>
          <p className="slogan">{item.slogan}</p>
        </Col>
      </Row>
    </div>
  )
}

export default ({carousel}) => (
  <Row>
    <Col span={24}>
      <AntdCarousel vertical autoplay>
        {carousel.map((item, index) => {
          return renderCarouselItem(item, index)
        })}
      </AntdCarousel>
    </Col>
    <style jsx global>{`
      .ant-carousel .slick-slide {
        padding: 0px !important;
        height: 350px !important;
        border: 0px !important;
      }
      .ant-carousel .carousel-item {
        background-size: cover;
        background-position:bottom;
        background-repeat: no-repeat;
      }
      .ant-carousel .carousel-item .slogan{
        margin-top: 150px;
        font-size: 50px;
        font-weight: 700;
        color: #ffffff;
        text-align: left;
        line-height: 50px;
      }
    `}
    </style>
  </Row>
)
