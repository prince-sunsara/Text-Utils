import React from 'react';

export default function(props) {
    return (
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        Convert to UpperCase
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        <div className="accordion-body">
                        The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).
<br />
To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.
THIS IS AN EXAMPLE OF UPPER CASE.
<br />
<span style={{textTransform : 'uppercase'}}>This is example of upperCase</span>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        Convert to LowerCase
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        <div className="accordion-body">
                        If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.
<br />
<span style={{textTransform : 'lowercase'}}>This is example of lowerCase</span>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        Convert to Bold
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        <div className="accordion-body">
                        A quick way to bold your text online. Simply type out the normal text into the tool and see it automatically get converted to the bold versio which you can copy and paste across.
<br />
<b>This is example of bold</b>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        Convert to Italic
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        <div className="accordion-body">
                        If you want to italicise your font, this is a great tool. Type out your normal text and see it automatically write on a slant, which you can copy and paste where you want.
<br />
<i>This is example of Italic</i>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        Remove extra space
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        <div className="accordion-body">
                        If you want to remove extra spaces, this is a great tool. Type any sentances or paragraph with extra spaces it will reduce all extra spaces. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        Copy all Text
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        <div className="accordion-body">
                            It copies all the text in textbox.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        Clear Text
                        </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode==='dark'?'#4b4444':'white',color:props.mode==='dark'?'white':'black'}}>
                        <div className="accordion-body">
                            It will clear the text.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
