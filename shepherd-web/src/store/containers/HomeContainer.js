import HomeComponent from '../../Components/HomeComponent/HomeComponent';
import { connect } from 'react-redux';

import { fetchClients, addClient } from '../../actions/actions';

const actions = { fetchClients, addClient };

function mapStateToProps(state) {
  return {
    clients: state.clients,
    isLoading: state.loading
  };
}

export default connect(
  mapStateToProps,
  actions
)(HomeComponent);
