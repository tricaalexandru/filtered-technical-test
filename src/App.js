import React from 'react';
import defaultData from './assets.js';
import './App.css';

class TopLine extends React.Component {
    render() {
	return (
		<div className="asset-summary">
		<div className="container">
		<div className="row">
		<div className="col-6 asset-summary-left">
		<span>4 assets</span>
		</div>
		<div className="col-6 asset-summary-right">
		2x<span className="info">Articles</span>
		1x<span className="info">Documents</span>
		1x<span className="info">Video</span>
		</div>
		</div>
		</div>
		</div>
	);
    }
}

class LeftColumn extends React.Component {
    constructor(props) {
	super(props);
	this.cssMappingOnType = {
	    "Article": "asset type-article",
	    "Video": "asset type-video",
	    "Document": "asset type-documen",
	    "Online Course": "asset type-course"
	};
    }

    handleDuration(item) {
	if ("durationType" in item) {
	    return (<span className="info">{item.duration} minutes</span>);
	}
	return (<span className="info">{item.duration}</span>);
    }

    render() {
	return (
		<div className="col-4">
		<ul className="asset-picker">

		{defaultData.map((item, index) => {
		    return (
			    <li className={this.cssMappingOnType[item.type]}>
			    <h2>{item.name}</h2>
			    <p>
			    {this.handleDuration(item)}
			    <span className="info">{item.type}</span>
			    </p>
			    </li>
		    )})}

	    </ul>
		</div>
	);
    }
}

class RightColumn extends React.Component {
    render() {
	return (
		<div className="col-8">
		<h2>Learning Assets Preview</h2>
		<ul className="asset-preview">
		<li className="asset type-article">
		<h2>Dummy asset name</h2>
		<p>
		<span className="info">4 minutes</span>
		<span className="info">Articles</span>
		</p>
		<button className="remove-asset">x</button>
		</li>
		<li className="asset type-article">
		<h2>Dummy asset name</h2>
		<p>
		<span className="info">4 minutes</span>
		<span className="info">Articles</span>
		</p>
		<button className="remove-asset">x</button>
		</li>
		<li className="asset type-document">
		<h2>Dummy asset name</h2>
		<p>
		<span className="info">4 minutes</span>
		<span className="info ">Document</span>
		</p>
		<button className="remove-asset">x</button>
		</li>
		<li className="asset type-video">
		<h2>Dummy asset name</h2>
		<p>
		<span className="info">4 minutes</span>
		<span className="info">Video</span>
		</p>
		<button className="remove-asset">x</button>
		</li>
		</ul>
		</div>
	);
    }
}

export default () => (
	<div className="wrapper">
	<TopLine />
	<div className="container asset-builder">
	<div className="row">
	<LeftColumn />
	<RightColumn />
	</div>
	</div>
	</div>
);
