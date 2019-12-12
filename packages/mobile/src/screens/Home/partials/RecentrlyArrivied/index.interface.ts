import { Item } from '../AdsSlider/index.interface';

export interface ItemPropsT extends Item {
  name: string;
  price: string | number;
}

export default interface IProps {
  dataItems?: ItemPropsT[];
  title?: string;
}
