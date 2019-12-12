import React from 'react';
import { SvgCss } from 'react-native-svg';
import theme from '../../utils/theme';

const src = `
<svg xmlns="http://www.w3.org/2000/svg" width="20.4" height="20.401" viewBox="0 0 20.4 20.401">
    <defs>
        <style>
            .cls-1{fill:#9cd9e4;stroke:#9cd9e4;stroke-width:.4px}
        </style>
    </defs>
    <path id="rate" d="M-1433-480v-10a9.995 9.995 0 0 1 10-10 9.995 9.995 0 0 1 10 10 9.995 9.995 0 0 1-10 10zm1.172-10v8.828h8.828a8.823 8.823 0 0 0 8.828-8.828 8.823 8.823 0 0 0-8.828-8.828 8.823 8.823 0 0 0-8.828 8.828zm8.828 4.646l-4.1 1.566.221-4.387-2.758-3.419 4.241-1.145 2.4-3.679 2.4 3.679 4.241 1.145-2.758 3.419.221 4.387zm2.843-.169l-.154-3.038 1.911-2.369-2.938-.793-1.662-2.549-1.662 2.549-2.938.793 1.911 2.369-.154 3.038 2.843-1.085z" class="cls-1" transform="translate(1433.2 500.2)"/>
</svg>
`;

const FavIcon: React.FC<{}> = (props): JSX.Element => (
  <SvgCss xml={src} {...props} />
);

FavIcon.defaultProps = {
  width: '25',
  height: '25',
  color: theme.lightGray
};

export default React.memo(FavIcon);
