import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {pureAddUserCallback, UserType} from './HW3'
// import user from "../hw08/User";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

export const pureAddUser = (name:string , setError: (error:string)=>void, setName: (name:string)=>void, addUserCallback: (name: string)=>void) => {
    setName('');
    addUserCallback(name);
}

export const pureOnBlur = (name: string, setError: (error:string)=>void) => { if (name === '') {
    setError('message is not right')
}// если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => {
    if (e.key === 'Enter' && addUser.name) {
        addUser()    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // need to fix any
        const trimmedName = e.currentTarget.value
        if (trimmedName) {
            setName(trimmedName);
            error && setError('')
        } else {
            name && setName('')
            setError('name is false')
        }
    }
    const addUser = () => {
        // addUserCallback(name)
        pureAddUser(name, setError, setName, addUserCallback)
        setName('')
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (!name && e.key === 'Enter') {
            name && setName('')
            setError('name is false')

        } else {
            pureOnEnter(e, addUser)
        }


    }


    const totalUsers = users.length// need to fix
    let NName = users.map(n=>n.name);
    const lastUserName = NName[NName.length-1];// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
