import { useState } from 'react';

const FlyTo = (props) => {
  const [viewport, setViewport] = useState(props)
  console.log(viewport)
  setViewport(props.setViewport);
};

export default FlyTo;