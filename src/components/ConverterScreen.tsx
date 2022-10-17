import { Suspense } from 'react';
import { CurrencyConverter } from './CurrencyConverter';
import { ExchangeRateTable } from './ExchangeRateTable';

export const ConverterScreen = () => {
  return (
    <div className='min-h-screen px-4 py-16 w-full bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-300'>
      <h1 className='mx-auto text-center text-3xl font-semibold'>
        Currency Converter
      </h1>
      <CurrencyConverter />
      <div className='mt-16 mx-auto'>
        <Suspense fallback={<div className='text-center'>Loading...</div>}>
          <ExchangeRateTable />
        </Suspense>
      </div>
    </div>
  );
};
