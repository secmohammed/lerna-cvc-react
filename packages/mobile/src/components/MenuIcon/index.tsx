import React from 'react';
import { SvgXml } from 'react-native-svg';
import IconProps from './index.interface';

const src = `
<svg height="25" viewBox="0 -53 384 384" width="48" xmlns="http://www.w3.org/2000/svg" fill="#fff">
<path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
<path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
<path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
</svg>
`;

const MenuIcon: React.FC<IconProps> = ({ onPress }) => (
  <SvgXml xml={src} height="60%" width="45" onPress={onPress} />
);

export default React.memo(MenuIcon);
