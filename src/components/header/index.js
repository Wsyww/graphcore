import './header.less'
import {Button} from "antd"

function Header() {
    return (
        <div className="header">
            <div className='header-son'>
                <div className='left p10'>
                    <img src="https://www.graphcore.cn/wp-content/uploads/2020/09/Graphcore-Chinese-Wordmark-Horizontal.svg" alt="" />
                </div>
                <div className='right'>
                    <div className='mid p10'>
                        <div className='p132'>首页</div>
                        <div className='p132'>公司简介</div>
                        <div className='p132'>产品</div>
                        <div className='p132'>行业</div>
                        <div className='p132'>开发者</div>
                        <div className='p132'>博客</div>
                    </div>
                    <div className='right-btn p10'>
                        <Button type="primary">联系我们</Button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header