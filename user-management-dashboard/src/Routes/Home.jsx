import React, { useEffect, useState } from 'react'
import { store } from '../Redux/Store/Store'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getAllUserDetails } from '../Redux/AllUserReducer/action'
import { SideBar } from '../Components/SideBar'
import style from '../CSS/Home.module.css'
import { Heading, Button } from '@chakra-ui/react'
import { DashboardComponent } from '../Components/DashboardComponent'

export const Home = () => {

  const dispatch = useDispatch()
  const [pageNumber, setPageNumber] = useState(1)

  const { isLoading, userData, isError, x_total_count } = useSelector((store) => {
    return {
      isLoading: store.AllUserReducer.isLoading,
      userData: store.AllUserReducer.userData,
      isError: store.AllUserReducer.isError,
      x_total_count: store.AllUserReducer.x_total_count
    }
  }, shallowEqual)

  const [noOfBtns, setNoOfBtns] = useState(0)
  
  const buttonsArray = [];
  for (let i = 1; i <= noOfBtns; i++) {
    buttonsArray.push(i);
  }
  



  useEffect(() => {
    dispatch(getAllUserDetails(pageNumber))
    setNoOfBtns(Math.ceil(x_total_count / 6))

  }, [x_total_count, pageNumber])

  
  const paginationHandler = (pageNo)=>{
    dispatch(getAllUserDetails(pageNo))

  }


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

        <div className={style.paginationContainer}>
          {
            buttonsArray.map((btn, index) => (
              <Button key={index}
              variant={'none'}
              className={style.paginationBtns}
              isDisabled={pageNumber === btn}
              onClick={()=>{setPageNumber(btn)}}
              fontSize={'medium'}
              >
                {btn}
              </Button>
            ))
          }
        </div>
      </div>
    </div>
  )
}
