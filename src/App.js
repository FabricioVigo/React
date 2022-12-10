import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import MySelf from './pages/Myself';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProjectsList from './pages/ItemListContainer/ProjectsList';
import ItemDetailContainer from './pages/ItemListContainer/ItemDetailContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App" style={{height:'100vh'}}>
     <Layout>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/home" element={ <Home />} />
          <Route caseSensitive path="/hotels" element={ <Hotels /> } />
          <Route />

          <Route path="/hotels/me" element={ <MySelf />} />
          <Route path="/hotels/free" element={ <ProjectsList />} />
          <Route path="/hotels/free/:project" element={ <ItemDetailContainer />} />
          <Route caseSensitive path="/contact" element={ <Contact />} />
          <Route path='*' element={ <NotFound />} />
           </Routes>

           </Layout>
      


    </div>
  );
}

export default App;
