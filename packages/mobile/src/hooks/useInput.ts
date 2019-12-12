import { useState, useCallback } from 'react';

const useInput = (value: any) => {
  const [updatedValue, setValue] = useState(value);

  const onChangeValue = useCallback(setValue, [setValue]);

  return {};
};
