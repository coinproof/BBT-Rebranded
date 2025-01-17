import { getAccount, getContract, initInstance } from "./web3_methods";
import { ABI } from './../ABI/Rating';
import { TokenABI } from "../ABI/TokenABI";
import {BBT} from '../ABI/BBTToken'
import { envprod } from "./Envrionments";
import { getWeb3 } from "./web3";


export const getRATEContract = async() => {
    const betContract = getContract(ABI, envprod.React_App_MAINNET);
    return betContract;
}

export const getTotoalProfile = async() =>{
    const contract = await getRATEContract();
    const TotalProfile = await contract.methods.profileCount().call();
    return TotalProfile;
}

export const addReview = async(id, rating)=> {
    console.log("Rating got", id , rating)
    const contract = await getRATEContract();
    const data = await contract.methods.addReview(id,rating).send({
        from: await getAccount(),
        value: envprod.React_App_Rating_Fee
    });
    return data;
}

export const getProfile = async(id) => {
    const contract = await getRATEContract();
    const data = await contract.methods.getProfile(id).call();
    return data;
}

export const TokenContract = async()=>{
    await initInstance();
    const contract = getContract(TokenABI,envprod.React_App_Token)
    return contract
}

export const getTokenBalance = async()=> {
    const contract = getContract(TokenABI,envprod.React_App_Token)
    const balance = await contract.methods.balanceOf(await getAccount()).call();
    return Number(balance)
}

export const BNBBalance = async()=>{
    // const web3 = getWeb3();
    // const bal = await web3.eth.getBalance(await getAccount());
     const convertBal = 0/10**18
    if(convertBal > 0.005){
        return false;
    }
    else{
        return true
    }
}

export const symbol = async()=>{
    const contract = getContract(TokenABI,envprod.React_App_Token)
    const sym = await contract.methods.symbol().call();
    return sym;
}

export const getBBTBalance = async()=> {
    const account = await getAccount();
    const contract = getContract(BBT,envprod.React_App_BBT)
    const balance = await contract.methods.balanceOf(account).call();
    console.log("acount",balance)
    return Number(balance)/10**18
}