import styled from 'styled-components';
import axios from 'axios';
const server = 'http://172.31.8.224'
console.log(process.env)
const Search = styled.div`
    width:80%;
    height:150px;
    margin: 0 auto;
    font-family:"Py-Regular";
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-top: 1px #c8c8c8 solid;
    /* border-bottom: 1px #c8c8c8 solid; */


    >h3{
        padding-left:30px;
        font-family:"PyP-Light";
        height:40px;
    }

    >form {
        width:100%;
        height: 60px;
        display:flex;
        justify-content: space-evenly;

        >input{
            font-family:"Py-Bold";
            font-size:16px;
            border-radius:3px;
            border-style:none;

            
        }

        >input:nth-child(1){
            padding-left:25px;
        }
    }
    #searchText{
        background:#FFF0F0;
        border-right:2px pink solid;
        border-bottom:2px pink solid;
        display:block;
        width:80%;
        height:100%;
    }

    .search_submit{
        background:#FFF0F0;
        border-right:2px pink solid;
        border-bottom:2px pink solid;
        display:block;
        width:10%;
        height:100%;
    }

`

export const SearchInfo = ()=>{

    const SearchHandler = async (e) =>{
        e.preventDefault()
        console.log("검색결과",e.target.searchText.value)
        let search_result = e.target.searchText.value

        let option = {
            search_result
        }
        
        if(search_result.length != 66){
            alert('해시 길이가 올바르지 않습니다.')
        }
        else {
            try{
                const response = await axios.post('http://localhost:4000/search', option)
                let search_option = response.data.option.type
                console.log(server)
                if(search_option == "block"){
                    window.location.href = `${server}:3000/block/` + response.data.result[0].number
                    
                } else if(search_option == "transaction"){
                    window.location.href = `${server}:3000/tx/` + response.data.result2[0].hash
                } else{
                    alert(" 검색 결과가 없습니다. ")

                }
        

            } catch(e){
                console.log(e.message)
            }

        }

    }

    const onChange = async(e) =>{
        e.preventDefault()
        console.log(e.target.value)
    }
    return(
        <Search>
            <h3> GyulCoin Blockchain Explorer </h3>
            <form onSubmit={SearchHandler} onChange={onChange}>
                <input type="text" id="searchText" placeholder='주소/트랜잭션 해시/블록 해시'/>
                <input type="submit" className='search_submit'
                value="검색"/>
            </form>
        </Search>
    )
}
