import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { individual_tx_request } from '../reducers/individual_tx';
import { InfoWrap } from './block_info';
import { Info } from './block_info';
import { InfoBox } from './block_info';


const TxInfo = ()=>{
    const dispatch = useDispatch();
    const {individual_tx} = useSelector((state) => state.individual_tx_info);
    const { idx } = useParams();
    console.log(individual_tx, idx)

    useEffect(() => {
        dispatch(individual_tx_request(idx));
    }, []);

    return (
        <InfoWrap>
            <Info>
                <h2>Transation Details</h2>
                <InfoBox>
                    <li>
                        <div>
                            blockNumber
                        </div>
                        <div>
                            <Link to={"/block/" + individual_tx.blockNumber}>{individual_tx.blockNumber}</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            blockHash
                        </div>
                        <div>
                            {individual_tx.blockHash}
                        </div>
                    </li>
                    <li>
                        <div>
                            transactionHash
                        </div>
                        <div>
                            {individual_tx.transactionHash}
                        </div>
                    </li>
                    <li>
                        <div>
                            cumulativeGasUsed
                        </div>
                        <div>
                            {individual_tx.cumulativeGasUsed}
                        </div>
                    </li>
                    <li>
                        <div>
                            effectiveGasPrice
                        </div>
                        <div>
                            {individual_tx.effectiveGasPrice}
                        </div>
                    </li>
                    <li>
                        <div>
                            sender
                        </div>
                        <div>
                            {individual_tx.sender}
                        </div>
                    </li>
                    <li>
                        <div>
                            receiver
                        </div>
                        <div>
                            {individual_tx.receiver}
                        </div>
                    </li>
                    <li>
                        <div>
                            transaction index
                        </div>
                        <div>
                            {individual_tx.transactionIndex}
                        </div>
                    </li>
                    <li>
                        <div>
                            contract address
                        </div>
                        <div>
                            {individual_tx.contractAddress== null&& "null"}
                        </div>
                    </li>


                </InfoBox>
            </Info>

        </InfoWrap>

    )
}

export default TxInfo;