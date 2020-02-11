import '../styles/CursorAwareButton.scss';
import React, { Component } from 'react';
import {css} from 'glamor';

class CursorAwareButton extends Component {
    
    buttonMouseInteraction(e){
        var top=0, left=0;
        var elem = e.target;
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
  
    render() {
        let cursor_buttonStyle = css({
            color: this.props.defaultColor,
            border: '1px solid ' + this.props.defaultColor,
            ':hover':{
                color: this.props.activeColor
            },
            '.active' :{
                color: this.props.activeColor
            }
        });
        const cursor_button_spanStyle = css({
            backgroundColor: this.props.defaultColor,
            top: this.props.footerFix ? '0!important' :  ''
        });

        return (
           <>
                <a  onMouseEnter={this.buttonMouseInteraction} 
                    onMouseLeave={this.buttonMouseInteraction}
                    onClick={this.props.onClick}
                    className="cursor-button" 
                    data-cursor="hover" 
                    {...cursor_buttonStyle}
                >
                {this.props.icon !== "" ? this.props.icon : ""}
                {this.props.children}

                    <span {...cursor_button_spanStyle}></span>
                </a> 
           </>
                       
            
        )
    }

   
}

export default CursorAwareButton;