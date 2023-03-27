import _ from 'lodash';

export const pnpmMonorepo = () => {
  console.log(_.defaults({ a: 1 }, { a: 3, b: 2 }));
};
