import { useState } from "react";
import { SketchPicker } from "react-color";
import { useNavigate } from "react-router-dom";
import './ColorForm.css'
const ColorForm = () => {
    const [formData, setFormdata] = useState({
        Name: "",
        color: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { value } = e.target;
        setFormdata(data => ({
            ...data,
            Name: value
        }))
    }

    const handlecolorchange = (color) => {
        setFormdata(data => ({
            ...data,
            color: color.hex
        }))
    }

    const handleClick =(e) => {
        e.preventDefault();
        navigate("/colors", {state: [`${formData.Name}`, `${formData.color}`]})

    }

    return (
        <div className="container">
        <label htmlFor="colorname">Color name</label>
        <input 
        id="colorname"
        name="colorname"
        type="text"
        placeholder="Name of Color"
        value={formData.Name}
        onChange={handleChange}
        /><br />
        <label>Pick a color</label>
        <SketchPicker 
        color={formData.color}
        onChangeComplete={handlecolorchange}
        styles={{ position: "absolute", left: "50%"}}/>
        <button onClick={handleClick}>Submit</button>
        </div>
    )

}

export default ColorForm;