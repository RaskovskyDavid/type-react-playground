import { useState } from "react";

const users = [
    {name: 'David', age: 20},
    {name: 'Gustavo', age: 21},
    {name: 'Bernardo', age: 22}
];

const UserSearch: React.FC =() =>{
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name:string, age:number} | undefined>();
    const onClick = () =>{
        const foundUser = users.find((user) =>{return user.name == name});
        setUser(foundUser);
    };
    return <div>
        User Search
        <input value={name} onChange={e=> setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user?.name} - {user && user?.age}
        </div>
    </div>;
};

export default UserSearch;