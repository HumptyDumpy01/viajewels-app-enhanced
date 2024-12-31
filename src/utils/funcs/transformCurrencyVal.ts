export function transformCurrencyVal(value: number, currency: CurrencyType): string {
  // use usd as default currency
  if (!currency) {
    currency = 'usd';
  }
  // use built-in methods to format the currency
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

type CurrencyType = 'usd' | 'eur' | 'gbp';
