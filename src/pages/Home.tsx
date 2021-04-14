import React from 'react';
import {Button} from 'react-bootstrap'
const pages: React.FC = () => {
  return (

    <div className="container">
      <br/>
      <h1>Task Log System </h1>
      <p>
        Gerencie suas tarefas de forma simples e prática, ou crie notas, anotações e diversas possibilidades
      </p>
      <br/>
      <p>No Task Log System você pode:</p>
     
      <Button variant="dark">Adicionar Tarefa </Button>

      <p> Crie adiciona diferentes taregas, anotações e logs.</p>

      <Button variant="primary">Editar </Button>

      <p> Altere a descrição e titulo das suas tarefas, quando quiser.</p>

      <Button variant="success">Finalizar </Button>

      <p>Finalize suas tarefas que estão pedente, para que você possa ter gerencias das atividades realizadas</p>

      <Button variant="danger">Excluir </Button>

      <p>Remova as tarefas já registradas</p>
      
    </div>
  );
  


}

export default pages;