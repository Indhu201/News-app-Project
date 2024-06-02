// const Newsitems=({title,description,src,url})=>{
//     return (
//         <div className="flex">

//             <div className="grid grid-cols-3">
//                 <div className=" h-auto w-[300px] mb-10 shadow-lg p-3">

//                     <img src={src} style={{height:"200px",width:"327px"}} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title.slice(0,50)}</h5>
//                         <p className="card-text mb-2">{description?description.slice(0,90):"The news is about the current event. It is the information about something that has just happend."}</p>
//                         <a href={url} className="btn btn-primary">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Newsitems

const Newsitems=({title,description,src,url})=>{
    return (
        <div className="card bg-light text-dark gap-5 mb-3 d-inline-block my-3 mx-3 px-2 py-2 shadow-lg" style={{maxWidth:"345px"}}>
            <img src={src} style={{height:"200px",width:"327px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text mb-2">{description?description.slice(0,90):"The news is about the current event. It is the information about something that has just happend."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default Newsitems