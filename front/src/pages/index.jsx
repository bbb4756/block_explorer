import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import BlockList from '../components/latest_list';
import { SearchInfo } from '../components/search';

const IndexWrap = styled.div`
    width:100%;
    height:1000px;
`

const ContentBox = styled.div`
    margin-top:50px;
    width:100%;
    height:600px;
`

const Index = ()=>{

    return (
        <IndexWrap>
            <SearchInfo/>
            <ContentBox>
                <BlockList/>
            </ContentBox>

        </IndexWrap>
    )
}

export default Index;