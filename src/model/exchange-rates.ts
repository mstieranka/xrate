import { atom } from 'jotai';
import { Currency } from './currency';

export const getExchangeRates = async () => {
  await new Promise((r) => setTimeout(r, 5000));
  return new Map([
    [
      Currency.CAD,
      new Map([
        [Currency.CAD, 1],
        [Currency.CZK, 18.2198],
        [Currency.EUR, 0.740812],
        [Currency.GBP, 0.642061],
        [Currency.USD, 0.72125],
      ]),
    ],
    [
      Currency.CZK,
      new Map([
        [Currency.CAD, 0.0548919],
        [Currency.CZK, 1],
        [Currency.EUR, 0.040664],
        [Currency.GBP, 0.0353491],
        [Currency.USD, 0.0395866],
      ]),
    ],
    [
      Currency.EUR,
      new Map([
        [Currency.CAD, 1.34984],
        [Currency.CZK, 24.5914],
        [Currency.EUR, 1],
        [Currency.GBP, 0.867312],
        [Currency.USD, 0.973278],
      ]),
    ],
    [
      Currency.GBP,
      new Map([
        [Currency.CAD, 1.5528],
        [Currency.CZK, 28.2893],
        [Currency.EUR, 1.1502],
        [Currency.GBP, 1],
        [Currency.USD, 1.12291],
      ]),
    ],
    [
      Currency.USD,
      new Map([
        [Currency.CAD, 1.38679],
        [Currency.CZK, 25.2704],
        [Currency.EUR, 1.02735],
        [Currency.GBP, 0.890772],
        [Currency.USD, 1],
      ]),
    ],
  ]);
};

export const exchangeRatesAtom = atom(getExchangeRates);
