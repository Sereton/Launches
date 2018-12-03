import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Article = styled.article`

position: relative;
min-height: 100%;
width: 100%;
padding: 0 0 2rem !important;
background: rgb(256, 256, 256);

&,
  & a {
    color: #000;
    
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgb(256, 256, 256);
  }

  .article-header,
  .article-wrapper {
    position: relative;
    z-index: 5;
    padding: 0 2rem;
    h1 {
      padding-top: 1.5rem;
      margin-top: 0;
    }
  }

  > img {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  section > h2 {
    margin-bottom: 0.25rem;
  }
  @media (min-width: 46em) {
    .article-header,
    .article-wrapper {
      padding-right: 25rem;
    }
    .article-header {
      h1 {
        padding-top: 3.5rem;
      }
    }
  }
  @media (min-width: 62em) {
    .article-header {
      h1 {
        padding-top: 6.5rem;
      }
    }
  }




`



class Home extends React.Component {

state = {
    data:[]
}

componentDidMount(){
    fetch("https://api.spacexdata.com/v2/info")
    .then(res=> res.json())
    .then(data=>this.setState({data}))
    .catch(err=>console.log(err))


}

render() {
    return (
      <div className="component-wrapper component-home">
        <Helmet>
          <title>SpaceX Info</title>
          <meta
            name="description"
            content="A small React project using the SpaceX api"
          />
        </Helmet>

        <Article>
          <img
            src="../static/img/home.jpg"
            srcSet="images/satellite-sm.jpg 400w, images/satellite-md.jpg 800w, images/satellite-lg.jpg 1200w, images/satellite-xl.jpg 2200w"
            sizes="100vw"
            alt="SpaceX satellite"
          />
          <header className="article-header">
            <h1>About SpaceX</h1>
          </header>
          <div className="article-wrapper">
            <p>{this.state.data.summary}</p>
            <section>
              <h2>Company Info</h2>
              <ul>
                {this.state.data.founded ? (
                  <li>Founded: {this.state.data.founded}</li>
                ) : (
                  ''
                )}
                {this.state.data.employees ? (
                  <li>Employees: {this.state.data.employees}</li>
                ) : (
                  ''
                )}
                {this.state.data.launch_sites ? (
                  <li>Launch Sites: {this.state.data.launch_sites}</li>
                ) : (
                  ''
                )}
                {this.state.data.test_sites ? (
                  <li>Test Sites: {this.state.data.test_sites}</li>
                ) : (
                  ''
                )}
                {this.state.data.vehicles ? (
                  <li>Vehicles: {this.state.data.vehicles}</li>
                ) : (
                  ''
                )}
              </ul>
            </section>
            <section>
              <h2>Company Leadership</h2>
              <ul>
                {this.state.data.ceo ? <li>CEO: {this.state.data.ceo}</li> : ''}
                {this.state.data.coo ? <li>COO: {this.state.data.coo}</li> : ''}
                {this.state.data.cto ? <li>CTO: {this.state.data.cto}</li> : ''}
                {this.state.data.cto_propulsion ? (
                  <li>CTO of Propulsion: {this.state.data.cto_propulsion}</li>
                ) : (
                  ''
                )}
              </ul>
            </section>
          </div>
        </Article>
      </div>
    );
  }
}






export default Home;