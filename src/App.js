import logo from './logo.svg';
import './App.css';
import MainView from './views/main_view';
import { NextUIProvider } from '@nextui-org/react';
function App() {
  return (
    <NextUIProvider>
      <MainView />
  </NextUIProvider>
 
  );
}

export default App;
