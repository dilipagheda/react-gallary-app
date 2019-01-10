import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './index.css';
import SearchPhraseForm from './SearchPhraseForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import ResourceNotFound404 from './ResourceNotFound404';
import Loader from './Loader';
import appKey from './config'

class App extends Component {

  state = {
    cats:[],
    dogs:[],
    computers:[],
    custom:[],
    shouldRedirect:false,
    lastTag:'',
    newTag:'',
    isLoading:false,
    isError:true
  }

      
  constructor(props){
    super(props);
    this.getPhotosByCustomTag = this.getPhotosByCustomTag.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.updateState = this.updateState.bind(this);
    this.searchCallBack = this.searchCallBack.bind(this);
    this.performRedirect = this.performRedirect.bind(this);

  }

  fetchData(tag){
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${appKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`;
    this.setState({isLoading:true});
    fetch(url)
        .then( response => response.json())
        .then( jsonData => {
          this.setState({isLoading:false, isError:false});
          this.updateState(tag,jsonData.photos.photo)          
        })
        .catch( error => {
          console.log(error)
          this.setState({isLoading:false, isError:true});
        });
  }

  updateState(tag,photos){
    if(tag==="cats"){
      this.setState({cats:photos});
    }else if(tag==="dogs"){
      this.setState({dogs:photos});
    }else if(tag==="computers"){
      this.setState({computers:photos});
    }else{
      this.setState({custom:photos});
    }
  }

  componentDidMount(){
    let initalTags = ["cats", "dogs", "computers"];
    initalTags.forEach(tag=>{
      this.fetchData(tag);
    });
  }

  getPhotosByCustomTag(userTag){
    if(this.state.lastTag !== userTag){
      this.setState({lastTag:userTag});
      this.fetchData(userTag);
    }
    return <PhotoContainer photos={this.state.custom} isError={this.state.isError}/>
  }

  searchCallBack(userTag){
    console.log('searchCallBack '+userTag);
    this.setState({shouldRedirect:true});
    this.setState({newTag:userTag});
  }

  performRedirect(){
    if(this.state.shouldRedirect){
      this.setState({shouldRedirect:false});
      return <Redirect to={`/search/${this.state.newTag}`} />
    }
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchPhraseForm performSearch={this.searchCallBack}/>
          <Nav />
          {this.performRedirect()}
          <Loader isLoading={this.state.isLoading} />

          <Switch>
            <Route exact path="/" render = {()=> !this.state.isLoading?<Redirect to="/search/cats" />:null} />
            <Route exact path="/search/cats" render={ () => !this.state.isLoading?<PhotoContainer photos={this.state.cats} isError={this.state.isError}/>:null  } />
            <Route exact path="/search/dogs" render={ () => !this.state.isLoading?<PhotoContainer photos={this.state.dogs} isError={this.state.isError}/>:null } />
            <Route exact path="/search/computers" render={ () => !this.state.isLoading?<PhotoContainer photos={this.state.computers} isError={this.state.isError}/>:null} />

            <Route exact path="/search/:tag/" render={({match})=>{ 
              return this.getPhotosByCustomTag(match.params.tag)}} />
            
            <Route render = {()=> <ResourceNotFound404  />} />
          </Switch>

          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
