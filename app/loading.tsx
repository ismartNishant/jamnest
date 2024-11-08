'use client'
import { ColorRing } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#FF4D06', '#f47e60', '#FF4D06', '#f47e60', '#FF4D06']}
            />
        </div>
    )
}

export default Loading