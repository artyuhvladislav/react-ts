import RootContainer from './containers/rootContainer/RootContainer';
import UserDataProvider from './providers/UserDataProvider';
import './scss/App.scss';

const App = () => {
  return (
    <UserDataProvider>
      <RootContainer />
    </UserDataProvider>
  )
};

export default App;
