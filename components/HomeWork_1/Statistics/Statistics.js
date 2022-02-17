import React from 'react';
import PropTypes from 'prop-types';
import {Container, Title,  List, ListItem, Label} from './StatisticsStyledComponent.js'


const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem
            key={id}
            style={{
              backgroundColor: randomRGB(),
            }}
          >
            <Label>{label}</Label>
            <Label>{percentage}%</Label>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,

  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

function randomNum() {
  return Math.floor(Math.random() * 256);
}

function randomRGB() {
  var red = randomNum();
  var green = randomNum();
  var blue = randomNum();
  return `rgb(${red},${green},${blue})`;
}

export default Statistics;
