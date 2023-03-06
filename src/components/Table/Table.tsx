import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserData } from '../../models/Userdata';
import { API } from '../../services/variables';
import { Button } from '../Button/Button'
import Loading from '../Loading/Loading'

import style from './Table.module.scss'
type Props = {
    searchValue: string;
};

const Table: React.FC<Props> = ({ searchValue }) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<UserData[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${API}`).then((response) => response.json());
            setUsers(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)

        }

    }
    const fetchDataSearch = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ val: searchValue })
        };
        try {
            setLoading(true)
            const response = await fetch(`${API}/search`, requestOptions).then((response) => response.json());
            setUsers(response.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)

        }

    }

    useEffect(() => {
        if (searchValue === "") {
            fetchData()
        }
        else {
            fetchDataSearch()

        }
    }, [searchValue])
    const handleDelete = async (id: String) => {
        try {
            setLoading(true)

            await fetch(`${API}/${id}`, {
                method: "DELETE"
            })
            setLoading(false)
            
            fetchData()
        } catch (error) {
            setLoading(false)
        }

    }
    return (
        <>
            {loading && <Loading />}
            {users ? <table id={style.customers}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: UserData) => {
                        return (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Button variant='primary' onClick={() => navigate(`/update/${user._id}`)}>Edit</Button>
                                    <button style={{ backgroundColor: "red", padding: "10px 20px", border: "none", color: "white", borderRadius: "5px" }} onClick={() => {
                                        const confirmBox = window.confirm(
                                            "Do you really want to delete "
                                        )
                                        if (confirmBox === true) {
                                            handleDelete(user._id)
                                        }
                                    }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> : <h4>No Contacts Found</h4>}

        </>

    )
}

export default Table