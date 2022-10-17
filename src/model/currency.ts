import { Atom, atom, useAtom, WritableAtom } from 'jotai';
import { round } from '/src/utils';
import { exchangeRatesAtom } from './exchange-rates';

export enum Currency {
  CZK = 'CZK',
  EUR = 'EUR',
  USD = 'USD',
  GBP = 'GBP',
  CAD = 'CAD',
}

export const currenciesAtom = atom(Object.values(Currency));

const baseCurrencyValueAtom = atom(Currency.CZK);

const baseAmountValueAtom = atom(0);

const targetCurrencyValueAtom = atom(Currency.EUR);

const targetAmountValueAtom = atom(0);

export const baseCurrencyAtom = atom<Currency, Currency>(
  (get) => get(baseCurrencyValueAtom),
  async (_, set, newValue) => {
    set(baseCurrencyValueAtom, newValue);
    await set(targetAmountAtom);
  }
);

export const baseAmountAtom = atom<number, number>(
  (get) => get(baseAmountValueAtom),
  async (_, set, newValue) => {
    set(baseAmountValueAtom, newValue);
    await set(targetAmountAtom);
  }
);

export const targetCurrencyAtom = atom<Currency, Currency>(
  (get) => get(targetCurrencyValueAtom),
  async (_, set, newValue) => {
    set(targetCurrencyValueAtom, newValue);
    await set(targetAmountAtom);
  }
);

export const targetAmountAtom = atom<number, number | undefined, Promise<void>>(
  (get) => get(targetAmountValueAtom),
  async (get, set, newValue) => {
    const setConvertedValue = (
      amount: number,
      exchangeRate: number,
      destAtom: WritableAtom<number, number>
    ) => {
      set(
        destAtom,
        round(
          amount * exchangeRate,
          exchangeRate.toString().split('.')[1]?.length ?? 2
        )
      );
    };

    const exchangeRates = await get(exchangeRatesAtom, {
      // access to async get in setter is currently only in an unstable API
      unstable_promise: true,
    });

    const getRate = (firstAtom: Atom<Currency>, secondAtom: Atom<Currency>) =>
      exchangeRates.get(get(firstAtom))?.get(get(secondAtom)) ?? 1;

    if (newValue) {
      set(targetAmountValueAtom, newValue);
      setConvertedValue(
        newValue,
        getRate(targetCurrencyValueAtom, baseCurrencyValueAtom),
        baseAmountValueAtom
      );
      return;
    }
    setConvertedValue(
      get(baseAmountValueAtom),
      getRate(baseCurrencyValueAtom, targetCurrencyValueAtom),
      targetAmountValueAtom
    );
  }
);

export const useSwapCurrencies = () => {
  const [baseCurrency, setBaseCurrency] = useAtom(baseCurrencyValueAtom);
  const [targetCurrency, setTargetCurrency] = useAtom(targetCurrencyValueAtom);
  const [baseAmount, setBaseAmount] = useAtom(baseAmountValueAtom);
  const [targetAmount, setTargetAmount] = useAtom(targetAmountValueAtom);

  return () => {
    const _baseCurrency = baseCurrency;
    const _baseAmount = baseAmount;
    const _targetCurrency = targetCurrency;
    const _targetAmount = targetAmount;

    setBaseCurrency(_targetCurrency);
    setBaseAmount(_targetAmount);
    setTargetCurrency(_baseCurrency);
    setTargetAmount(_baseAmount);
  };
};
