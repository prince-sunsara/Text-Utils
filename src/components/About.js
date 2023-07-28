import React from 'react'

export default function About(props) {
    return (
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        Analyze Your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        <div className="accordion-body">
                        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        <div className="accordion-body">
                        TextUtils is a free character counter tool that provides instant character count & word count statastic for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limits.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        <div className="accordion-body">
                            This word counter software in any web browser such as Chrome, FireFox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel docuent, essay, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
