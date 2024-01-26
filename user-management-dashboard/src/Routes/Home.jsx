import React, { useEffect, useState } from 'react'
import { store } from '../Redux/Store/Store'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getAllUserDetails } from '../Redux/AllUserReducer/action'
import { SideBar } from '../Components/SideBar'
import style from '../CSS/Home.module.css'
import { Heading, Button } from '@chakra-ui/react'
import { DashboardComponent } from '../Components/DashboardComponent'
import { Spinner } from '@chakra-ui/react'
import { HamBurgerModal } from '../Components/HamBurgerModal'



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

  }, [pageNumber, x_total_count])



  return (
    <div className={style.bodyContainer}>
      <div className={style.sideBarContainer}>
        <SideBar />
      </div>

      <div className={style.hamBurgerContainer}>
        <HamBurgerModal />
      </div>


      <div className={style.dashboardContainer}>
        <Heading as='h2' size='xl' textAlign={'center'}>
          Dashboard
        </Heading>

        {
          isLoading ? <div className={style.spinnerContainer}><Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          /></div> :

            <>
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
                      onClick={() => { setPageNumber(btn) }}
                      fontSize={'medium'}
                    >
                      {btn}
                    </Button>
                  ))
                }
              </div>
            </>
        }
      </div>


    </div>
  )
}
