'use strict';

import React, {Component} from 'react';
import classNames from 'classnames';

export default class Loading extends Component {
  render() {
    var {loading} = this.props;
    var loadingClass = classNames({
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
