import { User } from "../../services/types"

interface Props {
    users: User[]
}

export const Table: React.FC<Props> = ({users}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Номер</th>
                    <th>Возраст</th>
                </tr>
            </thead>
            <tbody>
                {users.map(({age, id, name, phone}) => (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{phone}</td>
                        <td>{age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}