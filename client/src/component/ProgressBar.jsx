import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: ${props => props.width};

    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: 30px;
    width: 400px;
    border-radius: 20px;
    background-color: #848c8c;
  }  

  progress[value]::-webkit-progress-value {
    height: 30px;
    width: 400px;
    border-radius: 20px;
    background-color: ${props => props.color};
  }
`;

const ProgressBar = ({ value, max, color, width }) => {
  return (
    <Container color={color} width={width}>
      <progress value={value} max={max} />
    </Container>
  );
};


ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string
};


ProgressBar.defaultProps = {
  max: 100,
  color: "lightBlue",
  width: "250px"
};


export default ProgressBar;