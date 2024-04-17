import React, { useContext, useEffect, useState } from 'react'
import EmployeeNavbar from '../../screens/EmployeeNavbar'
import { store } from '../../App'
import axios from 'axios'
import { BACKEND_URL } from '../../helper'

function EmployeeHomePage() {

  const [token, setToken] = useContext(store)

  const [tasks, setTasks] = useState([])

  const [employee, setEmployee] = useState(null)

  useEffect(() => {
    axios.get(`${BACKEND_URL}/employeeprofile`, {
      headers: {
        'x-token': token
      }
    })
      .then((res) => {
        setEmployee(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios.get(`${BACKEND_URL}/tasks`)
      .then(tasks => {
        setTasks(tasks.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <EmployeeNavbar />
      <div className='emp-homepage'>
        <div className='container'>
          <div className='row row-cols-4'>
            <div className='cols-4'>
              <div className='card d-flex flex-row align-items-center justify-content-between p-3'>
                <div className='d-flex flex-column align-items-center gap-3'>
                  <span class="material-symbols-outlined">
                    list_alt
                  </span>
                  <h5>Tasks</h5>
                </div>
                <p>{tasks?.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeeHomePage