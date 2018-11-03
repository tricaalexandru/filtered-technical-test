import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = ({ sidebarReducer }) => ({
  assetList: sidebarReducer.assetList
});

export default connect(mapStateToProps)(Sidebar);
