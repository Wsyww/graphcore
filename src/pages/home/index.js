import { Button } from 'antd'
import Header from '../../components/header'
import PartOne from '../../components/partOne'
import PartTwo from '../../components/partTwo'
import PartThree from '../../components/partThree'
import PartFour from '../../components/partFour'
import PartFive from '../../components/partFive'
import PartSix from '../../components/partSix'
import Footer from '../../components/footer'
import './home.less'

function Home() {

    return (
        <div className="home">
            <Header />
            <div className='home-header'>
                <h1 className="home-title">使用POPLAR构建下一代机器智能</h1>
                <div className='home-des'>了解如何使用Poplar SDK在IPU系统上快速启动和运行您的机器学习模型。访问我们的开源库、分析工具和Docker Hub容器。</div>
                <Button className="home-btn" type='primary'>快速启动文档</Button>
            </div>
            <PartOne />
            <PartTwo />
            <PartThree />
            <PartFour />
            <PartFive />
            <PartSix />
            <Footer />
        </div>
    )
}

export default Home
