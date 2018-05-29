import React from 'react';
import Loader from './Loader.jsx';
import Module from './Module.jsx';

import fetch_modules from './fetch_modules';


function getToken () {
  try {
    return GETVal('token');
  } catch (e) {
    return null;
  }
}

function getUrl () {
  try {
    return GETVal('url');
  } catch (e) {
    return null;
  }
}

function GETVal(key) {
  return window.location.search.substr(1).split('&').map((val) => val.split("=")).filter((val) => val[0] == key)[0][1];
}

export default class ModulesList extends React.Component {
  constructor(props) {
    super(props);
    this.loadMore = this.loadMore.bind(this);
    this.state = {
      filter: '',
      node_version: '',
      modules: [],
      ready: false,
      limit: 12
    };
  }

  getModules() {
    let self = this;
    let $tokenInput  = $('[name=wt-token]');
    let $urlInput = $('[name=wt-url]');
    let url = $urlInput.val();
    let token = $tokenInput.val();

    fetch_modules(token, url)
    .done((data) => {
      self.setState({
        ready: true,
        node_version: data.node_version,
        modules: data.modules,
        limit: 12
      });
    }).fail(() => {
      self.setState({
        modules: [],
      });
    });  
  }

  componentDidMount() {
    let $tokenInput  = $('[name=wt-token]');
    let $urlInput = $('[name=wt-url]');
    // FIXME: Instead of doing this antipatern, url and token should be props.
    let self = this;
    self.getModules();
    $urlInput.on('input', function(e) {
      self.getModules();
    })
    
    $tokenInput.on('input', function(e) {
      self.getModules();
    })
  }

  loadMore() {
    this.setState({
      limit: this.state.limit + 12
    });
  }

  render() {
    if (this.state.modules.length === 0) 
    {
      return <p className="center">Now you can use any node module on Auth0 Webtask! If you are using a private enviroment, fill the specified parameters!</p>;
    }
    if (!this.state.ready) return <Loader />;

    let filter_modules =
      this.state.modules
        .filter(module => module.name.toLowerCase().includes(this.state.filter.toLowerCase()));


    let modules = filter_modules
      .slice(0, this.state.limit)
      .map(module => <Module key={module.name + module.version} module={module} node_version={this.state.node_version} />);

    let loadMoreButton;
    if (this.state.limit < filter_modules.length) {
      loadMoreButton = <a className="center btn-floating btn-large waves-effect waves-light white" onClick={this.loadMore}><i className="material-icons webtask-red-text">expand_more</i></a>;
    }

      return <div className="section no-pad-bot">
        <div className="row white container">
          <div className="section no-pad-bot">
            <h5 className="col s12 m6 l6 webtask-red-text">Node Version: {this.state.node_version}</h5>
            <div className="right">
              <h5 className="col s12 m12 l12 webtask-red-text">Showing: {modules.length} of {filter_modules.length} modules </h5>
            </div>
          </div>
        </div>
        <div className="webtask-red no-pad-bot">
          <div className="container">
            <div className="row">{modules}</div>
          </div>
          <div className="center container button-container">
            {loadMoreButton}
          </div>
        </div>
      </div>
  }
};
