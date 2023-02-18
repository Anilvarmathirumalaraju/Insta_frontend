
import { useEffect, useState } from "react";

import axios from "axios"
import "./post_view.css";


const PostView = () => {
    const [count, setcount] = useState(0)
    const [data,setpost]=useState([])
    
    useEffect(()=>{
        // https://instaclone-pg-server.herokuapp.com/images
        axios.get("https://backend-for-insta.onrender.com/images").then((imagedata)=>{
            let datas = imagedata.data.images.reverse();
            //console.log(data[0])
            setpost(datas)
            
        })
        .catch((err)=>{console.log(err)})
    },[])


    const handleIncrement =(e)=>{ 
        setcount(count + 1);
    }
  
    return (
        <>
       
        <div className="containerback">
                <header>
                    <div className="nav">
                        <img id="insta" src={require("./images/logo.png")} alt="log"/>
                        <span className="instaclone">Instaclone</span>
                        <a href="./form"><img id="camera1" src="https://tse1.mm.bing.net/th?id=OIP.eURN6FEaba3_pAguBjhvsgHaHa&pid=Api&rs=1&c=1&qlt=95&w=114&h=114" alt="camera"></img></a>
                        

                    </div>
                </header>
                <hr /> 
                <br/><br/>
                <br/>
                <div id="back">
                    {data.map((item,i)=>{
                         return (
                                <div className="body">
                                    <div className="card">
                                        <div className="user-info" key={i}>
                                            <h3>{item.author}</h3> 
                                            <span className="location">{item.location}</span>
                                            {/* <span className="dot"><button onClick={()=>handleConfirm(item._id)}>DELETE</button></span> */}
                                            {/* <img src="https://tse1.mm.bing.net/th?id=OIP.b6rsvJSKT2NF_d-l4DluOgAAAA&pid=Api&P=0" className="dot" alt="threedots" /> */}
                                        </div>
                                        <div className="user-image">
                                            <img className="post" src={item.image} alt="user defined "></img>
                                        </div>
                                        <div className="cont1">
                                        <div className="heart">
                                            <img  id="heart-image" src='/images/heart-fill.svg' alt="user defined" onClick={handleIncrement}></img> 
                                            {/* onClick={()=>{likePost(item._id)}} */}
                                            <img  id="com-image" src="./images/chat.svg" alt="user defined"></img>
                                            <img  id="share-image" src="./images/share.png" alt="user defined"></img>
                                            {/* <span className="grid" id="date" >{user.date}</span> */}
                                        </div>
                                        <div className="user-meta">
                                            <span>{item.date}</span>
                                        </div>
                                        </div>
                                        <div className="user-likes">
                                            {count} likes
                                        </div>
                                        <div className="user-description">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>
           
        </>
    )
}
export default PostView;