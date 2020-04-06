import React, { Component }  from 'react';
import './App.css';

class TopLine extends Component {
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

const cssMappingOnType = {
    "Article": "asset type-article",
    "Video": "asset type-video",
    "Document": "asset type-document",
    "Online Course": "asset type-course",
    "Joke": "asset type-joke",
    "programming": "asset type-joke",
};

function updateState(new_joke) {
    let clone = new Map(this.state.data);
    clone.set(new_joke.id, new_joke);
    this.setState({data: clone});
}

class LeftColumn extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    data: new Map(),
	};
    }
    intervalID;

    async componentDidMount() {
	await this.getData();
      }

    async componentWillUnmount() {
	/*
	  stop getData() from continuing to run even
	  after unmounting this component. Notice we are calling
	  'clearTimeout()`
	*/
	clearTimeout(this.intervalID);
      }
    async getData() {
	let clone = new Map(this.state.data);

	clone.set(-1, {"id": -1, "setup": "loading...", "punchline": "loading..."});
	this.setState({data: clone});

	try {
	    const resp = await fetch("http://localhost:8080/random_joke/");
	    if (!resp.ok) {
		clone.set(-1, {"id": -1, "setup": "ERROR...", "punchline": "ERROR..."});
		throw Error(resp.statusText);
	    }

	    const joke = await resp.json();
	    console.log("STUB:", joke);
	    clone.delete(-1);
	    clone.set(joke.id, joke);

	} catch (error) {
	    clone.set(-1, {"id": -1, "setup": "ERROR...", "punchline": "ERROR..."});
	    console.log(error);
	}
	this.setState({data: clone});
	this.intervalID = setTimeout(this.getData.bind(this), 5000);
    }

    handleDuration(item) {
	if ("durationType" in item) {
	    return (<span className="info">{item.duration} minutes</span>);
	}
	return (<span className="info">{item.duration}</span>);
    }

    render() {
	let { data } = this.state;

	return (
		<div className="col-4">
		<ul className="asset-picker">

		{[...data].map((val, index) => {
		    const item = val[1];
		    return (
			    <li key={index} className={cssMappingOnType[item.type]} onClick={(e) => updateState(item)} >
			    <h2>{item.id}</h2>
			    <p>
			    <span className="info">{item.setup}</span>
			    <span className="info">{item.punchline}</span>
			    </p>
			    </li>
		    )})}

	    </ul>
		</div>
	);
    }
}

class RightColumn extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    data: new Map(),
	};
	updateState = updateState.bind(this);
    }

    render() {
	return (
		<div className="col-8">
		<h2>Learning Assets Preview</h2>
		<ul className="asset-preview">
		{[...this.state.data].map((val, index) => {
		    const item = val[1];
		    return (
			    <li key={index} className={cssMappingOnType[item.type]}>
			    <h2>{item.id}</h2>
			    <p>
			    <span className="info">{item.setup}</span>
			    <span className="info">{item.punchline}</span>
			    </p>
			    <button className="remove-asset">x</button>
			    </li>);
		})}
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
