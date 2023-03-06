import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserData } from '../../models/Userdata'
import { API } from '../../services/variables'
import { Button } from '../Button/Button'
import Loading from '../Loading/Loading'
import style from './CardUpdate.module.scss'


const CardUpdate = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")


    const [loading, setLoading] = useState<boolean>(false)
    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${API}/${id}`).then((response) => response.json());
            setName(response.data.name)
            setPhone(response.data.phone)
            
        } catch (error) {
            setLoading(false)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])
    const handleUpdate = async () => {
        if (name === "" || phone === "") {
            alert("Please Enter the details")
            return
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone })
        };
        try {
            setLoading(true);
            await fetch(`${API}/${id}`, requestOptions)
            setLoading(false)

            navigate(`/`)
        } catch (error) {
            setLoading(false)
        }
        setLoading(false)
    }


    return (
        <div className={style.card}>
            {loading && <Loading />}
            
            <h3>Update</h3>
            <div className={style.data}>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" value={name} onChange={(event) => { setName(event.target.value) }} />
                <label htmlFor="Phone">Phone No.</label>
                <input id='Phone' type="text" value={phone} onChange={(event) => { setPhone(event.target.value) }} />
            </div>
            <Button variant='secondary' onClick={() => handleUpdate()}>Submit</Button>
            <p>Return to Home ? <Link to='/'>Click here</Link></p>
        </div>
    )
}

export default CardUpdate