export const centsToCurrencyString = (cents: number) =>
  `$${(cents / 100).toFixed(2)}`;
