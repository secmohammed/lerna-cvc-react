import { Item } from '../AdsSlider/index.interface';

interface ItemProps extends Item {
  name: string;
}

export default interface IProps {
  dataItems?: ItemProps[];
}
