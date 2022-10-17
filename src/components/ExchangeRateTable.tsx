import { useAtomValue } from 'jotai';
import { baseCurrencyAtom, Currency } from '/src/model/currency';
import { exchangeRatesAtom } from '/src/model/exchange-rates';

export const ExchangeRateTable = () => {
  const exchangeRates = useAtomValue(exchangeRatesAtom);
  const baseCurrency = useAtomValue(baseCurrencyAtom);
  const baseRates = exchangeRates.get(baseCurrency);

  return (
    <>
      <h2 className='font-semibold text-lg mb-4 text-center'>
        Exchange Rates for {baseCurrency}
      </h2>
      <table className='mx-auto'>
        <thead>
          <tr>
            <th className='font-semibold'>Currency</th>
            <th className='font-semibold'>Rate</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(baseRates ?? [])
            .filter(
              ([currency]: [Currency, number]) => currency !== baseCurrency
            )
            .map(([currency, rate]: [Currency, number]) => (
              <tr key={currency}>
                <td>{currency}</td>
                <td>{rate}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <p className='text-center mt-8 text-sm'>
        Static exchange rates retrieved from{' '}
        <a
          className='hover:text-slate-400'
          href='https://xe.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          XE.com
        </a>
      </p>
    </>
  );
};
