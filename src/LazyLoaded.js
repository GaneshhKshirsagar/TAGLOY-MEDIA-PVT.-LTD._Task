import React, { useState } from 'react'
import {useEffect} from "react"; 

function LazyLoaded() {
    const [Loaded,setLoaded]=useState(false);
    useEffect(()=>{
        let observer=new window.IntersectionObserver(function(entries,self){
            //intrate over each entry
            entries.forEach((entry)=>{
                //we will process image are intersection
                if (entry.isIntersecting){
                  loadImage(entry.target)
                  self.unobserve(entry.target);
                }
                
        });
    });
     const imgs=document.querySelectorAll('[data-src]');
     imgs.forEach(img=>{
        observer.observe(img);
     });
return()=>{
       imgs.forEach(img=>{
        observer.unobserve(img);
    });
}

},[]);
function loadImage(image){
    image.src=image.dataset.src;
}
  return (
    <div className='LazyLoad'>
    <img src={''} data-src={"images/flow3.jpg"}
    alt="img" width={500} height={350}
    onLoad={()=>setLoaded(true)}
    className={Loaded?'loaded':'loading'}
    />
    <img src={''} data-src={"images/india1.jpg"}
    alt="img"width={500}height={350}
    onLoad={()=>setLoaded(true)}
    className={Loaded?'loaded':'loading'}
    />
    <img
     src={''}
    data-src={"images/ice2.jpg"}
    alt="img"width={500}height={350}
    onLoad={()=>setLoaded(true)}
    className={Loaded?'loaded':'loading'}
    />
    <img src={''}
    data-src={"images/natu2.jpg"}
    alt="img"
    width={500}
    height={350}
    onLoad={()=>setLoaded(true)}
    className={Loaded?'loaded':'loading'}
    />
    <img
    src={''}
    data-src={"images/flow5.jpg"}
    alt="img"
    width={500}
    height={350}
    onLoad={()=>setLoaded(true)}
    className={Loaded?'loaded':'loading'}
    />
    <img src={''}
    data-src={"images/flow1.jpg"}
    alt="img"
     width={500}
     height={350}
     onLoad={()=>setLoaded(true)}
     className={Loaded?'loaded':'loading'}
     />
     <img src={''}
    data-src={"images/natu2.jpg"}
    alt="img"
     width={500}
     height={350}
     onLoad={()=>setLoaded(true)}
     className={Loaded?'loaded':'loading'}
     />
     <img src={''}
    data-src={"images/natu3.jpg"}
    alt="img"
     width={500}
     height={350}
     onLoad={()=>setLoaded(true)}
     className={Loaded?'loaded':'loading'}
     />
    </div>
  )
}
export default LazyLoaded