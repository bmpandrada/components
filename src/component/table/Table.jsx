import React from 'react'
import { data } from './data'
import './table.css'

const Table = () => {
  return (
   <div className="container container-table">
     <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Work</th>
            <th>Company</th>
        </tr>
        </thead>
        <tbody>
        {data.map(({id, name, age, work, company})=>{ 
    return<tr key={id}>
            <th>{name}</th> 
            <td>{age}</td>
            <td>{work}</td>
            <td>{company}</td>
        </tr> 
        })}
        </tbody>
    </table>
   </div>
  )
}

export default Table