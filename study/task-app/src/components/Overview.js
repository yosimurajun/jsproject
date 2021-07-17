import React from 'react';

const Overview = (props) => {

    const { tasks, handleDelete, handleUpdateForm } = props;

    return (
        <ul>
            {tasks.map((value, index) => {
                return <li className={value.text + ' ' + index} key={value.id} data-key={value.id}>
                    <p>{index + 1}. {value.text}</p>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleUpdateForm}>Update</button>
                </li>
            })}
        </ul>
    )
}





export default Overview;