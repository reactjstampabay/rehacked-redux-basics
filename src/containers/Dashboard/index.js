import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../common/actions/user';

import Header from '../../components/Header';
import LeftNavigation from '../../components/LeftNavigation';
import DashboardContent from './DashboardContent';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this._logout = this._logout.bind(this);
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  _logout() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <div>
        <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
          <Header />
          <LeftNavigation handleLogout={this._logout} user={this.props.user} />
          <DashboardContent />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(Dashboard);
