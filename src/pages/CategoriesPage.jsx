import CategoriesCard from "../components/CategoriesCard"
import { courseCategories } from "../utils/constant"

const CategoriesPage = () => {


    const stats = [{ name: "Total Courses", value: "20+" }, { name: "Categories", value: "11" }, { name: "Active Categories", value: "8" }]
    return (
        <div className='w-full min-h-screen pt-16 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900'>

            <div className='max-w-7xl mx-auto flex flex-col items-center text-center'>
                {/* Stats Section */}
                <div className='space-y-4'>

                    <h1 className='text-4xl text-zinc-200 font-black mt-4'>Course Categories</h1>

                    <p className='text-lg text-gray-400 capitalize tracking-tight max-w-4xl'>Explore 11 specialized categories of programming courses. From web development to machine learning, find the perfect learning path for your career goals.</p>

                    <div className=" flex justify-center items-center space-x-8 flex-wrap">
                        {stats.map((item, idx) => (

                            <div className='m-2 p-4 max-w-40 w-full h-20 border border-white/10 bg-white/5 rounded-lg backdrop-blur-md drop-shadow-2xl shadow-white/5 hover:scale-105 transition-all ease-in duration-100'>

                                <h1 className='text-zinc-300 text-2xl font-bold'>{item.value}</h1>
                                <span className='text-gray-400 text-xs'>
                                    {item.name}

                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Card Section */}
                <div className="w-full h-full pt-12 md:grid md:grid-cols-3  gap-2 px-2 place-items-center grid-cols-1 overflow-hidden">
                    {courseCategories.map((item, idx) => <CategoriesCard key={idx} data={item} className="mb-4" />)}

                </div>

            </div>
        </div>
    )
}

export default CategoriesPage