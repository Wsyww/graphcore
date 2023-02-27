import { Button } from "antd"
import "./partFour.less"

function PartFour() { 

    const arr = [
        { img: "https://www.graphcore.cn/wp-content/uploads/2023/02/Slack-header-300x131.jpg", des: "@所有人，Graphcore全球开发者社区来了！" },
        { img: "https://www.graphcore.cn/wp-content/uploads/2023/01/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230118180305-300x133.png", des: "快速上手Stable Diffusion！高级版notebooks不容错过" },
        { img: "https://www.graphcore.cn/wp-content/uploads/2022/12/SDK-header-300x131.jpg", des: "Poplar SDK 3.1现已推出" }
    ]

    return (
        <div className="part-four">
            <div className="four-box">
                <div className="four-title p10">我们的博客</div>
                <div className="four-content">
                    {arr.map((item, index) => (
                        <div className="content-item" key={index}>
                            <img src={item.img} alt="" />
                            <div className="text-box">
                                <div className="item-des">{item.des}</div>
                                <div className="read-article">阅读文章</div>
                            </div>
                            
                        </div>
                    ))}
                </div>
                <div className="see-more">
                    <Button type="primary">浏览更多文章</Button>
                </div>
            </div>
        </div>
    )
}

export default PartFour