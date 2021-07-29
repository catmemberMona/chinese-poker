import React from 'react'
import { Card } from '@material-ui/core';

const CustomizeCard = (props) => {
  let { cardSize, cardInner } = props
  return (
    <Card style={cardSize} raised='true'>
      <div style={cardInner}>
        <h1 style={{ flex: 1 }}>INT</h1>
      </div>
    </Card>
  );
};

let styles = {
  
};

export default CustomizeCard