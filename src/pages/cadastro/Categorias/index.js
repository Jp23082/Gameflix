import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault/index';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'',
  }
  const [categorias,setCategorias] = useState([]);

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        console.log('Você tentou enviar o form né?');
        setCategorias([
          ...categorias,
          values
        ])

        setValues({valoresIniciais})
      }}>
      
      <FormField 
        type="text" 
        name="nome" 
        value={values.nome} 
        onChange={handleChange}
      />

        <div>
        <label>
          Descrição:
          <textarea
            type="text"
            value={values.descricao}
            name='descricao'
            onChange={handleChange}
          />
        </label>
        </div>

        <FormField 
          type="color" 
          name='cor' 
          value={values.nome} 
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>
      
      <ul>
        {categorias.map((categoria,indice)=>{
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      

      <Link to='/'>
        Ir para home
        </Link>
    </PageDefault>
  )
}
export default CadastroCategoria;