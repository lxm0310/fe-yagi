import { useState } from 'react'
import { Star, Heart,MapPin } from 'lucide-react'

interface Hotel {
  id: number
  name: string
  location: string
  rating: number
  reviews: number
  price: number
  image: string
}

const hotels: Hotel[] = Array(8).fill(null).map((_, index) => ({
  id: index + 1,
  name: 'Grand Resort Sapa-Lao Cai',
  location: 'Sapa-Lao Cai',
  rating: 4.0,
  reviews: 1,
  price: 1000000,
  image:  "src/upload/dt1.png",
}))

const Danhmucsp = () =>  {
  const [favoriteHotels, setFavoriteHotels] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavoriteHotels(prev => 
      prev.includes(id) ? prev.filter(hotelId => hotelId !== id) : [...prev, id]
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 pl-[410px] ">Kết quả tìm kiếm : 20 khách sạn</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full ml-10 md:w-1/4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-2">Hạng sao</h2>
            {[5, 4, 3, 2, 1].map(stars => (
              <div key={stars} className="flex items-center mb-2">
                 <input type="checkbox" className="mr-2" />
                {Array(stars).fill(null).map((_, i) => (
                    
                  <Star key={i} className="w-4 mx-1 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            ))}
            <h2 className="font-bold mt-4 mb-2">Đánh giá</h2>
            {[5, 4, 3, 2, 1].map(stars => (
             <div key={stars} className="flex items-center mb-2">
             <input type="checkbox" className="mr-2" />
            {Array(stars).fill(null).map((_, i) => (
                
              <Star key={i} className="w-4 mx-1 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
            ))}
            <h2 className="font-bold mt-4 mb-2">Ngân sách</h2>
            {['Dưới 2.000.000Đ', '2.000.000 - 4.000.000', '4.000.000 - 6.000.000', '6.000.000 - 8.000.000', '8.000.000 - 10.000.000'].map(range => (
              <div key={range} className="mb-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {range}
                </label>
              </div>
            ))}
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Tìm kiếm</button>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="bg-white p-4 rounded shadow  mb-4">
            <div className="flex justify-between">
              <button className="px-4 py-2 border-b-2 border-blue-500">Phổ biến</button>
              <button className="px-4 py-2">Mới nhất</button>
              <button className="px-4 py-2">Yêu thích</button>
              <button className="px-4 py-2">Giá tăng dần</button>
              <button className="px-4 py-2">Giá giảm dần</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {hotels.map(hotel => (
              <div key={hotel.id} className="bg-white  rounded shadow">
                <div className="relative">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover rounded-t" />
                  <button 
                    className="absolute top-2 right-2 bg-white p-1 rounded-full"
                    onClick={() => toggleFavorite(hotel.id)}
                  >
                    <Heart className={`w-5 h-5 ${favoriteHotels.includes(hotel.id) ? 'text-red-500 fill-current' : 'text-gray-500'}`} />
                  </button>
                  <div className="absolute bottom-2 left-2 bg-white rounded-full py-1 px-2 flex items-center shadow-md">
                    <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                    <span>Sapa- Lào Cai</span>
                </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    {Array(5).fill(null).map((_, i) => (
                      <Star key={i} className={`w-4 mx-1 h-4 ${i < Math.floor(hotel.rating)  ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-1 text-sm text-gray-600"></span>
                  </div>
                  <h3 className="font-bold mb-2">{hotel.name}</h3>
                  <div className="  text-gray-600"><span className='bg-[#00396B96] text-white font-bold p-1 rounded'>{hotel.rating.toFixed(1)}/5.0 </span> ({hotel.reviews} review)</div>
                  <div className="flex justify-between items-center">
                    
                    <span className="font-bold text-lg"><span className='text-base text-[#716868]'>Giá : </span> {hotel.price.toLocaleString()}Đ</span>
                    <span className="text-sm text-red-500 line-through">{(hotel.price * 1.5).toLocaleString()}Đ</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Danhmucsp