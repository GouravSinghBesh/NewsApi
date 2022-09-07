import React, { useState ,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
  // static defaultProps = {
  //   country: 'in',
  //   pagenumber : 9,
  //   category:'general'
  // }
  // static propTypes ={
  //   country : PropTypes.string,
  //   pagenumber : PropTypes.number,
  //   category : PropTypes.string
  // }
const [articles, setarticles] = useState([]);
const [page, setpage] = useState(1)
const [loading, setloading] = useState(false)
const [totalResults, settotalResults] = useState(0)
  // constructor(props){
  //   super(props);
  //   // console.log("Hello I am a constructor from News component");
  //   this.state = {
  //       articles: [],
  //       page : 1,
  //       loading : false,
  //       totalResults : 0
  //   }
  //  console.log(document.title);
  // document.title = `${this.capitalizeFirstLetter(props.category)}-NewsMonkey`;
  // }
  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const update=  async ()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagenumber}`
    setloading(true);
    // this.setState({loading : true})
    let data = await fetch(url);
    props.setProgress(50);
    let parsedata = await data.json()
    console.log(parsedata)
    props.setProgress(70);
    setarticles(parsedata.articles)
    settotalResults(parsedata.totalResults)
    setloading(false)
    // this.setState({articles : parsedata.articles,
    //   totalResults : parsedata.totalResults,
    // loading : false
    // });
    props.setProgress(100);

  }
useEffect(() => {
  update();  
  
}, [])

  // async componentDidMount(){
  //   this.update();
  // }

  // handleNextPage=async()=>{
  //   if (this.state.page<Math.ceil(this.state.totalResults/9)) {
  //   this.setState({page : this.state.page + 1})
  //   this.update();
  // }

  // }
  // handlePrevPage=async()=>{
  //   this.setState({page : this.state.page - 1})
  //   this.update();
    
  // }
 const fetchMoreData = async() => {
    setpage(page+1)
    // this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagenumber}`
    // setloading(true);
    // this.setState({loading : true})
    let data = await fetch(url);
    let parsedata = await data.json()
    setarticles(articles.concat(parsedata.articles))
    settotalResults(parsedata.totalResults)
    // this.setState({
    //   articles :this.state.articles.concat(parsedata.articles) ,
    //   totalResults : parsedata.totalResults,
    
    // });
  }
    return (

      <>
        <h1 className='text-center ' style={{marginTop: '90px'}}> Top {capitalizeFirstLetter(props.category)} -Headlines </h1>
        {loading && <Spinner/>}
      
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
        {articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title ? element.title.slice(0, 45): ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://images.news18.com/ibnlive/uploads/2022/07/modi-abe-165738037716x9.jpg"} url={element.url}/>
            </div>     
        })}
        </div>
        </div>
         </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
        <button disabled = {this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevPage}>&larr;Previous</button>
        <button disabled = {this.state.page>Math.ceil(this.state.totalResults/9)-1} type="button" className="btn btn-primary" onClick={this.handleNextPage}>Next&rarr;</button>
        </div> */}

</>



    
    )
  
}
News.defaultProps = {
  country: 'in',
  pagenumber : 9,
  category:'general'
}
News.propTypes ={
  country : PropTypes.string,
  pagenumber : PropTypes.number,
  category : PropTypes.string
}

export default News
