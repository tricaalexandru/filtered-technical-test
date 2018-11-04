import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = ({ previewReducer }) => ({
  numberOfArticles:
    previewReducer.assetList &&
    previewReducer.assetList.length > 0 &&
    previewReducer.assetList.filter(asset => asset.type === 'Article').length
      ? previewReducer.assetList.filter(asset => asset.type === 'Article')
          .length
      : null,
  numberOfDocuments:
    previewReducer.assetList &&
    previewReducer.assetList.length > 0 &&
    previewReducer.assetList.filter(asset => asset.type === 'Document').length
      ? previewReducer.assetList.filter(asset => asset.type === 'Document')
          .length
      : null,
  numberOfOnlineCourses:
    previewReducer.assetList &&
    previewReducer.assetList.length > 0 &&
    previewReducer.assetList.filter(asset => asset.type === 'Online Course')
      .length
      ? previewReducer.assetList.filter(asset => asset.type === 'Online Course')
          .length
      : null,
  numberOfVideos:
    previewReducer.assetList &&
    previewReducer.assetList.length > 0 &&
    previewReducer.assetList.filter(asset => asset.type === 'Video').length
      ? previewReducer.assetList.filter(asset => asset.type === 'Video').length
      : null,
  totalNumberOfAssets: previewReducer.assetList
    ? previewReducer.assetList.length
    : 0
});

export default connect(mapStateToProps)(Header);
