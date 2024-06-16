import Newsitems from "@/assets/comp/Newsitems";
import { useEffect, useState } from "react";

const Newsboard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, [category]);

    return (
        <div className="mx-auto">
            {articles.map((news, index) => (
                <Newsitems 
                    key={index} 
                    id={news.url}  // Using URL as ID to ensure uniqueness
                    title={news.title} 
                    description={news.description} 
                    src={news.urlToImage} 
                    url={news.url} 
                    news={{ id: news.url, price: 50 }}
                />
            ))}
        </div>
    );
};

export default Newsboard;
