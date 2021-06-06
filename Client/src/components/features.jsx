import React from 'react';
import PropTypes from 'prop-types';

import { getFeatureIcon } from 'utilities/feature.js';

import './featureItem.css'

export default class FeatureItem extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        desc: PropTypes.string,
      };    

      constructor(props) {
        super(props);

        this.state = {};
      }      

      render() {
          const {title, desc} = this.props;

          return (
            <div className="feature-item">
                <div className="feature">
                    <div className="logoContainer">
                        <div className="icon">
                            <i className={getFeatureIcon(title)}></i>
                        </div>
                        <div className="title">
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <div className="descContainer">
                        <div className="desc">
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
          );
      }
}