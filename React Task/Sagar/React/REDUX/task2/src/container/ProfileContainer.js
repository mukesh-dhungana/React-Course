import Profile from "../components/Profile";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  data: state.user,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
