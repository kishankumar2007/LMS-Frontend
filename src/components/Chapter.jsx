
import { useEffect, useState } from "react"
import { Plus, Minus, PlayCircle, Pointer } from "lucide-react"
import { useLocation } from "react-router-dom"

export default function Chapter({ chapter }) {

    const [openItems, setOpenItems] = useState({})
    const [show, setShow] = useState(false)
    const { pathname } = useLocation()
    console.log(pathname)


    useEffect(() => {
        if (!pathname.includes("/product-details")){
        setShow(true)
    }
}, [pathname])
const toggleItem = (index) => {
    setOpenItems((prev) => ({
        ...prev,
        [index]: !prev[index],
    }))
}

return (
    <section className=" text-white py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            {/* FAQ Items */}
            <div className="grid">

                {/* FAQ Item 1 */}
                <div className="group">
                    <div className="bg-white/2 backdrop-blur-sm rounded-xl border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-white/4">
                        <button
                            onClick={() => toggleItem(0)}
                            className="w-full sm:px-6 px-2 sm:py-5 py-3 text-left flex justify-between items-center"
                        >
                            <h3 className="sm:text-lg text-sm capitalize font-medium text-white group-hover:text-gray-100 transition-colors duration-300">
                                {chapter?.title}
                            </h3>
                            <div className="shrink-0 ml-4">
                                {openItems[0] ? (
                                    <Minus className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                                ) : (
                                    <Plus className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                                )}
                            </div>
                        </button>
                        {openItems[0] && (
                            <div className="px-6 pb-5 flex items-center justify-between w-full">
                                <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-4"></div>
                                <ul className="text-gray-300 leading-relaxed font-light flex flex-col px-2">
                                    {chapter?.topics?.map((topic, idx) => (
                                        <li key={idx} className=" list-disc ">{topic.title}</li>
                                    ))}

                                </ul>
                                <PlayCircle size={40} color="purple" cursor="pointer" />
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    </section>
)
}

