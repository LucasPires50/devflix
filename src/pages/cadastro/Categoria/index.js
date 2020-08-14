import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {

  const [categorias, setCategorias] = useState(['Teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>
        
        <form onSubmit={function handleSubmit(infosDoEventos) {
          infosDoEventos.preventDefault();
          setCategorias([
            ...categorias,
            nomeDaCategoria
          ]);
        }}>

          {/* State */}
          <div>
            <label>
                Nome da Categoria:
                <input type="text"
                  value={nomeDaCategoria}
                  onChange={function funcaoHandlerQueErroPediu(infoDeEventos){
                    setNomeDaCategoria(infoDeEventos.target.value);
                  } }
                />
            </label>

            <label>
                Descrição:
                <textarea type="text"
                  value={nomeDaCategoria}
                  onChange={function funcaoHandlerQueErroPediu(infoDeEventos){
                    setNomeDaCategoria(infoDeEventos.target.value);
                  } }
                />
            </label>

            <label>
                Cor:
                <textarea type="color"
                  value={nomeDaCategoria}
                  onChange={function funcaoHandlerQueErroPediu(infoDeEventos){
                    setNomeDaCategoria(infoDeEventos.target.value);
                  } }
                />
            </label>
          </div>

            <button>
                Cadastrar
            </button>

        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria}
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