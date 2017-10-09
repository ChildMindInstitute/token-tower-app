const Prize = ({
  amount,
  name
}) =>
  ({
    amount,
    name
  });

export const prizeListContruct = prizes => prizes.map(p => new Prize(p));

export default Prize;
