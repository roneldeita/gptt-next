import {Row, Col, Spin, Icon, Carousel as AntdCarousel} from 'antd'

const antIcon = <Icon type="loading" style={{ fontSize: 32 }} spin />;

const Spinner = {
  position:'absolute',
  height:'100%',
  width:'100%',
  fontSize:'30px',
  textAlign: 'center',
  backgroundColor: '#ffffff',
  maxHeight: '100%',
  zIndex:1
}

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

export default ({loader, carousel}) => (
  <Spin spinning={loader} indicator={antIcon} style={Spinner}>
    <Row>
      <Col span={24}>
        <AntdCarousel vertical autoplay>
          {carousel.map((item, index) => {
            return renderCarouselItem(item, index)
          })}
        </AntdCarousel>
      </Col>
      <style jsx global>{`
        .ant-carousel .slick-list {
          height: 350px !important;
        }
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
  </Spin>
)
