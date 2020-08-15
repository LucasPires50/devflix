import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#f50000',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  //chave: descrição, nome, cor. Ela é dinamica
  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor
    })
  }

  function handleChange(infoDeEventos){
    const { getAttribute, value} = infoDeEventos.target
    setValue(
      getAttribute('name'),
      value);
  }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
        
        <form style={ {background: values.cor} } onSubmit={function handleSubmit(infosDoEventos) {
          infosDoEventos.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
        }}>

          <FormField 
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={ handleChange }
          />
          
         {/** Desafio
          <FormField 
            label="Descrição"
            type="??????"
            name="descricao"
            value={values.descricao}
            onChange={ handleChange }
          />
          */}
          <div>
            <label>
                Descrição:
                <textarea type="text"
                  value={values.descricao}
                  name="descricao"
                  onChange={ handleChange }
                />
            </label>
          </div>

          <FormField 
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={ handleChange }
          />
            <button>
                Cadastrar
            </button>

        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )  
          })}
        </ul>

        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;