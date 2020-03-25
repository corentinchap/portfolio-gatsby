import React, { Component } from 'react';
import styled from 'styled-components';

const CursorAwareButtonWrapper = styled.div`
    a:hover{
        color: ${props => props.fontColor ? props.fontColor : props.theme.primary};
        font-weight: 700;

        span{
            width: 225%;
            height: 562.5px;
        }
    }
    a{
        color: ${props => props.activeColor ? props.activeColor : props.theme.primary};
        border: 1px solid ${props => props.activeColor ? props.activeColor : props.theme.primary};
        margin-top: 12px;
        padding: 4px 20px;
        text-decoration: none;
        position: relative;
        display: block;
        overflow: hidden;
        float: right;
        text-align: center;
        text-transform: uppercase;
        z-index: 1;
        background: transparent;

        &.active{
            color: ${props => props.fontColor ? props.fontColor : props.theme.primary}
        }
    }
    span{
        position: absolute;
        z-index: -1;
        display: block;
        width: 0;
        height: 0;
        border-radius: 50%;
        transition: width .4s ease-in-out,height .4s ease-in-out;
        transform: translate(-50%,-50%);
        background: ${props => props.activeColor ? props.activeColor : props.theme.primary}
    }
    .inner-text{
        display:inline-block;
        padding-left: 5px;
    }
    
`

class CursorAwareButton extends Component {
    
    buttonMouseInteraction(e){
        let top=0, left=0;
        let elem = e.target;
        while(elem){
            top = top + parseInt(elem.offsetTop);
            left = left + parseInt(elem.offsetLeft);
            elem = elem.offsetParent;
        }
    
        let relX = e.pageX - left;
        let relY = e.pageY - top;

        let span = e.target.querySelector('span')
        if(span)
            span.setAttribute('style', 'top:'+relY+'px;left:'+relX+'px;')
    }
    
    scrollToForm () {
        window.scrollBy({ 
            top: document.querySelector('body').scrollHeight, 
            left: 0, 
            behavior: 'smooth' 
          });
    }

  
    render() {
    
        return (
           <CursorAwareButtonWrapper {...this.props} >
                <a  onMouseEnter={this.buttonMouseInteraction} 
                    onMouseLeave={this.buttonMouseInteraction}
                    onClick={this.scrollToForm} 
                    data-cursor="hover" 
                >
                {this.props.icon !== "" ? this.props.icon : ""}
                {this.props.children}
                    <span></span>
                </a> 
           </CursorAwareButtonWrapper>
                       
            
        )
    }

   
}

export default CursorAwareButton;