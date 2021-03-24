import { connect } from "react-redux";
import { Action } from "../Actions/Action";
import { Login } from "../components/Login";

const MapDispatchToProps = dispatch => ({
  fetchData: data => dispatch(Action(data)),
});
const MapStateToProps = state => ({
  data: state.data,
});

export default connect(MapStateToProps, MapDispatchToProps)(Login);
