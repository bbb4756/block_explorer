//block.test.js

const Web3 = require('web3')

describe('Block', () => {
    let web3
    it('web연결 테스트', async () => {
        web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))

        const blockNumber = await web3.eth.getBlockNumber()
        console.log(blockNumber) //239

        const block = await web3.eth.getBlock(blockNumber, true)

        console.log('트랜잭션만 추출', block)
        //[참고] 전체 블록 가져오기 - 반복문을 돌리면 된다!
        // for (let i = 1; i <= blockNumber; i++) {
        //     const blocks = await web3.eth.getBlock(i, true);
        //     console.log(blocks);
        //     blocks.transactions.forEach((tx) => {
        //         console.log(tx);
        //     });
        // }
    })

    it('getTransaction', async () => {
        const tx = await web3.eth.getTransaction('0x56534910fb2af49b4e2865b52ca687cd65a781aab776f3a2b6f8b8eaf3e957ca')
        console.log('tx: ', tx)
        //메타마스크(사용자)가 서명까지 완료해서 노드에게 보내준 데이터 형태(매개변수로 입력한 tx)
        //txpool에 있는 수준의 tx
    })

    it('getTransactionRecipt', async () => {
        const tx = await web3.eth.getTransactionReceipt(
            '0x56534910fb2af49b4e2865b52ca687cd65a781aab776f3a2b6f8b8eaf3e957ca',
        )
        console.log('tx Recipt: ', tx)
        //geth가 실제로 입력한 데이터 형태   tx 내용이 evm에 한번 거쳐간 데이터>> gasUsed 속성이 있음
        //검증이 끝난 후 블록에 들어간 실제 tx
    })
})
