import { createBrowserRouter } from 'react-router-dom';
import { App, Background, Dapp } from './routes';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "background",
    element: <Background />,
  },
  {
    path: "dapp",
    element: <Dapp />,
  },
]);
