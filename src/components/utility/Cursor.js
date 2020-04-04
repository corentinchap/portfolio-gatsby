import React, { Component } from 'react'
import styled from 'styled-components'
import {window} from 'browser-monads'

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

    .wrapper{
        position: relative;
        width:52px;
        height: 52px;
        > span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            &:after{
                border: 2px solid ${p => p.theme.primary};
                border-radius: 50%;
                transition: all .5s cubic-bezier(.165,.84,.44,1);
                content: "";
                width: 100%;
                height: 100%;
                display: block;
                ${({cursorType, theme}) => cursorType === 'hover' && `
                    transform: scale(.4);
                    background: ${theme.primary};
                `}

                ${({cursorType, theme}) => cursorType.substr(0,6) === 'action' && `
                font-size: 1.2em;
                text-align: center;
                background: ${theme.primary};
                    content: "${cursorType.substr(7)}";
                    color: ${theme.fontColor};
                    padding-top: 19%;
                    font-family: "Space Mono";
                    transform: scale(.9);
                `}
            }
        }
    }
`
class Cursor extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            cursorType: 'ring',
            centerOffset: 52,
            scale: false,
            posX : -100,
            posY : -100
            
        }
        this.cursor = "undefined";
        this.BUBBLING_SELECTORCHECK_MAXLEVELS = 3;

        this.handleClick = this.handleClick.bind(this);
        this.setCoordinates = this.setCoordinates.bind(this);
    
    }

    setCoordinates(e){
        this.clientX = e.clientX;
        this.clientY = e.clientY;
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.posX === nextState.posX && this.state.posY === nextState.posY && this.state.scale === nextState.scale)
            return false
        else
            return true
    }

    componentDidMount(){      
        this.cursor = document.getElementById('cursor');
      
        this.initCursor();

        //There might be a better way to trigger the register event when everything is loaded from the server
        //I dont want to use redux to register component one by one
        setTimeout(function() {
            document.querySelectorAll('[data-cursor]').forEach(item => {         
                if(item.id !== "cursor"){

                    item.addEventListener('mouseover', (e) => {
                       
                        let cursorType =  e.target.getAttribute('data-cursor');;
                        if(cursorType === null)
                        {
                            cursorType = e.path.find((node, i) => {
                                if(i <= this.BUBBLING_SELECTORCHECK_MAXLEVELS)
                                    return (node.getAttribute('data-cursor') !== null && node.getAttribute('data-cursor') !== undefined)
                            }).getAttribute('data-cursor');
        
                            
                        }
                        this.setState({
                            cursorType: cursorType
                        })
                    })

                    item.addEventListener('mouseleave', (e) => {
                        this.setState({
                            cursorType: 'ring'
                        })
                    })
                }
            });
        }.bind(this), 2200)
    }

    componentWillUnmount(){
        document.removeEventListener('click', e => this.handleClick(e));
        document.removeEventListener('mousemove', e => this.setCoordinates(e));
    }
 
    initCursor(){
        if(window.innerWidth > 992){
            document.addEventListener('click', (e) => this.handleClick(e));
            document.addEventListener('mousemove', (e) => this.setCoordinates(e));
                
            // Animation loop
            const render = () => {
                
                this.setState({
                    posX: this.clientX,
                    posY: this.clientY
                })
                
                requestAnimationFrame(render);
            }
            
            requestAnimationFrame(render);
        }
        

    }


    
    render() {
        return (
            <CursorWrapper 
                id="cursor" 
                cursorType={this.state.cursorType} 
                style={{transform: `
                    translate(${this.state.posX-this.state.centerOffset}px, ${this.state.posY-this.state.centerOffset}px) ${this.state.scale ? `scale(.5)` : ""}
                `}}
            >
                <div className="wrapper">
                    <span>
                        
                    </span>
                </div>
            </CursorWrapper>
        )
    }
    

    handleClick(e){
        this.setState({
            scale: true
        })
        setTimeout(() => {
            this.setState({
                scale: false
            })
        }, 500);
    }

   


}

export default Cursor;