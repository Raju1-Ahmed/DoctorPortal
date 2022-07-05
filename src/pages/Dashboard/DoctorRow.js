import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, specialty, img, email } = doctor;

    const handleDelete = email =>{
        fetch(`http://localhost:5000/doctors/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                toast.success(`doctor: ${name} is deleted.`)
                refetch()
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>

            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={ ()=> handleDelete(email)} class="btn btn-error">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;