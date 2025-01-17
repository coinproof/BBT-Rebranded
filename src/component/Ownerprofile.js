import React, { useState, useEffect } from 'react'
import client from '../client'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {
    AiFillLeftCircle
} from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsStarFill} from 'react-icons/bs'
import { Link, useParams } from "react-router-dom";
import Ownerdetails from "./Ownerdetails";
import { addReview, getProfile, BNBBalance } from "./../Web3_connection/ContractMethods"
import { initInstance } from './../Web3_connection/web3_methods'
import PlatformHead from "./PlatformHead";
import SidebarSlide from "./SidebarSlide";

export default function Ownerprofile() {

    const [singleOwner, setSingleOwner] = useState([]);
    const [rating, setRating] = useState('SAFU (5 Start)');
    const [bnbBal,setBNBBal] = useState(0)
    const [tokenBal, setTokenBal] = useState(0)
    const { slug, id } = useParams();
    const notify = () => toast("Transaction Successful",{
        position: "top-right",
        pauseOnHover: false,
      });


    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"] {
              name,
              alias,
              trapPoints,
              numProjects,
              experience,
              slug,
              avgLife,
              image{
                  asset -> {
                      _id,
                      url
                  },
                  alt
              }
      }`
        ).then((data) => setSingleOwner(data[0]))
        const init = async () => {
            await initInstance();
            await getprofile(id);
        }
        setInterval(()=>{
            init();
        },4000)

        const getBNB = async()=> {
            const bnbbal = await BNBBalance();
            setBNBBal(bnbbal)
        } 
        getBNB();
    }, [slug])
//    console.log("BNB Balance ", bnbBal)
    
    const [avgRating, setavgRating] = useState();
    const [modal, setModal] = useState(false);
    const [countreview, setCountReview] = useState(0)
    const [trappoint, setTrapPoint] = useState(0)
    const [name,setName] = useState("")

    const toggleModal = () => {
        setModal(!modal);
    };
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const giveRating = async (rate) => {
        toggleModal();
        try {
            if (rate.includes("Safu")) {
                const got = await addReview(id, 5);
                if(got.status === true){
                    
                    notify();
                    await getprofile();
                }
            }
            else if (rate.includes("Excellent")) {
               const got = await addReview(id, 4)
               if(got.status === true){
                notify();
                await getprofile();
            }
            }
            else if (rate.includes("DYOR")) {
               const got = await addReview(id, 3)
               if(got.status === true){
                notify();
                await getprofile();
            }
            }
            else if (rate.includes("Avoidable")) {
                const got = await addReview(id, 2)
                if(got.status === true){
                    notify();
                    await getprofile();
                }
            }
            else if (rate.includes("Scammer")) {
               const got = await addReview(id, 1)
               if(got.status === true){
                notify();
                await getprofile();
            }
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    const getprofile = async(id) =>{
        const data = await getProfile(id)
        setName(data.name)
        setTrapPoint(data.trapPoints)
        setCountReview(data.reviewsCount)
        setavgRating(data.avgRating/10) 
    }
  
    const start =(avgRating)=> {
        // console.log("Rating",Number(avgRating).toFixed(0))
       if(Number(avgRating).toFixed(0) === "5"){
            return [<BsStarFill />,<BsStarFill />,<BsStarFill />,<BsStarFill />,<BsStarFill />]
       }
       else if(Number(avgRating).toFixed(0) === "4"){
        return [<BsStarFill />,<BsStarFill />,<BsStarFill />,<BsStarFill />] 
       }
       else if(Number(avgRating).toFixed(0) === "3"){
        return [<BsStarFill />,<BsStarFill />,<BsStarFill />] 
       }
       else if(Number(avgRating).toFixed(0) === "2"){
        return [<BsStarFill />,<BsStarFill />] 
       }
       else if(Number(avgRating).toFixed(0) === "1"){
        return [<BsStarFill />] 
       }
       else{
       
       }
      
    }
    
    return (
        <>
        <SidebarSlide />
        <PlatformHead />
        <div id="pagesafe-cont" className="owner-prof-cont m-auto">
            <ToastContainer />
            <div className="safe-head py-3 position-relative container-fluid" style={{margin:"auto", maxWidth:"1150px"}}>
                <div className="head-content row">
                    <Breadcrumb><AiFillLeftCircle size={25} color="#fff" />
                        <Breadcrumb.Item href="/">&nbsp; Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/safehaven/projectowner">
                        Safe Haven
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="col-lg-8">
                        <div className="dev-main">
                            <h1>{name}</h1>
                            <div className="fs-6"><span className="review-star fs-5"> {start(avgRating)} </span> ({countreview} Reviews)</div>
                            <p className="my-1">{trappoint} Trap Points</p>
                            <p>
                                0 Trap Points means the safest! lower trap points means safer! Read
                                more about{" "}
                                <Link
                                    to="/"
                                    style={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
                                >
                                    trap points
                                </Link>
                            </p>
                            <button className={`btn btnYellow ${bnbBal ? "disabled" : ""} `} onClick={() => toggleModal()}>{bnbBal ? "Insufficient BNB Balance" : "Give Rating"}</button>
                            
                        </div>
                    </div>

                    <div className="col-lg-2">
                        {singleOwner.image && singleOwner.image.asset && (
                            <img className="profileImg" src={singleOwner.image.asset.url} alt={singleOwner.title} />
                        )}
                    </div>
                </div>
            </div>

            {modal && (
                <div style={{zIndex:"5"}}>
                    <div onClick={() => toggleModal()} className="overlay-popup"></div>
                    <div className="modal-content py-3">

                        <label for="category" className="form-label fw-bold mb-3">
                            Give Rating
                        </label>
                        <span style={{fontSize:"10px",marginTop:"-20px",marginBottom:"10px"}}>(A fee of 0.005 BNBs is applicable to keep this utility spam free!)</span>
                        <div className='px-4 mb-2'>
                            <select className="form-select text-center" id="sel1" value={rating} onChange={(e) => setRating(e.target.value)} aria-label="Default select example">
                                <option selected>Select Star Rating</option>
                                <option>Safu &nbsp; &#9733; &#9733; &#9733; &#9733; &#9733;</option>
                                <option>Excellent &nbsp; &#9733; &#9733; &#9733; &#9733;</option>
                                <option>DYOR &nbsp; &#9733; &#9733; &#9733;</option>
                                <option>Avoidable &nbsp; &#9733; &#9733;</option>
                                <option>Scammer &nbsp; &#9733;</option>
                            </select></div>
                        <button className="btn w-50 mx-auto fw-bold my-2 btn-outline-dark" onClick={() => giveRating(rating)}>Submit</button>
                    </div>
                </div>
            )}
            <div className="safe-content row mt-3" style={{maxWidth:"1150px", margin:"auto", position:"relative"}}>
                <div className="content col">
                    <Ownerdetails />
                </div>
            </div>
        </div>
        </>
    );
}