import React from 'react';
import { SvgCss } from 'react-native-svg';
import theme from '../../utils/theme';

const src = `
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
    <defs>
        <style>
            .cls-1{fill:#9cd9e4;stroke:#9cd9e4}
        </style>
    </defs>
    <path id="Search" d="M20.76 19.6l-3.643-3.64a7.365 7.365 0 1 0-1.157 1.157l3.64 3.643a.818.818 0 0 0 1.16-1.16zm-9.4-2.512a5.727 5.727 0 1 1 5.727-5.727 5.727 5.727 0 0 1-5.723 5.73z" class="cls-1" transform="translate(-3.5 -3.5)"/>
</svg>
`;

const SearchIcon: React.FC<{}> = (props): JSX.Element => (
  <SvgCss xml={src} {...props} />
);

SearchIcon.defaultProps = {
  width: '25',
  height: '25',
  color: theme.lightGray
};

export default React.memo(SearchIcon);
