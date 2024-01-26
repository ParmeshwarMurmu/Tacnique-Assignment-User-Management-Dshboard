import React from 'react'
import { Heading, Input, Button } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  useToast
} from '@chakra-ui/react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import style from '../CSS/SideBar.module.css'
import { addUserResetAction, userDepartmentAction, userEmailAddressAction, userFirstNameAction, userLastNameAction } from '../Redux/AddUserReducer/action'
import axios from 'axios'
import { APP_URL } from '../Constants/Constants'
import { addUser } from '../Redux/AddUserReducer/action'
import { getAllUserDetails } from '../Redux/AllUserReducer/action'


export const SideBar = () => {

  const dispatch = useDispatch();
  const toast = useToast()
  

  // USESELECTOR TO DESTRUCTURE PROPERTIES FROM REDUX STORE FROM AddUserReducer

  const { firstName, lastName, email, department, isLoading, errMsg} = useSelector((store) => {
    return {
      firstName: store.AddUserReducer.firstName,
      lastName: store.AddUserReducer.lastName,
      email: store.AddUserReducer.email,
      department: store.AddUserReducer.department,
      isLoading: store.AddUserReducer.isLoading,
      errMsg: store.AddUserReducer.errMsg,
    }
  }, shallowEqual)
   


  // FUNCTION SUBMIT FORM HANDLER TO ADD USER WITH THEIR CREDENTIALS

  const submitFormHandler = () => {

    let userData = {
      firstName,
      lastName,
      email,
      department
    }

   
    // DISPATCHING ADDUSER FUNCTION WITH ARGUMENT USERDATA

    dispatch(addUser(userData))
      .then((res) => {
        toast({
          description: "User Added Successfull.",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })

        dispatch(addUserResetAction())
        dispatch(getAllUserDetails())
      })
      .catch((err)=>{
        toast({
          description:`${errMsg}`,
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      })


  }


  return (
    <div className={style.sideBarComponentContainer}>

      <div>
        <Heading as='h4' size='md' textAlign={'center'}>
          Add User
        </Heading>

        <div>
          <form onSubmit={submitFormHandler}>


            <FormControl mt={1}>
              <FormLabel>First Name</FormLabel>
              <Input type='text' placeholder='First Name' value={firstName}
                onChange={(e) => {
                  dispatch(userFirstNameAction(e.target.value))
                }} />
            </FormControl>



            <FormControl mt={1} isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input type='text' placeholder='Last Name' value={lastName}
                onChange={(e) => {
                  dispatch(userLastNameAction(e.target.value))
                }} />
            </FormControl>

            <FormControl mt={1} isRequired>
              <FormLabel>Email</FormLabel>
              <Input type='text' placeholder='Email' value={email}
                onChange={(e) => {
                  dispatch(userEmailAddressAction(e.target.value))
                }} />
            </FormControl>

            <FormControl mt={1} isRequired>
              <FormLabel>Category</FormLabel>
              <Select placeholder='Select Department' value={department}
                onChange={(e) => {
                  dispatch(userDepartmentAction(e.target.value))
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




          </form>

          <div>
            <Button
              // className={style.submitBtn}
              variant={'solid'}
              isLoading={isLoading}
              w={'full'}
              mt={4}
              onClick={submitFormHandler}
              colorScheme={isLoading ? 'blue' : 'blue'}
              isDisabled={firstName === "" || lastName === '' || department === '' || email === '' ? true : false}
            >
              Add User
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}
