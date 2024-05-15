import { useEffect } from 'react';

const stateKey = '@web-playground/state';

function onMessage(event: MessageEvent) {
  const request = event.data;
  if (request.action === undefined) {
    return;
  }

  console.log(event);
  if (request.action === 'getState') {
    const value = window.localStorage.getItem(stateKey);
    console.log(value);
  } else if (request.action === 'setState') {
    window.localStorage.setItem(stateKey, request.value);
  }
}

export function Background() {
  useEffect(() => {
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);
  return (
    <div>Background</div>
  )
}
