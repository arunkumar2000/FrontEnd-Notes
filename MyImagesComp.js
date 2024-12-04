import React from 'react'
import chimp from '../assets/chimp.jpg'
import flower from '../assets/flower.jpg'
import commanData from '../shared/constant/constdata'

const MyImageComp =()=>{
    return(
        <div>
            <h2>
                This is my Image Comp
            </h2>
            <img src={chimp} alt='chimp' height="200px" width="200px"/>
            <img src={flower} alt='flower' height="200px" width="200px"/>
            <hr/>
            <img src={commanData.NTR} alt='NTR' height="200px" width="200px"/>
            <img src={commanData.insta} alt='insta' height="200px" width="200px"/>
            
        </div>
    )
}

export default MyImageComp
