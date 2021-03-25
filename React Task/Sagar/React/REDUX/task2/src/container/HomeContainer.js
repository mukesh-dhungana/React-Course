import Home from "../components/Home";
import { connect } from "react-redux";
import { showData } from "../services/actions/action";

const mapStateToProps = (state) => ({
  data: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  showDataHandler: (data) => dispatch(showData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
