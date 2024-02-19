import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [Kannada, setKannada] = useState(0)
    const [english, setEnglish] = useState(0)
    const [Hindi, setHindi] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (Kannada < 98) {
                setKannada(prevCount => prevCount + 1);
            }
            if (english < 88) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (Hindi < 95){
                setHindi(prevCount => prevCount +1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [Kannada, english, Hindi])
    return (
        <div className="flex flex-col space-y-1 pt-6 justify-center pl-10 pr-8 ">
            <div className="flex flex-col gap-y-4 gap-x-1" >
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={Kannada} size={75} />
                        <span className='text-xs font-bold text-Snow'>Kannada</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={75} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={Hindi} size={75} />
                        <span className='text-xs font-bold text-Snow'>Hindi</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages