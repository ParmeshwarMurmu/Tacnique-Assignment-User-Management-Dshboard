import React, { useRef, useState } from 'react'
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, FormControl, FormLabel,
    FormErrorMessage, FormHelperText, Select, useToast, Input, InputGroup, InputRightElement, IconButton
} from '@chakra-ui/react'
import { EditIcon, CheckIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import style from '../CSS/DashboardComponent.module.css'
import { editUserEmailAddressAction, editUserFirstNameAction, editUserLastNameAction } from '../Redux/EditUserReducer/action'
import { Tooltip } from '@chakra-ui/react'


export const EditModal = ({ id, firstName, lastName, email, department }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [editUserFirstName, setEditUserFirstName] = useState(false);
    const [editUserLastName, setEditUserLastName] = useState(false)
    const [editUserEmail, setEditUserEmail] = useState(false)
    const [editUserDepartment, setEditUserDepartment] = useState(false)

    // Saves edit
    const [saveFirstname, setSaveFirstName] = useState(false);
    const [saveLastName, setSaveLastName] = useState(false);
    const [saveEmail, setSaveEmail] = useState(false)
    const [saveDepartment, setSaveDepartment] = useState(false)

    const firstNameRef = useRef(null);

    const dispatch = useDispatch();

    const { editFirstName, editLastName, editEmail, editDepartment, editIsLoding, editIsError } = useSelector((store) => {
        return {
            editFirstName: store.EditUserReducer.editFirstName,
            editLastName: store.EditUserReducer.editLastName,
            editEmail: store.EditUserReducer.editEmail,
            editDepartment: store.EditUserReducer.editDepartment,
        }
    }, shallowEqual)


    return (
        <div>
            <Button onClick={onOpen}
                variant={'none'}

                className={style.editButton}
            >Edit</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>


                        <div>
                            <form onSubmit={''}>


                                <FormControl mt={1}>
                                    <FormLabel>ID</FormLabel>
                                    <Input type='text' placeholder='First Name' value={id}
                                        disabled
                                    />
                                </FormControl>


                                <InputGroup>
                                    <FormControl mt={1}>
                                        <FormLabel>First Name</FormLabel>
                                        {editUserFirstName || saveFirstname ? (
                                            <Input
                                                type="text"
                                                placeholder="First Name"
                                                value={editFirstName}
                                                disabled={saveFirstname}
                                                onChange={(e) => { dispatch(editUserFirstNameAction(e.target.value)) }}
                                            />
                                        ) : (
                                            <Input type="text" placeholder="First Name" value={firstName} isDisabled />
                                        )}
                                    </FormControl>

                                    <InputRightElement width="4.5rem">
                                        {!editUserFirstName && <Tooltip hasArrow label='Edit' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<EditIcon />}
                                                onClick={() => { 
                                                    setEditUserFirstName(true)
                                                    setSaveFirstName(false)

                                                 }}
                                            />

                                        </Tooltip>
                                        }

                                        {editUserFirstName && <Tooltip hasArrow label='save' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<CheckIcon />}
                                                onClick={()=>{
                                                    setSaveFirstName(true)
                                                    setEditUserFirstName(false)
                                                }}
                                            />
                                        </Tooltip>
                                        }

                                        {
                                            editUserFirstName && <Tooltip hasArrow label='discard' bg='gray.300' color='black'>
                                                <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<SmallCloseIcon />}
                                                onClick={()=>{
                                                    setEditUserFirstName(false)
                                                }}
                                                 />
                                            </Tooltip>
                                        }
                                    </InputRightElement>

                                </InputGroup>


                                <InputGroup>
                                    <FormControl mt={1}>
                                        <FormLabel>Last Name</FormLabel>
                                        {editUserLastName || saveLastName ? (
                                            <Input
                                                type="text"
                                                placeholder="Last Name"
                                                value={editLastName}
                                                disabled={saveLastName}
                                                onChange={(e) => { dispatch(editUserLastNameAction(e.target.value)) }}
                                            />
                                        ) : (
                                            <Input type="text" placeholder="Last Name" value={lastName} isDisabled />
                                        )}
                                    </FormControl>

                                    <InputRightElement width="4.5rem">
                                    {!editUserLastName && <Tooltip hasArrow label='Edit' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<EditIcon />}
                                                onClick={() => { 
                                                    setEditUserLastName(true)
                                                    setSaveLastName(false)

                                                 }}
                                            />

                                        </Tooltip>
                                        }

                                        {editUserLastName && <Tooltip hasArrow label='save' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<CheckIcon />}
                                                onClick={()=>{
                                                    setSaveLastName(true)
                                                    setEditUserLastName(false)
                                                }}
                                            />
                                        </Tooltip>
                                        }

                                        {
                                            editUserLastName && <Tooltip hasArrow label='discard' bg='gray.300' color='black'>
                                                <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<SmallCloseIcon />}
                                                onClick={()=>{
                                                    setEditUserLastName(false)
                                                }}
                                                 />
                                            </Tooltip>
                                        }
                                    </InputRightElement>
                                </InputGroup>


                                <InputGroup>
                                    <FormControl mt={1}>
                                        <FormLabel>Email</FormLabel>
                                        {editUserEmail || saveEmail ? (
                                            <Input
                                                type="text"
                                                placeholder="Email"
                                                value={editEmail}
                                                disabled={saveEmail}
                                                onChange={(e) => { dispatch(editUserEmailAddressAction(e.target.value)) }}
                                            />
                                        ) : (
                                            <Input type="text" placeholder="Email" value={email} isDisabled />
                                        )}
                                    </FormControl>

                                    <InputRightElement width="4.5rem">
                                    {!editUserEmail && <Tooltip hasArrow label='Edit' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<EditIcon />}
                                                onClick={() => { 
                                                    setEditUserEmail(true)
                                                    setSaveEmail(false)

                                                 }}
                                            />

                                        </Tooltip>
                                        }

                                        {editUserEmail && <Tooltip hasArrow label='save' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<CheckIcon />}
                                                onClick={()=>{
                                                    setSaveEmail(true)
                                                    setEditUserEmail(false)
                                                }}
                                            />
                                        </Tooltip>
                                        }

                                        {
                                            editUserEmail && <Tooltip hasArrow label='discard' bg='gray.300' color='black'>
                                                <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<SmallCloseIcon />}
                                                onClick={()=>{
                                                    setEditUserEmail(false)
                                                }}
                                                 />
                                            </Tooltip>
                                        }
                                    </InputRightElement>

                                </InputGroup>


                                <InputGroup>
                                    <FormControl mt={1}>
                                        <FormLabel>Department</FormLabel>

                                        {
                                            editUserDepartment ? (
                                                <Select placeholder='Select Department' value={editDepartment}

                                                    onChange={(e) => {
                                                        // dispatch(userDepartmentAction(e.target.value))
                                                    }}>
                                                    <option value="HR Department">HR Department</option>
                                                    <option value="Finance Department">Finance Department</option>
                                                    <option value="Marketing Department">Marketing Department</option>
                                                    <option value="Sales Department">Sales Department</option>
                                                    <option value="IT Department">IT Department</option>
                                                    <option value="Production Department">Production Department</option>
                                                    <option value="Health and Safety Department">Health and Safety Department</option>

                                                </Select>
                                            )

                                                : (
                                                    <Select placeholder='Select Department' value={department}
                                                        disabled
                                                    >
                                                        <option value="HR Department">HR Department</option>
                                                        <option value="Finance Department">Finance Department</option>
                                                        <option value="Marketing Department">Marketing Department</option>
                                                        <option value="Sales Department">Sales Department</option>
                                                        <option value="IT Department">IT Department</option>
                                                        <option value="Production Department">Production Department</option>
                                                        <option value="Health and Safety Department">Health and Safety Department</option>

                                                    </Select>
                                                )
                                        }


                                    </FormControl>



                                    <InputRightElement width="4.5rem">
                                    {!editUserFirstName && <Tooltip hasArrow label='Edit' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<EditIcon />}
                                                onClick={() => { 
                                                    setEditUserFirstName(true)
                                                    setSaveFirstName(false)

                                                 }}
                                            />

                                        </Tooltip>
                                        }

                                        {editUserFirstName && <Tooltip hasArrow label='save' bg='gray.300' color='black'>
                                            <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<CheckIcon />}
                                                onClick={()=>{
                                                    setSaveFirstName(true)
                                                    setEditUserFirstName(false)
                                                }}
                                            />
                                        </Tooltip>
                                        }

                                        {
                                            editUserFirstName && <Tooltip hasArrow label='discard' bg='gray.300' color='black'>
                                                <IconButton
                                                variant={'none'}
                                                h="1.75rem"
                                                size="sm"
                                                icon={<SmallCloseIcon />}
                                                onClick={()=>{
                                                    setEditUserFirstName(false)
                                                }}
                                                 />
                                            </Tooltip>
                                        }
                                    </InputRightElement>

                                </InputGroup>




                            </form>

                            <div>
                                <Button
                                    // className={style.submitBtn}
                                    variant={'solid'}
                                    // isLoading={isLoading}
                                    w={'full'}
                                // onClick={submitFormHandler}
                                // colorScheme={isLoading ? 'blue' : 'blue'}
                                >
                                    Add User
                                </Button>
                            </div>
                        </div>


                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}
