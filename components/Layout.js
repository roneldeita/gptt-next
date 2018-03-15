import Head from 'next/head'
import TopNavigation from './TopNavigation'
import BottomNavigation from './BottomNavigation'

export default (props) => (
  <div>
    <Head>
      <link rel='stylesheet' href='http://cdn.bootcss.com/antd/2.9.3/antd.css'/>
    </Head>
    <TopNavigation/>
    <div className="layout">
      {props.children}
    </div>
    <BottomNavigation />
    <style jsx>{`
      .layout{
        min-height: 80vh
      }
    `}
    </style>
    <style jsx global>{`
      .border{
        border: 1px solid #000000
      }
    `}
    </style>
  </div>
)
