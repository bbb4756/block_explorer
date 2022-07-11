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
    console.log(individual_tx)
    console.log(idx)

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
                            {individual_tx.hash}
                        </div>
                    </li>
                    <li>
                        <div>
                            from
                        </div>
                        <div>
                            {individual_tx.from}
                        </div>
                    </li>
                    <li>
                        <div>
                            to
                        </div>
                        <div>
                            {individual_tx.to}
                        </div>
                    </li>
                    <li>
                        <div>
                            value
                        </div>
                        <div>
                            {individual_tx.value + "ETH"}
                        </div>
                    </li>
                    <li>
                        <div>
                            nonce
                        </div>
                        <div>
                            {individual_tx.nonce}
                        </div>
                    </li>
                    <li>
                        <div>
                            gas
                        </div>
                        <div>
                            {individual_tx.gas}
                        </div>
                    </li>
                    <li>
                        <div>
                            gasPrice
                        </div>
                        <div>
                            {individual_tx.gasPrice * 10 ** (-9) + "Gwei"}
                        </div>
                    </li>


                </InfoBox>
            </Info>

        </InfoWrap>

    )
}

export default TxInfo;