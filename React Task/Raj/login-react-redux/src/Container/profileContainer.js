import { connect } from "react-redux";
import { Profile } from "../components/Profile";

const MapStateToProps = state => ({
  data: state.data,
});

export default connect(MapStateToProps, null)(Profile);
