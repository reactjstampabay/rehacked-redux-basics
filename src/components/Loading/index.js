'use strict';

import React, {Component} from 'react';
import classNames from 'classnames';

export default class Loading extends Component {
  render() {
    let {loading} = this.props;
    let loadingClass = classNames({
      'hide': !loading
    });
    return (
      <div className={loadingClass}>
        <div id="loading_indeterminate"
             className="mdl-progress mdl-js-progress mdl-progress__indeterminate">
        </div>
      </div>
    );
  }
}
