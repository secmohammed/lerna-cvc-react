import React from 'react';
import { SvgCss } from 'react-native-svg';
import theme from '../../utils/theme';

const src = `
<svg xmlns="http://www.w3.org/2000/svg" width="24.475" height="19.486" viewBox="0 0 24.475 19.486">
    <defs>
        <style>
            .cls-1{fill:none;stroke:#9cd9e4;stroke-width:1.5px}
        </style>
    </defs>
    <path id="Path_114" d="M6.151 70.385a1.752 1.752 0 0 0 2.477 0l8.48-8.48a2.483 2.483 0 0 0 .553-.843 8.916 8.916 0 0 0 2.412.361c1.807-.009 2.407-.8 2.6-1.274s.337-1.452-.932-2.744l-.042-.042a10.138 10.138 0 0 0-3.226-2.051c-.239-.1-.478-.187-.712-.272v-.014a1.917 1.917 0 0 0-1.892-1.892l-5.081-.07A2.471 2.471 0 0 0 9 53.795l-8.487 8.48a1.752 1.752 0 0 0 0 2.477zM12.687 56.1a1.449 1.449 0 0 1 2.458 1.236 10.108 10.108 0 0 0 1.934 1.054c.253.1.5.2.73.276l-.028-2.042.122.052a8.826 8.826 0 0 1 2.749 1.733l.028.028c.609.623.674 1.021.623 1.143-.159.379-1.868.716-4.463-.365a10.015 10.015 0 0 1-2.046-1.138l-.061.07a1.447 1.447 0 1 1-2.046-2.047z" class="cls-1" data-name="Path 114" transform="translate(.902 -52.314)"/>
</svg>
`;

const SectionsIcon: React.FC<{}> = (props): JSX.Element => (
  <SvgCss xml={src} {...props} />
);

SectionsIcon.defaultProps = {
  width: '28',
  height: '28',
  color: theme.lightGray
};

export default React.memo(SectionsIcon);
