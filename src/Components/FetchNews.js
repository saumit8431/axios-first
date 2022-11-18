import React, { useState } from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

function FetchNews() {
    const [news, setNews] = useState([])

    const fetchNews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=3ae1ea37fc1b4a5da7b23fad511bebda")
            .then((resp) => {
                console.log(resp);
                setNews(resp.data.articles)
            })
    }

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-4">
                        <button className='btn btn-primary' onClick={fetchNews}>FetchNews</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {
                        news.map((value) => {
                            return (
                                <div className="col-4">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={value.urlToImage} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.description}</p>
                                            <a href="/" className="btn btn-primary">main</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </>

    )
}

export default FetchNews