import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Colors.css';
import {Link} from 'react-router-dom';

const Colors = () => {
    
    const [colors, setColors] = useState([
        ["Red", "#FF0000"],
        ["Green", "#00FF00"],
        ["Blue", "#0000FF"]
    ]);


    
    const navigate = useNavigate();
    const location = useLocation();
    const newcolor = location.state;
    if (newcolor) {
        colors.push(newcolor);
    }

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/colors/new");
    }
    return (
        <>
            <div className="btn">
            <button onClick={handleClick}>Add a color!</button>
            </div>
            <div className="palette">
                {colors.map(c => (
                    <>
                    <div>
                    <Link to={`/colors/${c[0]}`} state={{hexcode: c[1]}}>{c[0]}</Link>
                    </div>
                    <div
                    className="colors"
                    style={{
                        backgroundColor: c[1],
                        width: '75px',
                        height: '75px'
                    }}></div></>
                ))}
                
            </div>
            
        </>
    )
}

export default Colors;