import { Tabs } from 'antd';
import { useState } from 'react';
import "./partTwo.less"

function PartTwo() {

    const [current, setCurrent] = useState(0);
    
    const arr = [
        {
            label: "HuggingFace",
            key: 0
        },
        {
            label: "PyTorch",
            key: 1
        },
        {
            label: "Lightning",
            key: 2
        },
        {
            label: "TensorFlow",
            key: 3
        },
        {
            label: "Keras",
            key: 4
        },
        {
            label: "ONNX",
            key: 5
        },
        {
            label: "PaddlePaddle",
            key: 6
        },
        {
            label: "Halo",
            key: 7
        }
    ]

    

    const onChange = (key) => {
        setCurrent(key)
        console.log(key);
    };

    return (
        <div className="part-two">
            <div className="two-box">
                <div className="two-title">框架</div>
                <div className="two-content">
                    <Tabs defaultActiveKey="0" items={arr} onChange={onChange} />
                    {current === 0 && <div className='content-detail'>
                        <div className='left'>
                            <p>使用Hugging Face在IPU系统上训练、微调和加速最先进的transformer模型。Graphcore经IPU优化的transformer模型允许开发人员以最少的代码更改更快地训练模型。</p>
                            <p>了解更多Graphcore与Hugging Face合作伙伴关系信息。</p>
                        </div>
                        <div className='right'>
                            <div>开始教程</div>
                            <div>浏览模型</div>
                            <div>最优库</div>
                        </div>
                    </div>}
                    {current === 1 && <div className='content-detail'>
                        <div className='left'>
                            <p>关于用于IPU的PyTorch API。</p>
                            <p>借助PopTorch™（PyTorch程序的简单Python装饰器），开发人员仅使用几行额外的代码便可以直接在Graphcore的IPU上无缝运行模型。</p>
                            <p>通过我们最新的用户指南、教程和代码示例，了解如何构建高性能的PyTorch应用程序以进行训练和推理。</p>
                            <p>了解更多，请阅读博客。</p>
                        </div>
                        <div className='right'>
                            <div>阅览指南</div>
                            <div>观看视频</div>
                            <div>开始教程</div>
                            <div>获取代码</div>
                        </div>
                    </div>}
                    {current === 2 && <div className='content-detail'>
                        <div className='left'>
                            <p>关于用于IPU的PyTorch Lightning。</p>
                            <p>该初始版本支持开发人员借助IPU的性能优势，使用PyTorch Lightning超快速、轻量级的人工智能研究框架加速模型训练。</p> 
                            <p>现在，PyTorch Lightning的用户能够以尽可能少的代码更改直接在IPU上运行任何PopTorch模型。</p>
                            <p>了解更多，请阅读博客。</p>
                        </div>
                        <div className='right'>
                            <div>阅览指南</div>
                            <div>观看视频</div>
                            <div>开始教程</div>
                            <div>获取代码</div>
                        </div>
                    </div>}
                    {current === 3 && <div className='content-detail'>
                        <div className='left'>
                            <p>全面支持带有集成XLA后端的TensorFlow 1和TensorFlow 2。</p>
                            <p>用于IPU的TensorFlow API包括了特定于IPU的分布式估计量和优化器，以增强应用程序性能。</p>
                            <p>灵活模型构建功能使用针对TensorFlow 2的Keras序列和功能API支持。</p>
                        </div>
                        <div className='right'>
                            <div>阅览指南</div>
                            <div>观看视频</div>
                            <div>开始教程</div>
                            <div>获取代码</div>
                        </div>
                    </div>}
                    {current === 4 && <div className='content-detail'>
                        <div className='left'>
                            <p>对于Keras的功能和序列支持将通过我们的TensorFlow 2集成提供。</p>
                            <p>开发人员可以将许多标准Keras模型移植到IPU上，为优化和性能调优做好准备。</p>
                        </div>
                        <div className='right'>
                            <div>阅览指南</div>
                            <div>开始教程</div>
                            <div>获取代码</div>
                        </div>
                    </div>}
                    {current === 5 && <div className='content-detail'>
                        <div className='left'>
                            <p>利用Poplar高级运行时（PopART™），开发人员可以轻松以ONNX格式导入和导出模型。</p>
                            <p>PopART使用Python和C++ API，支持在Graphcore的IPU硬件上加速在其他机器智能框架中构建的模型。</p>
                        </div>
                        <div className='right'>
                            <div>阅览指南</div>
                            <div>观看视频</div>
                            <div>获取代码</div>
                        </div>
                    </div>}
                    {current === 6 && <div className='content-detail'>
                        <div className='left'>
                            <p>全面支持百度飞桨深度学习框架进行大规模模型训练，以及支持通过飞桨推理库执行高性能推理任务。</p>
                            <p>了解更多，请阅读博客。</p>
                        </div>
                        <div className='right'>
                            <div>观看视频</div>
                            <div>开始教程</div>
                            <div>获取代码</div>
                            <div>查看示例</div>
                        </div>
                    </div>}
                    {current === 7 && <div className='content-detail'>
                        <div className='left'>
                            <p>Poplar支持阿里云HALO。</p>
                            <p>HALO是阿里云ODLA的一部分，为快速实现异构计算和满足数据中心中对于AI计算加速不断增长的需求而设计。</p>
                        </div>
                        <div className='right'>
                            <div>获取代码</div>
                            <div>HALO GITHUB</div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default PartTwo