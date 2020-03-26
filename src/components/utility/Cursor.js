import React, { Component } from 'react'
import styled from 'styled-components'

const CursorWrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top:0;
    left:0;
    height: 104px;
    width: 104px;
    opacity: 1;
    pointer-events: none;
    user-select: none;
    z-index: 999;
    transition: transform 1.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    font-size: 14px;


    .wrapper{
        position: relative;
        width: 52px;
        height: 52px;
        
        & > span{

            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
    
    &[data-cursor^="action"], .cursor-action::after {
        content: "${p => p.action}"
    }

    
    &[data-cursor="ring"] .cursor-ring::after, 
    &[data-cursor="hover"] .cursor-hover::after{
        /* final state */
        content: "";
        opacity: 1;
        transform: scale(1);
    }
    &[data-cursor^="action"] .cursor-action::after{
        /* final state */
        opacity: 1;
        transform: scale(1);
        font-size: 1.2em;
        text-align: center;
        padding-top: 25%;
    }
    &[data-cursor="hover"] .cursor-hover{
        transform: scale(.4);
    }
    &[data-cursor^="action"] .cursor-action{
        /* active state */
        transform: scale(.8);
    }

    .cursor-ring::after{
        /* init state  */
        content: "";
        border: 2px solid ${p => p.theme.primary};
        border-radius: 50%;
        width: 100%;
        height: 100%;
        display:block;
        opacity: 0;    
        transform: scale(0.3);
        transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);

    }

    .cursor-hover::after{
        /* init state  */
        content: "";
        background-color: $blue;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        display:block;
        opacity: 0;    
    }
    .cursor-hover{
        transform: scale(0);
        transition: transform .5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
   

    .cursor-action::after{
        /* init state  */
        content: "";
        background-color: ${p => p.theme.primary};
        color: #fff;
        border-radius: 50%;
        width: 100%;
        height: 100%;
        display:block;
        opacity: 0;    
    }
    .cursor-action{
        transform: scale(0);
        transition: transform .5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
   
    .cursor-action > span{
        position: absolute;
        z-index: 1;
        top: 15px;
        right: 9px;
        color:${p => p.theme.fontColor}; /* Action text color */
    }
    
`

class Cursor extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            cursorType: 'ring',
            cursorElement: undefined,
        }
        this.clientX = -100;
        this.clientY = -100;
        this.action = "";
        this.cursor = "undefined";
    }

    setCoordinates(e){
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

 
    initCursor(){
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
        return (
            <CursorWrapper id="cursor" data-cursor={this.state.cursorType} action={this.action}>
                <div className="wrapper">
                    <span className="cursor-ring"></span>
                    <span className="cursor-hover"></span>
                    <span className="cursor-action">
                        <span></span>
                    </span>
                </div>
            </CursorWrapper>
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
            console.log(action)
            this.setState({
                cursorType: action
            });
        }
    
        const handleMouseLeave = (e) => {
            this.setState({
                cursorType: "ring"
            })
        };
        DOMElement.addEventListener('mouseEnter', handleMouseEnter)
        DOMElement.addEventListener('mouseleave', handleMouseLeave)
    }


}

export default Cursor;