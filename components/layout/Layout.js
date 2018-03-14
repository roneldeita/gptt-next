import Head from 'next/head'
import TopNavigation from './TopNavigation'
import BottomNavigation from './BottomNavigation'
import css from '../../static/css/layout.css'

export default (props) => (
  <div>
    <Head>
      <link rel="stylesheet" href="http://cdn.bootcss.com/antd/3.3.0/antd.min.css"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"/>
    </Head>
    <TopNavigation/>
    <div className={css.layout}>
      {props.children}
    </div>
    <BottomNavigation />
    <style jsx global>{`
      html, body{
        font-family: 'Roboto', sans-serif;
      }
      .border{
        border: 1px solid #000000
      }
    `}
    </style>
  </div>
)
