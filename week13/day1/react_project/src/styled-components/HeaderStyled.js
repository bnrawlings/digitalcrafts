import styled from "styled-components";

export const AppDiv = styled.div`
    height: 100vh;
`

export const SectionsDiv = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #F7F7F9;
    position: relative;
    top: 70px;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
    overflow-x: hidden;
    &::-webkit-scrollbar{
        display: none;
    }


    > *{
        width: 100vw;
        height: calc(100vh - 70px);
        scroll-snap-align: start;
    }
`


export const HeaderDiv = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    position: fixed;
    top: 0;
    z-index: 2;
    
    
    
`
export const WrapperLeft = styled.div`
position: relative;
left: 48rem;
bottom: 4rem;

`