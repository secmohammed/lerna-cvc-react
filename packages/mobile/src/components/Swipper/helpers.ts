import { isArrayHasData } from '../../utils/isThereData';

export const canSlide = <T>(listPages: T[]): boolean => {
  return isArrayHasData(listPages) && listPages.length > 1;
};
