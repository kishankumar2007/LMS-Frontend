import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate()
  return (
    <div style={{ animation: "slideInFromBottom 1s ease-out" }} onClick={() => navigate("/product-details")} className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/20 max-w-86 w-full hover:shadow-white/5 hover:shadow-2xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden group">
        <img
          src="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg"
          alt="Product Image"
          className="w-full h-54 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Sale Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          New
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white leading-tight hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
          Premium Wireless Headphones
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-between space-x-2">

          {/* Price Section */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-white">$299</span>
                <span className="text-lg text-gray-500 line-through">$399</span>
              </div>
              <div className="text-sm text-orange-400 font-medium">Save $100</div>
            </div>
          </div>


          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="text-gray-400 text-sm px-4">(4.8)</span>
          </div>
        </div>


        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          {/* Buy Now Button */}
          <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-95">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  )
}
