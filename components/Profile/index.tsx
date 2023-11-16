import React from 'react'
import Button from '../Button'
import {
    Container,
    UserEmail,
    UserName,
    Wrapper
} from './UserProfileElements'
import { useSession, signOut } from "next-auth/react";
import { BsPerson } from 'react-icons/bs';


const UserProfile = () => {
    const { data: session }: any = useSession();

    return (
        <Container>
            <Wrapper>
                {
                    session &&
                    <>  
                        <BsPerson className='bg-red-500 rounded-full p-10' />

                        <UserName>
                            {
                                `Hello ${session?.user?.fullName}`
                            }
                        </UserName>
                        <UserEmail>
                            Email - {session?.user?.email}
                        </UserEmail>
                        <UserEmail>
                            Account No - {session?.user?.accountNo}
                        </UserEmail>
                        <UserEmail>
                            Routing No - {session?.user?.routingNo}
                        </UserEmail>
                        <UserEmail>
                            Phone Number - {session?.user?.phonenumber}
                        </UserEmail>
                        <UserEmail>
                            ssn - {session?.user?.ssn}
                        </UserEmail>

                        <Button
                            title="Logout"
                            onClick={signOut}
                        />
                    </>
                }
            </Wrapper>
        </Container>
    )
}

export default UserProfile