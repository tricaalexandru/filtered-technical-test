import { connect } from 'react-redux';
import Preview from '../components/Preview';

const mapStateToProps = ({ previewReducer }) => ({
  assetList: previewReducer.assetList
});

export default connect(mapStateToProps)(Preview);
