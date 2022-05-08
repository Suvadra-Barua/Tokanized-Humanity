import {
  ContractKitProvider
} from '@celo-tools/use-contractkit';
import '@celo-tools/use-contractkit/lib/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { MainProvider } from './providers/MainProvider';
import Routes from './routes/Routes';
import './styles/global.css';
import './styles/tailwind.css';

function App() {
  return (
      <ContractKitProvider
        dapp={{
          name: 'Tokenized Humanity',
          description: 'Make your peace with the power of charity',
          icon: 'https://tokenizedhumanity.com/favicon.ico',
          url: 'https://tokanized-humanity.vercel.app/',
        }}
      >
        <MainProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </MainProvider>
      </ContractKitProvider>
  );
}

export default App;
