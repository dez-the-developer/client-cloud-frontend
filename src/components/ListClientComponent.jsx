import React, {useState, useEffect} from 'react'
import { deleteClient, listClients } from '../services/ClientService';
import imgClientCloud from '../assets/img-client-cloud.png';
import { useNavigate } from 'react-router-dom';

const ListClientComponent = () => {

    const [clients, setClients] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        getAllClients();

    }, [])

    function getAllClients() {
        listClients().then((response) => {
            setClients(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewClient() {
        navigate('/add-client');
    }

    function updateClient(id) {
        navigate(`/edit-client/${id}`);
    }

    function removeClient(id) {
        console.log(id);

        deleteClient(id).then(response => {
                getAllClients();
            }).catch(error => {
                console.error(error);
            });
    }

    
  return (
    <div className='full-page-div'>

        <div className='d-flex justify-content-center align-items-center mb-4'>
            <img src={imgClientCloud} alt="Client Cloud Logo" className='img-fluid' style={{ maxWidth: '90px', objectFit: 'contain', marginRight: '6px' }} />
            <h1 className='text-center'>Client Cloud</h1>
        </div>
        <div>
        <button className="btn btn-primary btn-sm" onClick={addNewClient}>Add Client</button>
        </div>
        <table className='table align-middle table-hover table-dark table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Client Id</th>
                    <th>Client First Name</th>
                    <th>Client Last Name</th>
                    <th>Client Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    clients.map(client =>
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.firstName}</td>
                            <td>{client.lastName}</td>
                            <td>{client.email}</td>
                            <td>
                                <button className="btn btn-info btn-sm" onClick={() => updateClient(client.id)}>Update</button>
                                <button className="btn btn-danger btn-sm" onClick={() => removeClient(client.id)}
                                style={{ marginLeft: '10px' }}>Delete</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListClientComponent