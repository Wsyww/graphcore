import { Input, Button } from "antd"
import "./partSix.less"

function PartSix() {
    return (
        <div className="part-six">
            <div className="six-title">获取最新的GRAPHCORE资讯</div>
            <div className="six-des">在下方注册以获取最新的资讯和更新：</div>
            <div className="six-label">您的邮箱<span>*</span></div>
            <Input className="six-input" />
            <Button className="submit-btn" type="primary">提交</Button>
        </div>
    )
} 

export default PartSix