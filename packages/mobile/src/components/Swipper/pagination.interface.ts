import { BaseProps } from './swipper.interface';

export default interface PaginationProps extends BaseProps {
  itemsLength: number;
  handlePress: (idx: number) => void;
  activeIndex: number;
}
