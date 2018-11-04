import { connect } from 'react-redux';
import Asset from '../components/Asset';
import { moveAssetFromSidebar, moveAssetToPreview } from '../actions';

const mapDispatchToProps = { moveAssetFromSidebar, moveAssetToPreview };

export default connect(
  null,
  mapDispatchToProps
)(Asset);
