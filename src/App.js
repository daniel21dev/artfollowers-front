import { useDispatch } from 'react-redux';
import { getUserAction } from './actions/authActions';
import { AppRouter } from './components/routes/AppRouter';
import { tokenAuth } from './config/tokenauth';


const token = localStorage.getItem('token');

function App() {

  const dispatch = useDispatch();
  if( token ){
    dispatch( getUserAction( token ) );
    tokenAuth( token );
  }

  return (
    <AppRouter />
  );
}

export default App;
