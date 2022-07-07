import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
justify-content:space-between;
`

const Logo = styled.div`
width:10%;
height:100%;
display:flex;
justify-content:center;
    >a{
        display:block;
        font-size:20px;
        align-self:center;
        color: #FFAA28;
        font-family:"Py-Regular";
    }
`

const Title = styled.div`
    width:80%;
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
        <Logo><a href='/'>Gyul Scan</a></Logo>
        <Title><a href='/'>Gyul Scan</a></Title>
        <Logo><a href='/'>Gyul Scan</a></Logo>
    </Header>
)
}

export {DefaultHeader, Wrap}