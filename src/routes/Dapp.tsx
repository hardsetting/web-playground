import { useRef } from 'react';

const { VITE_FRONTEND_BASE_URL } = import.meta.env;
const frontendBaseUrl = VITE_FRONTEND_BASE_URL ?? window.location.origin;

export function Dapp() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sendBackgroundRequest = (action: string, value?: unknown) => {
    iframeRef.current?.contentWindow?.postMessage({ action, value }, frontendBaseUrl);
  }

  const setState = () => {
    sendBackgroundRequest('setState', Date.now().toString());
  };

  const getState = () => {
    sendBackgroundRequest('getState');
  }

  return (
    <div>
      <title>Dapp</title>
      <button onClick={setState}>Set state</button>
      <button onClick={getState}>Get state</button>
      <iframe ref={iframeRef} src={`${frontendBaseUrl}/background`} />
    </div>
  )
}
