import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';

import AppFooter from '../app/app_footer.jsx';
import StatisticView from './views/statistics/statistics.jsx';
import ModelParamView from './views/model_param/model_param.jsx';
import SideBar from './sidebar/sidebar.jsx';
import AppBar from 'material-ui/AppBar';

const style = {
  appBar: {
    width: '100%',
    boxSizing: "border-box",
  },
  container: {
    width: "100%",
    content: "",
    clear: "both",
    display: "table",
    boxSizing: "border-box",
  },
  footer: {
    width: '100%',
    boxSizing: "border-box",
  },
  sideBar: {
    height: '100%',
  	width: '20%',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    overflowX: 'hidden',
    paddingTop: '60px',
    backgroundColor: '#F1F1F1',
  },
  content: {
  	width: '80%',
    float: 'right',
    boxSizing: "border-box",
  }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    getContentView() {
        let contentView = this.props.children;

        return contentView ? contentView : <StatisticView />;
    }

    componentDidMount() {
        // i just want to show browser url in '/dashboard'.
        // So, this component is repeated after index rendered <Dashboard />
        browserHistory.push('/dashboard');
    }

    render() {

        const contentMinHeight = {
            minHeight: ((window.innerHeight - 101) + 'px'),
            //position: ('relative'),
            //left: ('100px')
        };

        return (
            <div>
              <div style={style.appBar}>
                <AppBar   title="App Bar Example" />
              </div>

              <div style={style.container}>
                <div style={style.sideBar}>
                  <SideBar user={ this.props.currentUser } users={ this.props.users }/>
                </div>
                <div style={style.content}>
                  <div className="content-wrapper" style={ contentMinHeight }>
                      { this.getContentView() }
                  </div>
                </div>
              </div>

              <div style={style.footer}>
                <AppFooter />
              </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    currentUser: PropTypes.object,
    users: PropTypes.arrayOf(PropTypes.object)
};

export default createContainer(() => {
    /**
     * Add subscription here
     */
    Meteor.subscribe('users');

    return {
        currentUser: Meteor.user(),
        users: Meteor.users.find().fetch()
    };
}, Dashboard);
