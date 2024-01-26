import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, useDisclosure, Button
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { SideBar } from './SideBar';
import style from '../CSS/Home.module.css'

export const HamBurgerModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState('left')

    return (
        <>

            <Button colorScheme='blue' variant={'none'} onClick={onOpen}>
                <HamburgerIcon />
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody className={style.hamBurgerSideBarContainer}>
                        <SideBar />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
