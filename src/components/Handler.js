import React, { useContext } from "react";
import './Handler.css'
import { NewsContext } from "../NewsContext";
const date = new Date();
//    grabbing only the date fom Date() object
let onlyDate = date.toString().slice(0, 16)





function Handler() {

    //data fetched in NewsContext.js 
    const { data } = useContext(NewsContext);
    console.log(data)

    // "Mock" data return from API call 
    const serverObj = [
        {
            component: 'Header',
            params: {
                text: 'NEWSFEED',
                style: {
                    'display': 'flex',
                    'flex-direction': 'column',
                    'justify-content': 'center',
                    'font-family': 'Courier New, Courier, monospace',
                    'font-size':'60px',
                    'height': '45vh',
                    'align-items': 'center',
                    'background': 'linear-gradient(180deg, rgb(26, 23, 23) 0%, rgb(28, 27, 27) 100%)',
                    'color': 'white',
                    'width': '100vw'
                },
            },
        },
        {
            component: 'Feed',
            params: {
                api: data,
                style: {
                    'display': 'flex',
                    'flex-wrap': 'wrap',
                    'justify-content': 'center',
                    'text-align': 'center',
                    'padding-top': '2%',
                    'width': '100vw',
                    'background': 'linear-gradient(180deg, rgb(28, 27, 27) 22%, rgba(205,252,113,1) 41%)'
                }
            }
        },
        {
            component: 'Footer',
            params: {
                date: onlyDate,
                style: {
                    'bottom': 0,
                    'width': '100vw',
                    'height': '4rem',
                    'display': "flex",
                    'flex-direction': "column",
                    'align-items': "center",
                    'justify-content': 'center',
                    'font-family': 'Courier New, Courier, monospace',
                    'color': 'white',
                    'background': 'linear-gradient(180deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)'
                }
            }

        }
    ]



    // mapping serverObj, checking to see if data is present in each key/val
    return (
        <>
            {serverObj.map((item, index) => {
                return (
                    <div key={index} style={item.params.style}>
                        {item.params.text ? item.params.text : ''}
                        {date ? item.params.date : null}
                        {item.params.api ? data.articles.map((article, index) => {
                            return (
                                // "CARD"
                                <div className='article-card' key={index}>
                                    <h1>{article.title}</h1>
                                    {article.title}
                                    {article.description}
                                    <a href={article.url}><img style={{ 'height': '100%', 'width': '100%', 'objectFit': 'cover' }} src={article.urlToImage} alt='headline pic'></img></a>
                                </div>

                            )
                        }) : null}
                    </div>
                );
            })}
        </>

    )

}

export default Handler;

