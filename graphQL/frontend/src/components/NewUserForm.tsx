import { useMutation } from "@apollo/client"
import { FormEvent, useState } from "react"
import { CREATE_USER, GET_USERS } from "../lib/user"


export default () => {

    const [name, setName] = useState('')
    const [createUser, { data, loading, error }] = useMutation(CREATE_USER)


    async function handleCreateUser(event: FormEvent) {
        event.preventDefault() //nao atualizar a pagina      

        if (!name) return

        await createUser(
            {
                variables:
                {
                    name
                },
                refetchQueries: [GET_USERS] // busca a lista atualizada novamente
            })
            .catch(error => console.log(error))

            setName('')
    }

    return (
        <form onSubmit={handleCreateUser}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} style={{marginRight:10}}/>
            <button type="submit">Create</button>
        </form>
    )
}