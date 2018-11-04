import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = ({ previewReducer }) => ({
  numberOfArticles:
    previewReducer.assetList &&
    previewReducer.assetList.length > 0 &&
    previewReducer.assetList.filter(asset => asset.type === 'Article').length,
  numberOfDocuments:
    previewReducer.assetList &&
    previewReducer.assetList.length > 0 &&
    previewReducer.assetList.filter(asset => asset.type === 'Document').length,
  numberOfOnlineCourses:
    previewReducer.assetList &&
    previewReducer.assetList.length > 0 &&
    previewReducer.assetList.filter(asset => asset.type === 'Online Course')
      .length,
  numberOfVideos:
    previewReducer.assetList &&
    previewReducer.assetList.length > 0 &&
    previewReducer.assetList.filter(asset => asset.type === 'Video').length,
  totalNumberOfAssets: previewReducer.assetList
    ? previewReducer.assetList.length
    : 0
});

export default connect(mapStateToProps)(Header);
