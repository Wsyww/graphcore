import "./partFive.less"

function PartFive() { 

    const arr = [
        { img: "", title: "GITHUB", oper: "访问公共存储库" },
        { img: "", title: "GRAPHCORE支持", oper: "获取支持" },
        { img: "", title: "STACK OVERFLOW", oper: "提问" },
        { img: "", title: "知乎", oper: "访问知乎" }
    ]

    return (
        <div className="part-five">
            <div className="five-box">
                <div className="five-title p10">支持与社区</div>
                <div className="five-content">
                    {arr.map((item, index) => (
                        <div className="content-item" key={index}>
                            <div className="item-title">{item.title}</div>
                            <div className="item-oper">{item.oper}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PartFive;