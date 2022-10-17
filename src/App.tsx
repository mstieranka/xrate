import { Provider } from 'jotai';
import { ConverterScreen } from './components/ConverterScreen';

export const App = () => {
  return (
    <Provider>
      <ConverterScreen />
    </Provider>
  );
};
