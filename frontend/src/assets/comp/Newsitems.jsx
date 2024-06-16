import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { HeartIcon, SaveAllIcon } from "lucide-react";

const Newsitems = ({ id, title, description, src, url, news }) => {
    const { addItem, removeItem } = useCart();
    const [liked, setLiked] = useState(false);

    // Define the item object that you want to add to the cart
    const item = {
        id: id,
        price: news?.price || 0,
        title: title,
        description: description,
        image: src,
        url: url
    };

    // Check if the item is liked in localStorage on component mount
    useEffect(() => {
        const likedItems = JSON.parse(localStorage.getItem("likedItems")) || {};
        setLiked(likedItems[id] || false);
    }, [id]);

    const handleLike = () => {
        const likedItems = JSON.parse(localStorage.getItem("likedItems")) || {};

        if (!liked) {
            addItem(item);  // Add item to the cart when liked
            likedItems[id] = true; // Update localStorage
        } else {
            removeItem(id); // Remove item from the cart when unliked
            delete likedItems[id]; // Update localStorage
        }

        localStorage.setItem("likedItems", JSON.stringify(likedItems));
        setLiked(!liked);
    };

    return (
        <div className="card bg-light text-dark gap-5 mb-3 d-inline-block my-3 mx-3 px-2 py-2 shadow-lg hover:shadow-2xl hover:border-black delay-75 cursor-pointer flex flex-row justify-between" style={{ maxWidth: "345px" }}>
            <img src={src} style={{ height: "200px", width: "327px" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text mb-2">{description ? description.slice(0, 90) : "The news is about the current event. It is the information about something that has just happened."}</p>
                <div className="flex justify-between">
                    <a href={url} className="p-2 bg-blue-500 rounded text-neutral-100">Read More</a>
                    <div className="flex gap-1.5">
                        <button 
                            className={`btn ${liked ? 'btn-danger' : 'btn-primary'}`} 
                            onClick={handleLike}
                        >
                            <HeartIcon />
                        </button>
                        <button className="btn btn-primary"><SaveAllIcon /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsitems;
