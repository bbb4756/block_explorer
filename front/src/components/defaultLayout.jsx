import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background1 from '../image/gyul_1.png'
import background2 from '../image/gyul_2.png'
const Wrap = styled.div `
    width:100%;
    height: auto;
    min-height:100%;
    background: #f8f9fa;
`
const Header = styled.div `
width: 100%;
height:100px;
display:flex;
justify-content:space-around;
`

const Logo1 = styled.img.attrs({
    src: `${background1}`
})`

width:100%;
height:100%;

`

const Logo2 = styled.img.attrs({
    src: `${background2}`
})`

width:100%;
height:100%;

`

const Title = styled.div`
    width:60%;
    height:100%;
    text-align:center;
    display:flex;
    justify-content:center;
    font-family:"Py-Bold";
    text-shadow: 2px 4px 2px gray;

    >a{
        display:block;
        font-size:34px;
        align-self:center;
        color: #FFAA28;
    }

`

const DefaultHeader = ()=>{

return(
    <Header>
        <a href="/"><Logo1/></a>
        <Title><a href='/'>Gyul Scan</a></Title>
        <a href="/"><Logo2/></a>
    </Header>
)
}

export {DefaultHeader, Wrap}