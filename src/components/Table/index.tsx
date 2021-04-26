import { User } from '../../services/types'

import s from './style.module.scss'

interface Props {
    users: User[]
}

export const Table: React.FC<Props> = ({users}) => {
    return (
        <table className={s.root}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Age</th>
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