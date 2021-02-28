import React, { useEffect, useContext } from 'react';
import Context from './services/context/Context';
import Header from './pages/Header';
import ProjectList from './pages/ProjectList';
import Contact from './pages/Contact';
import Home from './pages/Home';
import AboutRead from './pages/About';
import Footer from './pages/Footer';
import './style/App.css';
import { getUser, getRepos } from './services/api';

function App() {
  const {setUser,  setRepos} = useContext(Context);

  const respostaUser = async () => {
    const resultUser = await getUser();
    await setUser(resultUser);
  }

  const respostaRepos = async () => {
    const resultRepos = await getRepos();
    await setRepos(resultRepos);
  }

  useEffect(() => {
    respostaUser();
    respostaRepos();
  },[]);


  return (
    <div>
      <Header />
      <Home />
      <ProjectList />
      <AboutRead />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
