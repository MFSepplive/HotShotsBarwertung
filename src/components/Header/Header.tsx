import { FunctionComponent, PropsWithChildren } from 'react'
import Image from 'next/image'

export const Header: FunctionComponent = () => {
    return (
        <div className="container max-w-screen-md mx-auto p-6 flex gap-10 border-b-2 border-gray-950 items-center">
            <Image src="/hotShotsLogo.jpeg" alt="Vercel Logo" width={75} height={75} priority />
            <h1 className="sm:text-xl md:text-4xl font-bold">HotShots Barwertung</h1>
        </div>
    )
}
