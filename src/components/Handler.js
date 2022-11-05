import React, { useContext } from "react";
import './Handler.css'
import { NewsContext } from "../NewsContext";
import { REPEATABLEREAD } from "sequelize/dist/lib/table-hints";




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
                style: {
                    'display': 'flex',
                    'flex-wrap':'wrap',
                    'justify-content':'center',
                    'text-align':'center',
                    'padding-top': '2%',
                    'width': '100vw',
                    'background':'orange'
                    // 'justify-content':'center',
                    // 'align-content':'center'
                    // 'align-items':'center'

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
        <>
            {serverObj.map((item, index) => {
                return (
                    <div key={index} style={item.params.style}>
                        {item.params.text ? item.params.text : ''}
                        {/* {date ? item.params.date : null} */}
                        {item.params.api ? data.articles.map((article, index) => {
                            return (
                                // "CARD"
                                <div className='article-card' key={index}>
                                    {article.title}
                                    {article.description}
                                    <img style={{ 'height': '40%', 'width': '40%' }} src={article.urlToImage} alt='headline pic'></img>
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

