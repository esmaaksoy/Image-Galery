import React from "react";

const Image =({data})=>{
return(
    <>
     <h1>İmage Galery</h1>
    <div className="container">
    {data.map(per=>{const {photographer,src:{large}}=per;
        return (
            <div key={photographer} >
                <div className="images">
                <img src={large} alt={photographer} />
                </div>
            <p>{photographer}</p>
            </div>
        )
    })}
   </div>
   </>
);
}
export default Image