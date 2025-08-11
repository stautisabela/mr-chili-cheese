import { useState } from 'react'
import MainPage from './Pages/MainPage';
import YesPage from './Pages/YesPage';

function App() {
  const [showYesPage, setShowYesPage] = useState(false);
  return (
      <>
        {showYesPage ? (
          <YesPage />
        ) : (
          <MainPage onYesClick={() => setShowYesPage(true)} />
        )}
      </>
    );
}

export default App;
