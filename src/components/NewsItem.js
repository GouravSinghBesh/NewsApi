import React from 'react'

const NewsItem =(props)=> {
        // let {title,description,imageUrl,newsUrl} = this.props;
        let {title , description,imageUrl,url} = props;
        return (
            <div className='container my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" alt="loading"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={url} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
                
            </div>
        )   
}

export default NewsItem