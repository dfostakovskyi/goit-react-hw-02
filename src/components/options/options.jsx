import React from "react";
import PropTypes from "prop-types";

function Options({ onFeedback, onReset, showReset }) {
  return (
    <div>
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
      {showReset && <button onClick={onReset}>Reset</button>}
    </div>
  );
}

Options.propTypes = {
  onFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  showReset: PropTypes.bool.isRequired,
};

export default Options;
