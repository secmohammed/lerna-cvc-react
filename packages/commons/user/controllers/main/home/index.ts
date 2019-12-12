//@ts-ignore
import React from 'react';
import Api from '../../../../infrastructure/api/Api';

// interface Props {
//     children: (data: {
//         onSubmit: (values: any) => Promise<null>;
//     }) => JSX.Element | null;
// }

const api = new Api();
export default (props: any) => {
  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      return api.category().index();
    } catch (err) {
      return err;
    }
  };
  return props.children({onSubmit});
};
