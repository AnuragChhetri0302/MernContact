import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { API } from '../../services/variables'
import { Button } from '../Button/Button'
import Loading from '../Loading/Loading'
import style from './CardAdd.module.scss'


const CardAdd = () => {
    const navigate = useNavigate();

    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const handleAdd = async () => {
        if (name === "" || phone === "") {
            alert("Please Enter the details")
            return
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone })
        };
        try {
            setLoading(true);
            await fetch(`${API}`, requestOptions)
            setLoading(true);

            alert("added successfully")
            navigate(`/`)
        } catch (error) {
            setLoading(false)
        }
        setLoading(false)
    }

    return (
        <div className={style.card}>
            {loading && <Loading />}
            <h3>Add Contact</h3>
            <div className={style.data}>
                <label htmlFor="name">Name</label>
                <input id='name' type="text" value={name} onChange={(event) => { setName(event.target.value) }} />
                <label htmlFor="Phone">Phone No.</label>
                <input id='Phone' type="text" value={phone} onChange={(event) => {
                    setPhone(event.target.value)
                }
                } />
            </div>
            <Button variant='secondary' onClick={() => handleAdd()}>Submit</Button>
            <p>Return to Home ? <Link to='/'>Click here</Link></p>
        </div>
    )
}

export default CardAdd