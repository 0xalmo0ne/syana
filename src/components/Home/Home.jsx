import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'

export default function Home() {
  const testimonials = [
    { name: "محمد علي", feedback: "خدمة ممتازة جدًا! الغسالة اتصلحت في نفس اليوم وبسعر معقول.", rating: 5, image: "https://i.pravatar.cc/100?img=1" },
    { name: "سارة محمود", feedback: "الفنيين محترفين والتعامل راقي جدًا.. أنصح الجميع بخدماتكم 👌", rating: 4, image: "https://i.pravatar.cc/100?img=2" },
    { name: "أحمد مصطفى", feedback: "خدمة سريعة وجودة عالية.. تم إصلاح الثلاجة بشكل رائع.", rating: 5, image: "https://i.pravatar.cc/100?img=3" },
    { name: "منى خالد", feedback: "أحسن خدمة صيانة جربتها.. هتعامل معاكم دايمًا.", rating: 5, image: "https://i.pravatar.cc/100?img=4" },
  ]

  const renderStars = (count) => (
    [...Array(5)].map((_, i) => (
      <span key={i} className={i < count ? "text-yellow-400" : "text-gray-300"}>★</span>
    ))
  )
const services = [
    {
      title: "صيانة الغسالات",
      description: "نقدم خدمة تصليح الغسالات بسرعة ومهنية، مع ضمان جودة العمل وقطع الغيار.",
      icon: "https://img.icons8.com/ios-filled/80/0000FF/washing-machine.png"
    },
    {
      title: "صيانة التلاجات",
      description: "خدمة احترافية لجميع أنواع الثلاجات، لضمان تبريد مثالي وعمر أطول للجهاز.",
      icon: "https://img.icons8.com/ios-filled/80/0000FF/fridge.png"
    },
    {
      title: "فحص وصيانة الأجهزة المنزلية",
      description: "فحص شامل لجميع الأجهزة المنزلية وإصلاح الأعطال البسيطة قبل تفاقمها.",
      icon: "https://img.icons8.com/ios-filled/80/0000FF/maintenance.png"
    },
    {
      title: "استبدال القطع التالفة",
      description: "نوفر قطع غيار أصلية وبديلة عالية الجودة لجميع الأجهزة.",
      icon: "https://img.icons8.com/ios-filled/80/0000FF/replace.png"
    },
  ]

  return (
		<div className='font-sans'>
			{/* ======= Hero / Banner ======= */}
			<section className='bg-blue-600 text-white py-50 px-6 text-center'>
				<h1 className='text-5xl font-bold mb-4'>
					أفضل خدمات صيانة الغسالات والتلاجات
				</h1>
				<p className='text-lg mb-8'>فريق متخصص، خدمة سريعة، وأسعار مناسبة</p>
				<div>
					<ul>
						<li>
							{' '}
							<a
								href='tel:01007179051'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600text-sm'>
								<button className='bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-20 rounded-xl'>
									{' '}
									اطلب الخدمة الآن
								</button>
							</a>
						</li>
					</ul>
				</div>
			</section>

			{/* ======= خدماتنا ======= */}
			<section className='bg-gray-50 py-20 px-6'>
				<div className='container mx-auto text-center max-w-6xl'>
					<h2 className='text-4xl font-bold mb-12 text-gray-800'>خدماتنا</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
						{services.map((service, index) => (
							<div
								key={index}
								className='bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center'>
								<img
									src={service.icon}
									alt={service.title}
									className='w-20 h-20 mb-4'
								/>
								<h3 className='text-xl font-semibold mb-2 text-blue-600'>
									{service.title}
								</h3>
								<p className='text-gray-600 text-center'>
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ======= آراء العملاء ======= */}
			<section className='bg-gray-50 py-16'>
				<div className='container mx-auto px-6 text-center'>
					<h2 className='text-3xl font-bold text-gray-800 mb-10'>
						آراء عملاؤنا
					</h2>
					<Swiper
						modules={[Pagination, Autoplay]}
						spaceBetween={30}
						slidesPerView={1}
						loop={true}
						autoplay={{ delay: 4000, disableOnInteraction: false }}
						pagination={{ clickable: true }}
						breakpoints={{
							768: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}}>
						{testimonials.map((client, index) => (
							<SwiperSlide key={index}>
								<div className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-full flex flex-col items-center'>
									<img
										src={client.image}
										alt={client.name}
										className='w-20 h-20 rounded-full mb-4 border-2 border-blue-400'
									/>
									<p className='text-gray-600 italic mb-4'>
										“{client.feedback}”
									</p>
									<div className='flex mb-2'>{renderStars(client.rating)}</div>
									<h3 className='font-semibold text-blue-600'>{client.name}</h3>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			{/* ======= من نحن ======= */}
			<section className='py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100 text-center'>
				<h2 className='text-4xl font-bold mb-6'>من نحن</h2>
				<p className='text-gray-700 mb-4 text-lg'>
					في <span className='font-semibold text-blue-600'>[اسم شركتك]</span>،
					نحرص على أن تعمل أجهزتك المنزلية دائمًا بكفاءة. نحن متخصصون في{' '}
					<span className='font-semibold'>صيانة الغسالات والتلاجات</span> بسرعة
					ومهنية.
				</p>
				<p className='text-gray-700 text-lg'>
					فريقنا من الفنيين الخبراء يستخدم أحدث الأدوات لحل أي مشكلة، مع توضيح
					كل خطوة لك قبل البدء. هدفنا هو راحتك وأمانك في منزلك.
				</p>
			</section>
		</div>
	)
}
