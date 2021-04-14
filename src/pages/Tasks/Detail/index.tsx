import React, { useState, useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom'

import api from '../../../services/api'

import './index.css'


interface ITask {
    title: string;
    description: string;
    finished: boolean;
    created_at: Date;
    updated_at: Date;
}

interface IParamsProps {
    id: string;
}


const Detail: React.FC = () => {
    const history = useHistory()
    const { id } = useParams<IParamsProps>()
    const [task, setTask] = useState<ITask>()


    useEffect(() => {
        findTask()
    }, [id])

    async function findTask() {

        const response = await api.get(`tasks/${id}`)
        setTask(response.data)
        console.log(response)
    }

    function back() {
        history.goBack()
    }
    console.log(task?.title)

    return (
        <div className="container">
            <div className="task-header" >
                <h1 className="mt-2">Detalhes da Tarefa</h1>
                <Button variant="primary" size="sm" onClick={back}>Return</Button>

            </div>
            <br />

            <div className="card">
            <Button variant={ task?.finished ? "success" : "warning"} 
            className="card-status"size="sm">{ task?.finished ? "Finalizada" : "Pendente"} </Button>

               <div className="card-title">
                    {task?.title}
                </div>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control as="textarea" rows={20}
                     value={task?.description} 
                    name="description" 
                   />
                </Form.Group>

            </div>

        </div>

    );
}

export default Detail;