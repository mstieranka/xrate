import { mdiSwapHorizontalCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useAtom, useAtomValue } from 'jotai';
import {
  baseAmountAtom,
  baseCurrencyAtom,
  currenciesAtom,
  targetAmountAtom,
  targetCurrencyAtom,
  useSwapCurrencies,
} from '/src/model/currency';
import { CurrencyInput } from './CurrencyInput';
import { useState } from 'react';

export const CurrencyConverter = () => {
  const currencies = useAtomValue(currenciesAtom);

  const [baseCurrency, setBaseCurrency] = useAtom(baseCurrencyAtom);
  const [targetCurrency, setTargetCurrency] = useAtom(targetCurrencyAtom);

  const [baseAmount, setBaseAmount] = useAtom(baseAmountAtom);
  const [targetAmount, setTargetAmount] = useAtom(targetAmountAtom);

  const swapCurrencies = useSwapCurrencies();

  const [iconSpinSpeed, setIconSpinSpeed] = useState<number>(0);
  const onSwapClick = () => {
    setIconSpinSpeed(0.3);
    setTimeout(() => setIconSpinSpeed(0), 150);
    swapCurrencies();
  };

  return (
    <div className='flex flex-col md:flex-row gap-8 justify-center items-center mt-16'>
      <CurrencyInput
        currencies={currencies}
        inputCurrency={baseCurrency}
        onCurrencyChange={setBaseCurrency}
        inputValue={baseAmount}
        onValueChange={setBaseAmount}
      />
      <button
        className='hover:bg-slate-300 hover:dark:bg-slate-700 p-1 rounded cursor-pointer'
        onClick={onSwapClick}
      >
        <Icon
          path={mdiSwapHorizontalCircleOutline}
          size='2rem'
          spin={iconSpinSpeed}
        />
      </button>
      <CurrencyInput
        currencies={currencies}
        inputCurrency={targetCurrency}
        onCurrencyChange={setTargetCurrency}
        inputValue={targetAmount}
        onValueChange={setTargetAmount}
      />
    </div>
  );
};
