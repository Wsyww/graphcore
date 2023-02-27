import "./partThree.less"

function PartThree() {

    const arr = [
        { title0: "IPU+Poplar基础", img: "https://www.graphcore.cn/wp-content/uploads/2022/02/voB8hgeUPxLI7PhXRvZB4Q-1536x864.png", des0: "IPU初学者的快速入门演示，展示了使用Poplar框架在IPU上运行的简单加法示例。", oper0: "观看视频", title1: "Poplar软件白皮书", des1: "Cambrian人工智能研究公司 （Cambrian AI Research）研究了Poplar软件栈和生态系统不断增长的势头。", oper1: "阅览白皮书", title2: "IPU程序员指南", des2: "关于可用的IPU架构、编程模型和工具的介绍", oper2: "阅览指南" },
        { title0: "在IPU IOI上编程", img: "https://www.graphcore.cn/wp-content/uploads/2022/02/U6ZhunQ7xXgvL2eV-xntvLUYzrCo-AIq.gif", des0: "通过对Poplar SDK、IPU编程技术以及如何移植模型的介绍了解基础知识。", oper0: "观看视频", title1: "面向IPU的PyTorch用户指南", des1: "使用PopTorch在IPU上运行PyTorch模型的用户指南和API参考", oper1: "阅览指南", title2: "移植TensorFlow 2模型", des2: "关于如何将TensorFlow 2模型移植到IPU的快速入门指南，包括有用的代码片段。", oper2: "阅览指南" },
        { title0: "IPU的高性能计算手册", img: "https://www.graphcore.cn/wp-content/uploads/2022/02/cookbook.png", des0: "阅读布里斯托大学关于使用Poplar C++对高性能计算工作负载进行低级编程的社区指南。", oper0: "开始教程", title1: "存储+性能优化指南", des1: "开发和优化在IPU上运行的高性能机器学习模型的通用技术。", oper1: "阅览指南", title2: "教程：B‌‍ER‌T FINE-TUNING", des2: "如何在Graphcore IPU-POD16系统上使用PyTorch微调预训练过的BERT-L模型", oper2: "开始教程" }
    ]

    return (
        <div className="part-three">
            <div className="three-box">
                <div className="three-title p10">特色资源</div>
                <div className="three-des p10">探索我们最新和最受欢迎的软件文档、操作视频、教程和网络研讨会。</div>
                <div className="three-content">
                    <ul>
                        {arr.map((item, index) => (
                            <li className="content-item" key={index}>
                                <div className="left">
                                    <div className="title-0">{item.title0}</div>
                                    <div className="left-content">
                                        <div className="left-img"><img src={item.img} alt="" /></div>   
                                        <div className="left-text">
                                            <div className="des-0">{item.des0}</div>
                                            <div className="oper-0">{item.oper0}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="right-card">
                                        <div className="title-1">{item.title1}</div>
                                        <div className="des-1">{item.des1}</div>
                                        <div className="oper-1">{item.oper1}</div>
                                    </div>
                                    <div className="right-card">
                                        <div className="title-1">{item.title2}</div>
                                        <div className="des-1">{item.des2}</div>
                                        <div className="oper-1">{item.oper2}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PartThree