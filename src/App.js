
import './App.css';
import MainView from './views/main_view';
import { NextUIProvider } from '@nextui-org/react';
function App() {
  document.body.style = 'background:var(--fondo)';
  return (
    <NextUIProvider>
      <MainView />
  </NextUIProvider>
 
  );
}

export default App;
