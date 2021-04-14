import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory, useParams} from 'react-router-dom'
import {  Button, Form } from 'react-bootstrap';

import api from '../../../services/api'





interface ITask {
    title: string;
    description: string;
    
}

interface IParamsProps {
    id: string;
}


const Tasks: React.FC = () => {

    const history = useHistory()
    const { id } = useParams<IParamsProps>()
    
    const [model, setModel] = useState<ITask>({
        title: '',
        description:''
    })

    useEffect(() => {
        console.log(id)
        if(id !== undefined){
            findTask(id)
        }
    }, [id])

 
    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        if(id !== undefined){
            const response = await api.put(`/tasks/${id}`,model)
        }else{
            const response = await api.post('/tasks',model)
        }
        back()
      
    }

    

    function back(){
        history.goBack()
      }
    
      async function findTask (id: string){

        const response = await api.get(`tasks/${id}`)
        console.log(response)

        setModel({
            title: response.data.title,
            description: response.data.description

        })
      }
    
    

    return (
        <div className="container">
            <div className="task-header" >
                <h1 className="mt-2">Add Tarefa</h1>
                <Button variant="primary" size="sm" onClick={back}>Return</Button>
            </div>
            <br />
            <Form onSubmit={onSubmit} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" placeholder="Titulo da Tarefa" 
                    name="title" 
                    value={model.title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={10}
                     value={model.description} 
                    name="description" 
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Salvar
                </Button>
            </Form>
</div>


  );
}

export default Tasks;