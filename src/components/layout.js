import styled from "styled-components"

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: flex-start;
    min-height: 100%;
    height: 100%;
    width:100%;
    position: absolute;
    background-size: cover;
    background-image: ${props => `url(${props.background})`};
`



export default Layout
