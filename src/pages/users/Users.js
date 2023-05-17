import React from 'react'
import dropdown from '../../assets/menu.svg'


const Users = ({orgName, userName, email, createdAt, PhoneNumber}) => {
  return (
    <div>
      <table>
          <tbody>
              <tr>
                  <th>ORGANIZATION <img src={dropdown} alt="menuIcon" /></th>
                  <th>USERNAME <img src={dropdown} alt="menuIcon" /></th>
                  <th>EMAIL <img src={dropdown} alt="menuIcon" /></th>
                  <th>PHONE NUMBER <img src={dropdown} alt="menuIcon" /></th>
                  <th>DATE JOINED <img src={dropdown} alt="menuIcon" /></th>
                  <th>STATUS <img src={dropdown} alt="menuIcon" /></th>
              </tr>
            
              <tr>
                  <td>{orgName} </td>
                  <td>{userName} </td>
                  <td>{email} </td>
                  <td>{PhoneNumber} </td>
                  <td>{createdAt} </td>
                </tr>
          </tbody>
      </table>
    </div>
  )
}

export default Users