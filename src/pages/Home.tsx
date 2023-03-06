
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button/Button'
import Search from '../components/Search/Search'
import Table from '../components/Table/Table'

export const Home = () => {
    const navigate = useNavigate();
    const [searchValue, setsearchValue] = useState<string>("")
    const handleChangeParentValue = (newValue: string) => {
        setsearchValue(newValue);
    };

    return (
        <div>
            <div style={{
                margin: "0px 20px", display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>
                <Search onChangeParentValue={handleChangeParentValue} />
                <Button variant='primary' onClick={() => { navigate("/add") }}>Add New Contact</Button>
            </div>
            <Table searchValue={searchValue} />
        </div>
    )
}
