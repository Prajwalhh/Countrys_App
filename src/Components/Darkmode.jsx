import { useState } from "react";

const Darkmode = () => {
    const [dark,setDark] = useState(false);

    const toggleDarkmode = () => {
        setDark((prevMode)=> !prevMode);
        updateBodyStyle(!dark);
    }

    const updateBodyStyle = (isDarkMode) => {
        document.body.style.backgroundColor = isDarkMode ? "#333" : '#fff';
        document.body.style.color = isDarkMode ? "red" : '#000';

    }

    return(
        <div>
            <button
            style={{
                backgroundColor:'#94a3b8',
                padding:'0.5rem',
                borderRadius:'1.5rem',
                marginTop:'1rem',
                width:'100px'
            }}
            onClick={toggleDarkmode}
            >
                {dark ? "Dark" : "Light"}
            </button>
        </div>
    );
}
export default Darkmode;