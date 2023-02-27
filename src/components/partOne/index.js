import "./partOne.less"

function PartOne() {
    const arr = [
        { title: "文档", des: "浏览我们的软件文档、用户指南和技术说明。", img: "https://www.graphcore.cn/wp-content/uploads/2022/02/White-Papers-1.svg", width: "63px" },
        { title: "教程+代码示例", des: "动手代码教程、简单的应用程序和功能示例。", img: "https://www.graphcore.cn/wp-content/uploads/2022/02/Code-Red.svg", width: "92px" },
        { title: "DOCKER HUB", des: "通过Docker Hub访问一系列选择的Poplar SDK容器镜像", img: "https://www.graphcore.cn/wp-content/uploads/2022/02/docker-svg-1.svg", width: "94px" },
        { title: "GRAPHCORE GITHUB", des: "访问我们的开源库、API、应用程序和代码示例", img: "https://www.graphcore.cn/wp-content/uploads/2022/02/github-01.svg", width: "84px" },
    ]

    return (
        <div className="part-one">
            <div className="content-box">
                {arr.map((item, index) => (
                    <div className="content-item" key={index}>
                        <div className="item-title">{item.title}</div>
                        <div className="item-mid">
                            <div className="item-des">{item.des}</div>
                            <div className="img-box"><img style={{width: item.width}} src={item.img} alt="" /></div>
                        </div>
                        <div className="see-more">查看更多</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PartOne