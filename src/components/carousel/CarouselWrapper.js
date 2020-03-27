import React from 'react'
import styled from 'styled-components'
import {document, window} from 'browser-monads';
import {down} from 'styled-breakpoints'

const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

const CarouselWrapper = styled.div`
  position: relative;
  padding-bottom: 45px;
  box-sizing: content-box;
  box-shadow: 3px 3px 10px rgba(0,0,0,.2);
  transition: height 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  .wrapper{
    overflow: hidden;
    position: relative;
    z-index: 0;
  }

  .r-slides {
    width: 10000px;
    position: relative;
    display: flex;
    touch-action: manipulation;

  &.shifting {
    transition: left .2s ease-out;
  }
}
`

const Arrow = styled.button`
    position: absolute;
    top: 120px;
    width: 40px;
    height: 50px;
    background: #fff;
    border-radius: 50px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    z-index: 2;
    background-size: 22px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    &:active{
        transform: scale(.8);
    }
    &:focus{
        background-color: #fff;
    }
    ${down('sm')}{
        bottom: -70px;
        top:unset;  
    }
` 

const LeftArrrow = styled(Arrow)`
    background-image: url(https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronLeft-512.png);
    left: -45px;
    ${down('sm')}{
        left: 0; 
    }
`
const RightArrow = styled(Arrow)`
    background-image: url(https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronRight-512.png);
    right: -45px;
    ${down('sm')}{
        right: 0;
    }
`

const Selector = styled.ul`
    display: flex;
    margin: 15px auto;
    width: 60px;
    justify-content: space-around;

    li {
        border: 1px solid black;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        &.activ{
            background: ${props => props.theme.primary};
            border-color: ${props => props.theme.primary};
        }
    }
`

const CarouselLeftArrow = (props) => {

const onClick = (e) => {
    if(w <= 640)
    window.scroll({
        left: 0,
        top : document.getElementById(props.scrollInto).offsetTop-100,
        behavior: 'smooth'
    });
    props.onClick(e);
}
    return (
        <LeftArrrow onClick={onClick} data-cursor="action-prev"></LeftArrrow>
    );

}
  
const CarouselRightArrow = (props) => {
    const onClick = (e) => {
        if(w <= 640)
        window.scroll({
            left: 0,
            top : document.getElementById(props.scrollInto).offsetTop-100,
            behavior: 'smooth'
        });
    props.onClick(e);
    }
    return (
        <RightArrow onClick={onClick} data-cursor="action-next"></RightArrow>
    );
}

const CarouselSlide = (props) => {
    return (
        <div className={props.isActive ? "r-slide activ" : "r-slide"} style={props.style}>  
            {props.slide}   
        </div>
    )
}

export {CarouselWrapper, CarouselLeftArrow, CarouselRightArrow, CarouselSlide, Selector}