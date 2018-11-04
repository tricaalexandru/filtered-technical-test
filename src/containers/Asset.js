import { connect } from 'react-redux';
import Asset from '../components/Asset';
import {
  moveAssetFromSidebar,
  moveAssetToPreview,
  removeAssetFromMenu
} from '../actions';

const mapDispatchToProps = {
  moveAssetFromSidebar,
  moveAssetToPreview,
  removeAssetFromMenu
};

export default connect(
  null,
  mapDispatchToProps
)(Asset);
