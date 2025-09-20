import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

export default function Clients() {
  const testimonials = [
    {
      name: "محمد علي",
      feedback: "خدمة ممتازة جدًا! الغسالة اتصلحت في نفس اليوم وبسعر معقول.",
      rating: 5,
      image: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "سارة محمود",
      feedback: "الفنيين محترفين والتعامل راقي جدًا.. أنصح الجميع بخدماتكم 👌",
      rating: 4,
      image: "https://i.pravatar.cc/100?img=2"
    },
    {
      name: "أحمد مصطفى",
      feedback: "خدمة سريعة وجودة عالية.. تم إصلاح الثلاجة بشكل رائع.",
      rating: 5,
      image: "https://i.pravatar.cc/100?img=3"
    },
    {
      name: "منى خالد",
      feedback: "أحسن خدمة صيانة جربتها.. هتعامل معاكم دايمًا.",
      rating: 5,
      image: "https://i.pravatar.cc/100?img=4"
    },
  ]

  // ⭐ دالة لعرض النجوم باستخدام SVG
  const renderStars = (count) => (
    [...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < count ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.447a1 1 0 00-1.175 0l-3.37 2.447c-.783.57-1.838-.197-1.538-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.073 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
      </svg>
    ))
  )

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-15">
          آراء عملاؤنا
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((client, index) => (
            <SwiperSlide key={index} role="listitem">
              <div className="bg-white p-6 rounded shadow hover:shadow-md transition-transform  hover:scale-105 h-full flex flex-col items-center hover:rounded-xl">
                {/* صورة العميل */}
                <img 
                  src={client.image} 
                  alt={`صورة ${client.name}`} 
                  className="w-20 h-20 rounded-full mb-4 border-2 border-blue-400"
                />
                
                {/* النص */}
                <p className="text-gray-600 italic mb-4">“{client.feedback}”</p>
                
                {/* النجوم */}
                <div className="flex mb-2">
                  {renderStars(client.rating)}
                </div>
                
                {/* الاسم */}
                <h3 className="font-semibold text-blue-600">{client.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
