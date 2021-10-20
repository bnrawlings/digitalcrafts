import styled from "styled-components";

export const AppDiv = styled.div`
    height: 100vh;
`

export const SectionsDiv = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: salmon;
    position: relative;
    top: 70px;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
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
    background-color: darkgoldenrod;
    position: fixed;
    top: 0;
    z-index: 2;
`
export const WrapperDiv = styled.div`

`

export const WrapperLeft = styled.div`

`
export const WrapperRight =styled.div`

`