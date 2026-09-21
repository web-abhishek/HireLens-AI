import { Outlet } from 'react-router-dom';
import ColorMode from './features/auth/components/ColorMode';
import Footer from './features/auth/components/Footer';
import Navbar from './features/auth/components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ColorMode />
    </>
  )
}

export default App;