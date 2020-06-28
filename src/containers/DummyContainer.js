import { connect } from "react-redux";
import Dummy from "../components/Dummy";

const mapStateToProps = (state) => {
  return {
    dummy: state.dummy,
  };
};

export default connect(mapStateToProps)(Dummy);
