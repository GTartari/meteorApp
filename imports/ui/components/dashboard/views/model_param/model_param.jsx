import React, { Component, PropTypes } from 'react';

// components
import ContentHeader from '../content_header.jsx';

export default class ModelParamView extends Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="statistic-content">
	            <ContentHeader name="ModelParam" description="Parametros del modelo" breadcrumb="breadcrumb" breadcrumbIcon="fa fa-dashboard"/>
	            
	            <section className="content"><span>content</span></section>
                
            </div>
            
        );
    }
}

