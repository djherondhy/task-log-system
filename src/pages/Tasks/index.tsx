import React, {useState, useEffect} from 'react';
import { Badge, Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import api from '../../services/api'

import moment from 'moment'

import './index.css'

interface ITask{
  id : number;
  title: string;
  description: string;
  finished:boolean;
  created_at: Date;
  updated_at: Date;
}

const Tasks: React.FC = () => {
  //resgata os dados da API
  const [tasks, setTasks] = useState<ITask[]>([])
  const history = useHistory()

  useEffect(() => {
   
     loadTasks()
  }, [])

  async function loadTasks() {
    const response = await api.get('/tasks')
    console.log(response)
    setTasks(response.data)
  }

  function formatDate(date: Date){

    return moment(date).format("DD/MM/YYYY");
  }

  function newTask(){
    history.push('/tarefas_add')
  }


  function editTask(id: number){
    history.push(`/tarefas_add/${id}`)

  }

  function viewTask(id: number){
    history.push(`/tarefas/${id}`)

  }

  async function finishedTask(id: number){
    const response = await api.patch(`/tasks/${id}`)
    loadTasks()
  }

  async function deleteTask(id: number){
    const response = await api.delete(`/tasks/${id}`)
    loadTasks()
  }



  return (
    <div className="container">
      <div className="task-header" >
        <h1 className="mt-2">Tarefas</h1>
        <Button variant="primary" size="sm" onClick={newTask}>Adicionar Tarefa</Button>
      </div>
      <br />
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
   
      <th>Title</th>
      <th>Update Date</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      tasks.map(task => (
        <tr key={ task.id }>
       
        <td>{ task.title}</td>
        <td>{ formatDate(task.updated_at) }</td>
        <td> 
          <Badge variant= { task.finished ? "success" : "warning"}>
            { task.finished ? "Finalizada" : "Pendente"}
          </Badge>
        </td>
        <td>
          <Button size="sm" onClick={() => editTask(task.id)}> Editar </Button>{' '}
          <Button size="sm" variant="success" disabled ={task.finished} onClick={() => finishedTask(task.id)}> Finalizar </Button>{' '}
          <Button size="sm" variant="info" onClick={() => viewTask(task.id)}> Visualizar </Button>{' '}
          <Button size="sm" variant="danger" onClick={() => deleteTask(task.id)}> Excluir </Button>
        </td>
      </tr>
      ))
    }
 
  
   
  </tbody>
  </Table>

    </div>

  );
}

export default Tasks;