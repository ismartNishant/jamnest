import { Button } from '@nextui-org/button'
import React from 'react'
import { FaRegPenToSquare } from 'react-icons/fa6'

const EditProfile = () => {
    return (
        <Button
            isIconOnly
            aria-label="Edit Profile"
            className="absolute top-0 -right-4 lg:-right-2 w-8 h-10 lg:w-12 lg:h-12 bg-white text-black hover:bg-black hover:text-white"
        >
            <FaRegPenToSquare className="text-xl lg:text-2xl" />
        </Button>
    )
}

export default EditProfile