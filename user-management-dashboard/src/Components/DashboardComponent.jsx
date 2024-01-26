import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserDetails } from '../Redux/AllUserReducer/action'
import style from '../CSS/DashboardComponent.module.css'
import { Avatar, Button } from '@chakra-ui/react'
import { EditModal } from './EditModal'
import { DeleteModal } from './DeleteModal'


export const DashboardComponent = () => {

  const dispatch = useDispatch()
  const { userData, isLoading, isError } = useSelector((store) => {
    return {
      userData: store.AllUserReducer.userData,
      isLoading: store.AllUserReducer.isLoading,
      isError: store.AllUserReducer.isError,
    }
  })

  useEffect(() => {
    dispatch(getAllUserDetails())
  }, [])


  return (
    <div className={style.dashboardComponentContainer}>
      {
        userData.map((data) => (
          <div key={data.id} className={style.userCard}>
            <div className={style.userCardAvatar}>
              <Avatar
                size='lg'
                name={`${data.firstName} ${data.lastName}`}
                src=''
              />
            </div>
            <p><span>ID: </span> {data.id}</p>
            <p><span>First Name:</span> {data.firstName}</p>
            <p><span>Last Name:</span> {data.lastName}</p>
            <p><span>Email:</span> {data.email}</p>
            <p><span>Department:</span> {data.department}</p>

            <div className={style.ButtonEditorContainer}>

              {/* <Button
              className={style.editButton}
              variant={'none'}
              >
                Edit
              </Button> */}

              <div className={style.editModalContainer} >
                <EditModal {...data} />
              </div>

              <div className={style.editModalContainer}>
                <DeleteModal {...data}/>
              </div>

              {/* <Button
                className={style.deleteButton}
                variant={'none'}
              >
                Delete
              </Button> */}
            </div>
          </div>
        ))
      }
    </div>
  )
}
