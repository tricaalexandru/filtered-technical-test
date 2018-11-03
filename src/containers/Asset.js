import { connect } from 'react-redux';
import Asset from '../components/Asset';
import { moveAssetFromSidebar } from '../actions';

const mapDispatchToProps = { moveAssetFromSidebar };

export default connect(
  null,
  mapDispatchToProps
)(Asset);
