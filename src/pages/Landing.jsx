import image from '/images/nishant_1.png'

export default function Landing() {
    return (
        // <div className='bg-[radial-gradient(circle_at_center,#311a09,#1e1e1e)] min-h-screen relative text-white flex flex-col items-center'>
        <div className='bg-[#1e1e1e] min-h-screen relative text-white flex flex-col items-center'>
            <img src={image} alt="center image" className="mx-auto max-h-[80%] absolute bottom-[10vh]" />
            <div className="absolute bottom-[10vh] left-2/3 -translate-x-2/3 w-full h-[30vh] bg-linear-to-t from-[#1e1e1e] to-transparent"></div>
        </div>
    )
}

