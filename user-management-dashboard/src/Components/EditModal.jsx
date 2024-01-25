import React, { useRef, useState } from 'react'
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure, FormControl, FormLabel,
    FormErrorMessage, FormHelperText, Select, useToast, Input, InputGroup, InputRightElement, IconButton
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import style from '../CSS/DashboardComponent.module.css'

export const EditModal = ({ id, firstName, lastName, email, department }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [editUserFirstName, setEditUserFirstName] = useState(false);
    const [editUserLastName, setEditUserLastName] = useState(true)
    const [editUserEmail, setEditUserEmail] = useState(true)
    const [editUserDepartment, setEditUserDepartment] = useState(true)

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
                                        <Input type='text' placeholder='First Name' value={!editFirstName ? firstName : ''}
                                            // disabled = {editFirstName}
                                            // onFocus={() => !editFirstName && firstNameRef.current.focus()}
                                            isDisabled={!editFirstName}
                                            onChange={(e) => {
                                             
                                            }} />
                                    </FormControl>

                                    <InputRightElement width="4.5rem">
                                        <IconButton
                                            variant={'none'}
                                            h="1.75rem"
                                            size="sm"
                                            icon={<EditIcon />}
                                            onClick={() => { setEditFirstName(true) }}
                                        />
                                    </InputRightElement>
                                </InputGroup>


                                <InputGroup>
                                    <FormControl mt={1}>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type='text' placeholder='Last Name' value={lastName}
                                            disabled
                                            onChange={(e) => {

                                            }} />
                                    </FormControl>

                                    <InputRightElement width="4.5rem">
                                        <IconButton
                                            variant={'none'}
                                            h="1.75rem"
                                            size="sm"
                                            icon={<EditIcon />}
                                        />
                                    </InputRightElement>
                                </InputGroup>


                                <InputGroup>
                                    <FormControl mt={1}>
                                        <FormLabel>Email</FormLabel>
                                        <Input type='text' placeholder='Email' value={email}
                                            disabled
                                            onChange={(e) => {

                                            }} />
                                    </FormControl>

                                    <InputRightElement width="4.5rem">
                                        <IconButton
                                            variant={'none'}
                                            h="1.75rem"
                                            size="sm"
                                            icon={<EditIcon />}
                                        />
                                    </InputRightElement>

                                </InputGroup>


                                <InputGroup>
                                    <FormControl mt={1}>
                                        <FormLabel>Category</FormLabel>
                                        <Select placeholder='Select Department' value={department}
                                            disabled
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

                                    </FormControl>



                                    <InputRightElement width="4.5rem">
                                        <IconButton
                                            variant={'none'}
                                            h="1.75rem"
                                            size="sm"
                                            icon={<EditIcon />}
                                        />
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
