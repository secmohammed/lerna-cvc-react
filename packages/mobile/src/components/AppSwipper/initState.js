import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default (compState, props, updateIndex) => {
  // set the current state
  const state = compState || { width: 0, height: 0, offset: { x: 0, y: 0 } };

  const initState = {
    autoplayEnd: false,
    children: null,
    loopJump: false,
    offset: {}
  };

  // Support Optional render page
  initState.children = Array.isArray(props.children)
    ? props.children.filter(child => child)
    : props.children;

  initState.total = initState.children ? initState.children.length || 1 : 0;

  if (state.total === initState.total && !updateIndex) {
    // retain the index
    initState.index = state.index;
  } else {
    initState.index =
      initState.total > 1 ? Math.min(props.index, initState.total - 1) : 0;
  }

  // Default: horizontal

  initState.dir = props.horizontal === false ? 'y' : 'x';

  if (props.width) {
    initState.width = props.width;
  } else if (compState && compState.width) {
    initState.width = compState.width;
  } else {
    initState.width = width;
  }

  if (props.height) {
    initState.height = props.height;
  } else if (compState && compState.height) {
    initState.height = compState.height;
  } else {
    initState.height = height;
  }

  initState.offset[initState.dir] =
    initState.dir === 'y' ? height * props.index : width * props.index;

  return initState;
};
