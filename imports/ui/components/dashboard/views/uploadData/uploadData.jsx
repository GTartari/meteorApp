import React, { Component, PropTypes } from 'react';

// components
import ContentHeader from '../content_header.jsx';

export default class UploadDataView extends Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="statistic-content">
	            <ContentHeader name="Statistics" description="statistics" breadcrumb="Statistics" breadcrumbIcon="fa fa-dashboard"/>
	            
	            <section className="content"><span>UploadData</span></section>
            </div>
        );
    }
}

