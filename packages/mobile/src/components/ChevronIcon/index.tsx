import React from 'react';
import { SvgCss } from 'react-native-svg';
import IconProps from './index.interface';
import theme from '../../utils/theme';

const src = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.202 10.097">
    <defs>
        <style>
            .cls-1{fill:#fff;stroke:#fff}
        </style>
    </defs>
    <path id="Path_11" d="M5.167 4.52a.644.644 0 0 0-.2-.465L1.094.178a.646.646 0 1 0-.867.956l3.382 3.385L.181 7.947a.646.646 0 0 0 .913.913l3.875-3.874a.644.644 0 0 0 .2-.465z" class="cls-1" data-name="Path 11" transform="rotate(180 2.838 4.784)"/>
</svg>
`;

const ChevronIcon: React.FC<IconProps> = (props): JSX.Element => (
  <SvgCss xml={src} {...props} />
);

ChevronIcon.defaultProps = {
  width: '10',
  height: '10',
  color: theme.white
};

export default React.memo(ChevronIcon);
