import React from 'react';
import classNames from 'classnames';

export default ({loading}) => {
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
};
