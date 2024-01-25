import React from 'react'
import { Heading, Input, Button } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select
} from '@chakra-ui/react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import style from '../CSS/SideBar.module.css'



export const SideBar = () => {
 
  const dispatch = useDispatch()

  const { firstName, lastName, email, department } = useSelector((store) => {
    return {
      firstName: store.AddUserReducer.firstName,
      lastName: store.AddUserReducer.lastName,
      email: store.AddUserReducer.email,
      department: store.AddUserReducer.department,
    }
  }, shallowEqual)

  const submitFormHandler = ()=>{

  }
  

  return (
    <div className={style.sideBarComponentContainer}>

      <div>
      <h1>Add User</h1>

      <div>
        <form onSubmit={submitFormHandler}>


          <FormControl mt={1}>
            <FormLabel>First Name</FormLabel>
            <Input type='text' placeholder='First Name' value={firstName}
              onChange={(e) => {
                
              }} />
          </FormControl>



          <FormControl mt={1}>
            <FormLabel>Last Name</FormLabel>
            <Input type='text' placeholder='Last Name' value={lastName}
              onChange={(e) => {

              }} />
          </FormControl>

          <FormControl mt={1}>
            <FormLabel>Email</FormLabel>
            <Input type='text' placeholder='Email' value={email}
              onChange={(e) => {

              }} />
          </FormControl>

          <FormControl mt={1}>
            <FormLabel>Category</FormLabel>
            <Select placeholder='Select Department' value={department}
              onChange={(e) => {
                // dispatch(womencategorySuccess(e.target.value))
              }}>
              <option value="HR Department">HR Department</option>
              <option value="Finance Department">Finance Department</option>
              <option value="Marketing Department">Marketing Department</option>
              <option value="Sales Department">Sales Department</option>
              <option value="IT Department">IT Department</option>
              <option value="Production Department">Production Department</option>
              <option value="Health and Safety Department">Health and Safety Department</option>

            </Select>

          </FormControl>

          <Input className={style.submitBtn}
          variant={'none'}
          type='submit'
          value={'submit'}
           />

       
        </form>
      </div>

      </div>
    </div>
  )
}
