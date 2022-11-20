import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import './ClickedColor.css'

const ClickedColor = () => {
    const color = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    let bgcolor = location.state.hexcode;
    useEffect(() => {
        document.body.style.backgroundColor = bgcolor; }, [])

    const handleClick = (e) => {
        e.preventDefault();
        document.body.style.backgroundColor = "transparent";
        navigate('/colors');
    }
    
        return (
            <div className="container-btn">
                <button onClick={handleClick}>Try other colors</button>
            </div>
        )
}

export default ClickedColor;