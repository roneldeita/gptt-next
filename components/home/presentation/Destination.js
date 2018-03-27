import {Row, Col,Card,Icon,Button,Spin} from 'antd'
import Slider from "react-slick";


const antIcon = <Icon type="loading" align="middle" style={{ fontSize: 35,alignContent:"middle" }} spin />
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

//CSS here!
const containerCardStyle = {
	textAlign: "right",
	paddingTop:"20px"
}
const contentCardStyle = {
	spaceCardGap : {padding:"10px"},
	bodyStyle : (image,key) => {return {borderRadius:"4px",height:"440px",backgroundImage:'url(' + image.img+ ')',backgroundSize: "100% 100%"} },
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
					  {images.map((item, index) => {
			            return cardContent(item,index)
			          })}
	       </Slider>
	       <style global jsx>{`
	     	.ant-btn.active, .ant-btn:active, .ant-btn:focus, .ant-btn:hover {
			     color: #4169E1;
			}
			.ant-spin-container {
			   width:99.5%;
			}
	       `}</style>
		</div>
	)
}


//Presentation Component
export default (data) => {

	//for destination carousel slide image number adjustment
	console.log(data.data.width)
	if(data.data.width < 576){
		settings.slidesToShow = 1
		console.log(1)
	}else if (data.data.width >= 576 && data.data.width < 992 ){
		settings.slidesToShow = 2
	}else if(data.data.width >= 992 && data.data.width < 1200 ){
		settings.slidesToShow = 3
	}else
	{
		settings.slidesToShow = 4
	}
	//

	return (
		<div>
			<Spin spinning={data.data.loader} indicator={antIcon} style={Spinner}>
			<Row>
				<Col xs={1} sm={2} md={3} lg={3} xl={3}></Col>
			    <Col xs={22} sm={20} md={18} lg={18} xl={18}>
			    	{spacer}
			    	<Row>
			    		<Col span={12}><h1 style={titleStyle.styler}>Popular Destinations</h1></Col>
			    		<Col span={12}><p style={containerCardStyle}>View All  <Icon type="right" /></p></Col>

			    	</Row>
			    	<Row type="flex" justify="center">
			    		  <Col xs={23} sm={23} md={23} lg={23} xl={23}>{content(data.data.images)}</Col>
			    	</Row>
			    	{spacer}
			    </Col>
			    <Col xs={1} sm={2} md={3} lg={3} xl={3}></Col>
			</Row>	
			
			</Spin>	
		</div>


	)
}



