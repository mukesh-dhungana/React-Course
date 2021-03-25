import { connect } from "react-redux";
import Home from "../components/Home";
import { Count } from "../Services/Action/action";

const MapDispatchToProps = dispatch => ({
  reactCount: data => dispatch(Count(data)),
});
const mapStateToProps = state => ({
  countData1: state.Count,
});

export default connect(mapStateToProps, MapDispatchToProps)(Home);
