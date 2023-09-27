import React, { useState } from 'react'

export default function About() {
    const [color,setColor] = useState({
        backgroundColor:'white',
        color:'black',
        border:'1px solid black'
    });
    const [theme,setThemeBtn] = useState("Enable Dark Mode");
    const toggleTheme=()=>{
        if(theme === "Enable Dark Mode"){
            setColor({
                backgroundColor:'black',
                color:'white',
                border:'1px solid white'

            });
            setThemeBtn("Disable Dark Mode");
        }
        else{
            setColor({
                backgroundColor:'white',
                color:'black',
                border:'1px solid black'
            });
            setThemeBtn("Enable Dark Mode");
        }
    }
    return(
    <div className='container' style={color} >
        <h1 className='my-2 mx-3'>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample"  >
            <div className="accordion-item" style={color}> 
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" style={color} aria-controls="flush-collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
            </div>
            <div className="accordion-item" style={color}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" style={color} aria-controls="flush-collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
            <div className="accordion-item" style={color}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" style={color}aria-controls="flush-collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
            </div>
            <button onClick={toggleTheme} className="my-3 btn btn-primary">{theme}</button>
        </div>
    </div>
    )
}