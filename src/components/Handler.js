import React, { useContext } from "react";
import './Handler.css'
import { NewsContext } from "../NewsContext";




function Handler() {

    // importing data fetched in NewsContext.js 
    const { data } = useContext(NewsContext);
    // let articlesArr = data.articles
    console.log(data)


    const serverObj = [
        {
            component: 'Header',
            params: {
                text: 'NEWSFEED',
                style: {
                    'display': 'flex',
                    'flex-direction': 'column',
                    'justify-content': 'center',
                    'height': '50vh',
                    'align-items': 'center',
                    'background-color': 'whitesmoke',
                    'color': 'red',
                    'font-size': '5rem',
                    'width': '100vw'
                },
                // date: onlyDate
            },
        },
        {
            component: 'Feed',
            params: {
                api: data,
                text: 'FEED',
                style: {
                    'display': 'flex',
                    'flex-wrap': 'wrap',
                    // 'flex-direction':'column',
                    'align-items':'center',
                    'justify-content':'center',
                    'padding-top': '2%',
                    'background-color': 'white'
                }
            }
        },
        {
            component: 'Footer',
            params: {
                text: 'FOOTER!',
                style: {
                    'bottom': 0,
                    'width': '100vw',
                    'height': '4rem',
                    'display': "flex",
                    'flex-direction': "column",
                    'align-items': "center",
                    'justify-content': 'center',
                    'background-color': "green"
                }
            }

        }
    ]


    // console.log(serverObj[0])
    return (
        <div className='main-container'>
            {serverObj.map((item, index) => {
                return (
                    <div key={index} style={item.params.style}>
                        {/* {item.params.children ? item.params.children : " "} */}
                        {item.params.text ? item.params.text : ''}
                        {/* {date ? item.params.date : null} */}
                        {item.params.api ? data.articles.map((article, index) => {
                            return (
                                <div className="">
                                    <div key={index}>
                                        {article.title}
                                        {article.description}
                                        <img src={article.urlToImage} alt='headline pic'></img>
                                    </div>
                                </div>
                            )
                        }) : null}
                    </div>
                );
            })}
        </div>

    )

}

export default Handler;

