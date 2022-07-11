import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { account_request } from '../reducers/account';


const AccountWrap = styled.div`
    width:100%;
    height:1000px;
`

const Balance = styled.div`
    width:80%;
    height:160px;
    margin: 0 auto;
    margin-top:100px;
    font-family:"Py-Bold";
    font-size:16px;
    margin-bottom:100px;
    >ul{
        width:95%;
        height:50%;
        display:flex;
        line-height:80px;
        border-top:1px solid grey;
        >li{
            padding-left:40px;
        }

        >li:nth-child(1){
            width:15%;
            border-right: 1px solid #efefef;
        }
        >li:nth-child(2){
            width:85%;
            padding-left:50px;
        }
    };
    >ul:nth-child(2){
        border-bottom:1px solid grey;
    }

`

const Transaction =styled.div`
    width: 100%;
    height: 600px;
    margin: 0 auto;
`

const Tx = styled.ul`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    font-family:"Py-Bold";
    font-size: 14px;
    box-shadow: 0 5px 18px -7px rgba(0,0,0,1);

    >h2{
        padding-left:30px;
        height:10%;
        line-height:80px;
        margin-bottom:20px;
        font-family: "PyP-Light"
    }
`

const TxBox = styled.div`
    width:100%;
    height:400px;
    overflow:scroll;
    ::-webkit-scrollbar {
            width: 6px;  /* 스크롤바의 너비 */
        }
        ::-webkit-scrollbar-thumb {
            height: 30%; /* 스크롤바의 길이 */
            background: #c8c8c8; /* 스크롤바의 색상 */
            border-radius: 10px;
        }

`
const TxOne = styled.li`
    width:96%;
    height:80px;
    margin: 0 auto;
    display:flex;
    text-align:center;
    line-height:80px;
    border-bottom: 1px solid #c8c8c8;

    >div{
        height:100%;
        font-size:16px;
    }

    >div:nth-child(1),div:nth-child(3),div:nth-child(4){
        width:28%;
    }

    >div:nth-child(2),div:nth-child(5){
        width:8%;
    }

`

function slice_letter(hash){
    const slice = hash.substr(0, 14) + "..."
    return slice
}

// const MouseOver = (e)=>{
//     console.log(e.target)
// }

// const MouseOut = (e)=>{
//     console.log(e.target)

// }
export const AccountPage = ()=>{
    const dispatch = useDispatch();
    const  {value}= useSelector((state) => state.account_info);
    const transactions = useSelector((state)=>state.account_info.transactions)
    const { idx } = useParams();
    console.log("transcation", transactions)


    useEffect(() => {
        
        dispatch(account_request(idx));
    }, [dispatch]);

    return (

        <AccountWrap>
            <Balance>
                <ul>
                    <li>
                        Account
                    </li>
                    <li>
                        {idx}
                    </li>
                </ul>
                <ul>
                    <li>
                        Balance
                    </li>
                    <li>
                        {value +"ETH"}
                    </li>
                </ul>
            </Balance>
            <Transaction>
                <Tx>
                    <h2>Transaction</h2>
                    <TxOne style={{borderTop:"1px solid grey", borderBottom:"1px solid grey"}}>
                        <div>
                            Tx Hash
                        </div>
                        <div>
                            Block Num
                        </div>
                        <div>
                            From
                        </div>
                        <div>
                            To
                        </div>
                        <div>
                            Value
                        </div>
                    </TxOne>
                    <TxBox>
                        {transactions &&
                            transactions.map((v,i)=>{
                                return(
                                    <TxOne key={i}>
                                    <div>
                                        <Link to={`/tx/`+ v.hash}>{slice_letter(v.hash)}</Link>
                                    </div>
                                    <div>
                                        <Link to={`/block/`+ v.blockNumber}>{v.blockNumber}</Link>
                                    </div>
                                    <div 
                                    // id="from" className='on' onMouseOver={MouseOver} onMouseOut={MouseOut} value={v.from}
                                    >
                                        <Link to= {`/account/` + v.from}>{slice_letter(v.from)}</Link>
                                    </div>
                                    <div
                                    //  id="to" className='on' onMouseOver={MouseOver} onMouseOut={MouseOut} value={v.to}
                                     >
                                        <Link to= {`/account/` + v.to}>{slice_letter(v.to)}</Link>
                                    </div>
                                    <div>
                                        {v.value + "ETH"}
                                    </div>
                                </TxOne>
                                )
                            
                            })}
                    </TxBox>
                </Tx>
            </Transaction>
            
        </AccountWrap>
    )
}