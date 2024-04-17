import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { store } from '../../App'
import { BACKEND_URL } from '../../helper'

function Homepage() {

  const [employee, setEmployee] = useState([])
  const [project, setProject] = useState([])
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get(`${BACKEND_URL}/employee`)
      .then(employee => {
        setEmployee(employee.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


    useEffect(() => {
        axios.get(`${BACKEND_URL}/project`)
            .then(project => {
                setProject(project.data)
            })
            .catch(err => {
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
      <div className='project-manager-homepage'>
        <div className='container'>
          <div className='row row-cols-4'>
            <div className='cols-4'>
              <div className='card d-flex flex-row align-items-center justify-content-between p-3'>
                <div className='d-flex flex-column align-items-center gap-3'>
                  <span class="material-symbols-outlined">
                    person
                  </span>
                  <h5>Employees</h5>
                </div>
                <h6>{employee?.length}</h6>
              </div>
            </div>
            <div className='cols-4'>
              <div className='card d-flex flex-row align-items-center justify-content-between p-3'>
                <div className='d-flex flex-column align-items-center gap-3'>
                  <span class="material-symbols-outlined">
                  list_alt
                  </span>
                  <h5>Projects</h5>
                </div>
                <h6>{project?.length}</h6>
              </div>
            </div>
            <div className='cols-4'>
              <div className='card d-flex flex-row align-items-center justify-content-between p-3'>
                <div className='d-flex flex-column align-items-center gap-3'>
                  <span class="material-symbols-outlined">
                    task
                  </span>
                  <h5>Tasks</h5>
                </div>
                <h6>{tasks?.length}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage