import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';
import Links from './components/Links';
import Button from './components/Button';
import style from "./components/style.module.css"
function App() {
  return (
   
      <div className={style.inner}>
      
      <div className={style.flix}>
       
      <Logo/>
      <Links/>
      <Button/>
      </div>
      
    </div>
    
  );
}

export default App;
