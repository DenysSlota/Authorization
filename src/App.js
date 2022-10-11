import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import AppRouter from './components/AppRouter';
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from 'react';
import { Context} from './index';
import Loader from './components/Loader';

function App() {
  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <AppRouter />    
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
