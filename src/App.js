import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/ProjectManager/Login';
import Register from './components/ProjectManager/Register';
import Homepage from './components/ProjectManager/Homepage';
import { createContext, useEffect, useState } from 'react';
import Profile from './components/ProjectManager/Profile';
import AddEmployee from './components/ProjectManager/AddEmployee';
import AddCategory from './components/ProjectManager/AddCategory';
import Category from './components/ProjectManager/Category'
import CategoryUpdate from './components/ProjectManager/CategoryUpdate';
import AddDesignation from './components/ProjectManager/AddDesignation';
import Designation from './components/ProjectManager/Designation';
import UpdateDesignation from './components/ProjectManager/UpdateDesignation';
import Employee from './components/ProjectManager/Employee';
import UpdateEmployee from './components/ProjectManager/UpdateEmployee';
import ViewEmployee from './components/ProjectManager/ViewEmployee';
import AddTasks from './components/ProjectManager/AddTasks';
import Tasks from './components/ProjectManager/Tasks';
import AddResources from './components/ProjectManager/AddResources';
import Resource from './components/ProjectManager/Resource';
import AddProjects from './components/ProjectManager/AddProjects';
import Projects from './components/ProjectManager/Projects';
import EmployeeLogin from './components/Employee/EmployeeLogin';
import EmployeeHomePage from './components/Employee/EmployeeHomePage';
import EmployeeProfile from './components/Employee/EmployeeProfile';
import EmployeeTasks from './components/Employee/EmployeeTasks';
import EmployeeTasksUpdate from './components/Employee/EmployeeTasksUpdate';
import EmployeeLeave from './components/Employee/EmployeeLeave';
import EmployeeLeaveTrans from './components/Employee/EmployeeLeaveTrans';
import LeaveTrans from './components/ProjectManager/LeaveTrans';
import UpdateEmployeeLeave from './components/ProjectManager/UpdateEmployeeLeave';

export const store = createContext()

function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem("userinfo")
    if (data) {
      const parseData = JSON.parse(data)
      setToken(parseData.token)
    }
  }, [])

  useEffect(() => {
    const data = localStorage.getItem("employeeinfo")
    if (data) {
      const parseData = JSON.parse(data)
      setToken(parseData.token)
    }
  }, [])

  return (
    <>
      <store.Provider value={[token, setToken]}>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='*' element={<NotFound />} />


            {/* Project Manager Routes */}
            {/* <Route path='/homepage' element={<Homepage />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/addemployee' element={<AddEmployee />} />
            <Route path='/employee' element={<Employee />} />
            <Route path='/updateemployee/:id' element={<UpdateEmployee />} />
            <Route path='/viewemployee/:id' element={<ViewEmployee />} />
            <Route path='/addcategory' element={<AddCategory />} />
            <Route path='/category' element={<Category />} />
            <Route path='/updatecategory/:id' element={<CategoryUpdate />} />
            <Route path='/adddesignation' element={<AddDesignation />} />
            <Route path='/designation' element={<Designation />} />
            <Route path='/updatedesignation/:id' element={<UpdateDesignation />} />
            <Route path='/addtasks' element={<AddTasks />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/addresources' element={<AddResources />} />
            <Route path='/resources' element={<Resource />} />
            <Route path='/addproject' element={<AddProjects />} />
            <Route path='/project' element={<Projects />} />
            <Route path='/leavetrans' element={<LeaveTrans />} />
            <Route path='/updateempleave/:id' element={<UpdateEmployeeLeave />} />

            { /* Employee Routes */}

            <Route path='/employeelogin' element={<EmployeeLogin />} />
            <Route path='/employeehomepage' element={<EmployeeHomePage />} />
            <Route path='/employeeprofile' element={<EmployeeProfile />} />
            <Route path='/employeetasks' element={<EmployeeTasks />} />
            <Route path='/emptasksupdate/:id' element={<EmployeeTasksUpdate />} />
            <Route path='/employeeleave' element={<EmployeeLeave />} />
            <Route path='/employeetrans' element={<EmployeeLeaveTrans />} />

          </Routes>
        </BrowserRouter>

      </store.Provider>
    </>
  );
}

export default App;
