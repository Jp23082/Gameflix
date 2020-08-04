import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadastroVideo from './pages/cadastro/videos/index';
import CadastroCategoria from './pages/cadastro/Categorias/index';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Componente que será renderizada, caso não seja passado nehuma rota no path.
function Pagina404() {
  return (
    <div>Pagina 404</div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

