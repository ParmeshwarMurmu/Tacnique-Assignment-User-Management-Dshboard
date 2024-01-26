import React, { useEffect } from 'react'
import { store } from '../Redux/Store/Store'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getAllUserDetails } from '../Redux/AllUserReducer/action'
import { SideBar } from '../Components/SideBar'
import style from '../CSS/Home.module.css'
import { Heading } from '@chakra-ui/react'
import { DashboardComponent } from '../Components/DashboardComponent'

export const Home = () => {

  const dispatch = useDispatch()

  const { isLoading, userData, isError, x_total_count } = useSelector((store) => {
    return {
      isLoading: store.AllUserReducer.isLoading,
      userData: store.AllUserReducer.userData,
      isError: store.AllUserReducer.isError,
      x_total_count: store.AllUserReducer.x_total_count
    }
  }, shallowEqual)



  useEffect(() => {
    dispatch(getAllUserDetails())
  }, [])

  console.log("userData", userData)


  return (
    <div className={style.bodyContainer}>
      <div className={style.sideBarContainer}>
        <SideBar />
      </div>

      <div className={style.dashboardContainer}>
        <Heading as='h2' size='xl'>
          Dashboard
        </Heading>

        <div>
          <DashboardComponent />
        </div>

        <div>
          
        </div>
      </div>
    </div>
  )
}
