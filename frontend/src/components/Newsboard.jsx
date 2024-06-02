import Newsitems from "@/assets/comp/Newsitems";
import { useEffect, useState } from "react";


const Newsboard=({category})=>{

    const [articles,setArticles]=useState([]);
    useEffect(()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY } `
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
        

    },[category])

    return (
        <div className="mx-auto">
            {articles.map((news,index)=>{
                return <Newsitems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} /> 

            })}

        </div>
    )
}

export default Newsboard