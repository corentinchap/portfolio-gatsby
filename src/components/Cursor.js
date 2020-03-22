import React, { Component } from 'react';
import '../styles/Cursor.scss';

class Cursor extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            cursorType: 'ring',
            cursorElement: undefined,
        }
        this.clientX = -100;
        this.clientY = -100;
       
    }

    setCoordinates = (e) => {
        this.clientX = e.clientX;
        this.clientY = e.clientY;
    }

    componentDidMount(){      
        this.cursor = document.getElementById('cursor');
        
        this.initCursor();

        //There might be a better way to trigger the register event when everything is loaded from the server
        //I dont want to use redux to register component one by one
        setTimeout(function() {
            document.querySelectorAll('[data-cursor]').forEach(item => {         
                if(item.id !== "cursor"){
                    this.registerMouseEvent(item);
                }
            });
        }.bind(this), 2200)

      
    }

 
    initCursor = () => {
        let offset = 52;
        document.addEventListener("mousemove", e => this.setCoordinates(e));

        // Animation loop
        const render = () => {
            this.cursor.style.transform =  `translate(${this.clientX-offset}px, ${this.clientY-offset}px)`;
            requestAnimationFrame(render);
        }
        
        requestAnimationFrame(render);
     
    }


    
    render() {
        if(this.state.cursorType.substr(0,6) === "action")
            var action = this.state.cursorType.substr(7);

        return (
            <div id="cursor" data-cursor={this.state.cursorType}>
                <div className="wrapper">
                    <span className="cursor-ring"></span>
                    <span className="cursor-hover"></span>
                    <span className="cursor-action">
                        <span></span>
                    </span>
                </div>

                {typeof action !== "undefined" && 
                <style dangerouslySetInnerHTML={{
                __html: [
                   '#cursor[data-cursor^="action"] .cursor-action::after {',
                   '  content: "'+ action +'";',
                   '}'
                  ].join('\n')
                }}>
            </style>}
            </div>
        )
    }
    

    handleClick(e){

        this.state.cursorElement.classList.add('expend');

        setTimeout(() => {
            this.state.cursorElement.classList.remove('expend');
        }, 500);
    }

    registerMouseEvent(DOMElement){
  
        const handleMouseEnter = (e) => {
            let action = e.target.getAttribute("data-cursor");
                  
            this.setState({
                cursorType: action
            });
        }
    
        const handleMouseLeave = (e) => {
            this.setState({
                cursorType: "ring"
            })
        };
        DOMElement.addEventListener('mouseenter', handleMouseEnter)
        DOMElement.addEventListener('mouseleave', handleMouseLeave)
    }


}

export default Cursor;