import { ChangeEvent } from 'react';
import { Currency } from '/src/model/currency';
import classNames from 'classnames';

export interface CurrencyInputProps {
  currencies: Currency[];

  inputValue: number;
  onValueChange: (value: number) => void;

  inputCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

export const CurrencyInput = (props: CurrencyInputProps) => {
  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value)) return;
    props.onValueChange(value);
  };

  const onCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const currency = e.target.value;
    if (!Object.keys(Currency).includes(currency)) return;
    props.onCurrencyChange(e.target.value as Currency);
  };

  const inputClass = `h-10 p-2 outline-none border
    border-slate-400 dark:border-transparent
    bg-slate-100 dark:bg-slate-600 text-slate-900 dark:text-slate-100
    focus:border-slate-800 focus:dark:border-slate-400`;

  return (
    <div className='flex flex-row w-full max-w-xs'>
      <input
        type='number'
        className={classNames(
          inputClass,
          'flex-grow flex-shrink pl-4 rounded-l border-r-transparent focus:border-r-current'
        )}
        size={1}
        required={false}
        min='0'
        step='any'
        value={props.inputValue}
        onChange={onValueChange}
      />
      <select
        className={classNames(
          inputClass,
          'flex-grow-0 min-w-fit flex-shrink-0 rounded-r border-l-transparent focus:border-l-current'
        )}
        value={props.inputCurrency}
        onChange={onCurrencyChange}
      >
        {props.currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
