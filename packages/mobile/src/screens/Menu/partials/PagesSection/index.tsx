import React from 'react';
import ViewRoutes from './ViewRoutes';
import HomeIcon from '../../../../components/HomeIcon';
import SectionIcon from '../../../../components/SectionsIcon';
import FavIcon from '../../../../components/FavoriteIcon';
import CartBagIcon from '../../../../components/CartBagIcon';
import SearchIcon from '../../../../components/SearchIcon';
import MessageIcon from '../../../../components/MessageIcon';
import ProfileIcon from '../../../../components/ProfileIcon';

const mainRoutes = [
  {
    Icon: HomeIcon,
    title: 'Browse'
  },
  {
    Icon: SectionIcon,
    title: 'Sections'
  },
  {
    Icon: FavIcon,
    title: 'Favorites'
  },
  {
    Icon: CartBagIcon,
    title: 'Cart'
  },
  {
    Icon: SearchIcon,
    title: 'Search'
  }
];

const otherRoutes = [
  {
    Icon: MessageIcon,
    title: 'About Us'
  },
  {
    Icon: ProfileIcon,
    title: 'ContactUs'
  }
];

const PagesSections: React.FC<{}> = (): JSX.Element => (
  <>
    <ViewRoutes routes={mainRoutes} />
    <ViewRoutes routes={otherRoutes} />
  </>
);

export default React.memo(PagesSections);
