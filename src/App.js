import React from 'react';
import './App.css';

export default () => (
  <div className="wrapper">
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
    <div className="container asset-builder">
      <div className="row">
        <div className="col-4">
          <ul className="asset-picker">
            <li className="asset type-video">
              <h2>Dummy asset name</h2>
              <p>
                <span className="info">4 minutes</span>
                <span className="info">Video</span>
              </p>
            </li>
            <li className="asset type-video">
              <h2>Dummy asset name</h2>
              <p>
                <span className="info">4 minutes</span>
                <span className="info">Video</span>
              </p>
            </li>
            <li className="asset type-video">
              <h2>Dummy asset name</h2>
              <p>
                <span className="info">4 minutes</span>
                <span className="info">Video</span>
              </p>
            </li>
            <li className="asset type-video">
              <h2>Dummy asset name</h2>
              <p>
                <span className="info">4 minutes</span>
                <span className="info">Video</span>
              </p>
            </li>
          </ul>
        </div>
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
      </div>
    </div>
  </div>
);
