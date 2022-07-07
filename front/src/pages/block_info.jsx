import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { individual_block_request } from '../reducers/individual_block';

export const InfoWrap = styled.div`

    width:100%;
    height:800px;
    font-family:"Py-Bold";
    
`

export const Info = styled.div`
    box-shadow: 0 5px 18px -7px rgba(0,0,0,1);
    width:90%;
    height:90%;
    margin: 0 auto;
    margin-top:50px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
    >h2{
        padding-top:16px;
        padding-left:12px;
        box-sizing:border-box;
        height:70px;
    }
`

export const InfoBox = styled.ul`
    width: 100%;
    height:100%;
    list-style:none;
    margin:0;
    padding:0;
    padding:0 10px 0 10px;
    box-sizing:border-box;
    >li{
        background:white;
        height:10.5%;
        width:100%;
        border-top:1px solid black;
        display:flex;
        justify-content:center;
        >div{
            line-height:60px;
            padding-left:10px;
            box-sizing:border-box;
            border-right:1px solid #efefef;
        }

        >div:nth-child(1){
            width:20%;
        }
        >div:nth-child(2){
            width:80%;
            padding-left:20px;
            box-sizing:border-box;
        }

    }

    
`

const BlockInfo = ()=>{
    const dispatch = useDispatch();
    const {individual_block} = useSelector((state) => state.individual_block_info);
    const { idx } = useParams();
    console.log(individual_block, idx)

    useEffect(() => {
        dispatch(individual_block_request(idx));
    }, []);

    return (
        <InfoWrap>
            <Info>
                <h2>Block #{individual_block.number}</h2>
                <InfoBox>
                    <li>
                        <div>
                            number
                        </div>
                        <div>
                            {individual_block.number}
                        </div>
                    </li>
                    <li>
                        <div>
                            difficulty
                        </div>
                        <div>
                            {individual_block.difficulty}
                        </div>
                    </li>
                    <li>
                        <div>
                            mined by
                        </div>
                        <div>
                            {individual_block.miner}
                        </div>
                    </li>
                    <li>
                        <div>
                            timestamp
                        </div>
                        <div>
                            {individual_block.timestamp}
                        </div>
                    </li>
                    <li>
                        <div>
                            hash
                        </div>
                        <div>
                            {individual_block.hash}
                        </div>
                    </li>
                    <li>
                        <div>
                            gasUsed
                        </div>
                        <div>
                            {individual_block.gasUsed}
                        </div>
                    </li>
                    <li>
                        <div>
                        gasLimit
                        </div>
                        <div>
                            {individual_block.gasLimit}
                        </div>
                    </li>
                    <li>
                        <div>
                        size
                        </div>
                        <div>
                            {individual_block.size}
                        </div>
                    </li>

                    <li>
                        <div>
                        gasLimit
                        </div>
                        <div>
                            {individual_block.gasLimit}
                        </div>
                    </li>


                </InfoBox>
            </Info>

        </InfoWrap>

    )
}

export default BlockInfo;