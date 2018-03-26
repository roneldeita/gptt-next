import {Row, Col,Card,Icon,Button} from 'antd'
import Slider from "react-slick";


//CSS here!
const containerCardStyle = {
	textAlign: "right",
	paddingTop:"20px"
}
const contentCardStyle = {
	spaceCardGap : {padding:"10px"},
	bodyStyle : (image,key) => {return {borderRadius:"4px",height:"440px",backgroundImage:'url(' + image.img+ ')'} },
	labelStyle : {marginTop:"250px",paddingLeft:"20px"},
	fontColor:  {color:"#ffffff"} 
}
const spacerStyle = {
	styler : {paddingTop:"20px",paddingBottom:"20px"}
}

const carouselArrowsStyle = {
	styler : (combinedStyle) => {return {combinedStyle,borderRadius:"2px", display: 'block', background: '#DCDCDC',height:"440px",paddingTop:"210px"}}
}

const titleStyle = {
	styler :{fontWeight: "bold"}
}


// Stateless Components
const cardContent = (image,key) => {
	return(
		<div style={contentCardStyle.spaceCardGap} key={key}>
			<Card 
				bodyStyle={contentCardStyle.bodyStyle(image,key)}
				bordered={false}>
				<Row style={contentCardStyle.labelStyle}>			
					<p style={contentCardStyle.fontColor}>{image.description}</p>
					<h1 style={contentCardStyle.fontColor}>{image.slogan}</h1>
					<Button style={{borderRadius: "20px",width:"90px",border: "2px solid white"}} ghost>MORE</Button>
				</Row>
				
			</Card>

		</div>)
}

const spacer =(
		<Row style={spacerStyle.styler}></Row>
)

const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
};

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
		<div
			className={className}
			style={carouselArrowsStyle.styler(...style)}
			onClick={onClick}>
		</div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
 		<div
 			className={className}
	        style={carouselArrowsStyle.styler(...style)}
	        onClick={onClick}>
		</div>
  );
}

const content = (images) => {
	return (
		<div>
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />   

			<Slider  autoplay {...settings}>
					  {images.images.map((item, index) => {
			            return cardContent(item,index)
			          })}
	       </Slider>
	       <style global jsx>{`
	     	.ant-btn.active, .ant-btn:active, .ant-btn:focus, .ant-btn:hover {
			     color: #4169E1;
			}
	       `}</style>
		</div>
	)
}


//Presentation Component
export default (images) => {
	return (
		<div>
			<Row>
				<Col xs={1} sm={2} md={3} lg={3} xl={3}></Col>
			    <Col xs={22} sm={20} md={18} lg={18} xl={18}>
			    	{spacer}
			    	<Row>
			    		<Col span={12}><h1 style={titleStyle.styler}>Popular Destinations</h1></Col>
			    		<Col span={12}><p style={containerCardStyle}>View All  <Icon type="right" /></p></Col>

			    	</Row>
			    	<Row type="flex" justify="center">
			    		  <Col xs={23} sm={23} md={23} lg={23} xl={23}>{content(images)}</Col>
			    	</Row>
			    	{spacer}
			    </Col>
			    <Col xs={1} sm={2} md={3} lg={3} xl={3}></Col>
			</Row>
		</div>

	)
}



