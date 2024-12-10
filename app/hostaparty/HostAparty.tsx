import OutlinedHeading from '@/components/Common/Headings/OutlinedHeading'
import JamInput from '@/components/Common/Inputs/JamInput'
import MainLayout from '@/components/Layout/MianLayout'
import React from 'react'
import {DatePicker} from "@nextui-org/date-picker";

const HostAparty = () => {
    return (
        <MainLayout >
            <section className='w-full md:px-8 lg:p-20 p-4 min-h-[600px] space-y-5 '>
                <OutlinedHeading className='text-7xl  text-center '>Let&apos;s host a house party!</OutlinedHeading>

                <form className='bg-white/5 p-5 rounded-xl border-2 border-white/10 w-full mx-auto max-w-screen-lg'>
                    <div className='space-y-1'>
                        <label htmlFor="PartyTitle" className="text-lg text-gray-4 tracking-wide">
                            Title
                        </label>
                        <JamInput  arialabelledby="PartyTitle" id="PartyTitle" name="Partytitle" placeholder="Party title" />
                    </div>
                    <div className='space-y-1'>
                        
                        <DatePicker labelPlacement="outside" variant="bordered" aria-labelledby='PartyDate' id="PartyDate" name="Partydate"  label="Birth date" />
                    </div>
                </form>

            </section>
        </MainLayout>

    )
}

export default HostAparty