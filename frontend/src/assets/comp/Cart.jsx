import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
    const { isEmpty, totalUniqueItems, items, totalItems, emptyCart } = useCart();

    console.log("isEmpty:", isEmpty);
    console.log("totalUniqueItems:", totalUniqueItems);
    console.log("items:", items);
    console.log("totalItems:", totalItems);

    if (isEmpty) return <h1 className="text-center">You Have Liked Nothing</h1>;

    return (
        <section className="container">
            <div className="">
                <div className="col-12">
                    <h5>Total Liked: ({totalUniqueItems}) </h5>
                    <div className="d-flex flex-wrap">
                        {items.map((item, index) => (
                            <div key={index} className="card bg-light text-dark m-3 p-3 shadow-lg flex flex-col justify-between" style={{ maxWidth: "345px" }}>
                                <img src={item.image} alt={item.title} className="card-img-top"  />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <div className="flex justify-end mt-1">
                                      <a href={item.url} className="p-2 bg-blue-500 rounded text-neutral-100">Read More</a>
                                   </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger m-2" onClick={() => emptyCart()}>Clear Liked</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;




// import React from "react";
// import { useCart } from "react-use-cart";

// const Cart = () => {
//     const { isEmpty, totalUniqueItems, items, totalItems, emptyCart } = useCart();

//     if (isEmpty) return <h1 className="text-center">You Have Liked Nothing</h1>;

//     return (
//         <section className="py-4 container">
//             <div className="row justify-content-center">
//                 <div className="col-12">
//                     <h5>Liked: ({totalUniqueItems}) total Items: ({totalItems})</h5>
//                     <table className="table table-light table-hover m-0">
//                         <thead>
//                             <tr>
//                                 <th>Image</th>
//                                 <th>Title</th>
//                                 <th>Description</th>
//                                 <th>Read More</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {items.map((item, index) => (
//                                 <tr key={index} >
                                
//                                     <td>
//                                         <img src={item.image} alt={item.title} style={{ height: '6rem' }} />
//                                     </td>
//                                     <td className="font-bold">{item.title}</td>
//                                     <td>{item.description}</td>
//                                     <a href={item.url}><button  className=" h-fit p-2 bg-blue-500 rounded text-neutral-100">Read More</button></a>

//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="col-auto">
//                     <button className="btn btn-danger m-2" onClick={() => emptyCart()}>Clear Liked</button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Cart;
