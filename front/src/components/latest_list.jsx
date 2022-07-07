
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { block_list_request } from '../reducers/latest';
import { create_request } from '../reducers/create';

const BlockListWrap = styled.div`
    width:90%;
    height:100%;
    margin: 0 auto;
    display:flex;
    justify-content: space-evenly;
    border-top: 1px solid grey;
    font-family:"Py-Bold";
`
const ListContent = styled.div`
    width:45%;
    height:90%;
    align-self: center;
    border-radius:2px;
    box-shadow: 0 5px 18px -7px rgba(0,0,0,1);
    

    >h3{
        padding: 15px 0 15px 0;
        padding-left:20px;
        font-family:"Py-Regular";
        text-shadow: 2px 2px 2px gray;
    }

    >div{
        width:100%;
        height:92%;
        overflow:scroll;
        ::-webkit-scrollbar {
            width: 6px;  /* 스크롤바의 너비 */
        }
        ::-webkit-scrollbar-thumb {
            height: 30%; /* 스크롤바의 길이 */
            background: #c8c8c8; /* 스크롤바의 색상 */
            border-radius: 10px;
        }
    }
    .bk_one, .tx_one{
        margin:0 auto;
        width:95%;
        height:15%;
        display:flex;
        justify-content:space-between;
        border-top: 1px solid #aaaaaa;
        .bk, .tx{
        display:inline-block;
        width:40px;
        height:40px;
        background-color:#FAFAD2;
        border-radius:5px;
        display:flex;
        justify-content:center;
        align-self: center;
            >p{
                align-self:center;
            }
        }
        .tx{
            border-radius:15px;
        }

    .block_num{
        width:15%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        font-size:14px;
        >link{
            text-decoration:none;
        }
        >span{
            font-size:12px;
        }
    }

    .miner{
        display:flex;
        flex-direction:column;
        justify-content:center;
        >div{
            font-size:12px;
            color:black;
        }
    }
    }

    .tx_one{
        .transaction_hash, .Transction_people{
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;

            >span{
                font-size: 14px;
            }

        }
        .transaction_hash{
            width:30%;

        }

        .Transction_people{
            width:50%;
            >div{
                display:flex;
                justify-content:center;
            }
            >div>span{
                font-size:14px;
                display:block;
                width:60px;
            }
        }


    }


`
function timeForToday(value) {
    const today = new Date();
    const timeValue = value *1000;

    const betweenTime = Math.floor((today.getTime() - timeValue) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
}

function slice_letter(hash){
    const slice = hash.substr(0, 14) + "..."
    return slice
}

const BlockList = ()=>{
    const dispatch = useDispatch();
    const latest_block = useSelector((state) => state.block_total.blocks); //가져올 state
    const latest_tx = useSelector((state)=>state.block_total.txs)
    useEffect(() => {
        dispatch(create_request())
        dispatch(block_list_request());
    }, [dispatch]);
    

    return(

        <BlockListWrap>
            <ListContent>
                <h3>Latest Blocks</h3>
                <div className='content_list'>
                    {latest_block.map((v,i)=>(
                        <div className="bk_one" key={i}>
                            <span className='bk'><p>BK</p></span>
                            <div className='block_num'>
                                <Link to={'/block/' + v.number} className="link">{v.number}</Link>
                                <span>{ timeForToday(v.timestamp )}</span>
                            </div>
                            <div className='miner'>
                                <div>Mined by</div>
                                <span>{v.miner}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </ListContent>
            <ListContent>
                <h3>Latest Transactions</h3>
                <div className='content_list'>
                    {latest_tx.map((v,i)=>(
                        <div key ={i} className="tx_one">
                            <span className='tx'><p>TX</p></span>
                            <div className='transaction_hash'>
                                <span>TransactionHash</span>
                                <Link to={`/tx/`+ v.transactionHash} className="link">
                                    {slice_letter(v.transactionHash)}
                                </Link>
                            </div>
                            <div className='Transction_people'>
                                <div><span>From</span> {slice_letter(v.sender)}</div>
                                <div><span>To</span>{slice_letter(v.receiver)}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </ListContent>
        </BlockListWrap>
    )
}

export default BlockList;