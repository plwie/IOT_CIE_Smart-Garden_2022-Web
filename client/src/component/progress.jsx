import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Container = Styled.div`
    progress {
        padding-right: 60%;
    }

    progress[value] {
        width: ${props => props.width};

        -webkit-appearance: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        height: 20px;
        width: 270px;
        border-radius: 20px;
        background-color: #848c8c;
    }

    progress[value]::-webkit-progress-value {
        height: 20px;
        border-radius: 20px;
        background-color: ${props => props.color};
    }
`;

const ProgressBar = ({ value, max, color, width}) => {
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
    width: "200px"
};

export default ProgressBar;
