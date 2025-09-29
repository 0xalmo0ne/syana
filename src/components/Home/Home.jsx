import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'

export default function Home() {
	const testimonials = [
		{
			name: 'محمد علي',
			feedback: 'خدمة ممتازة جدًا! الغسالة اتصلحت في نفس اليوم وبسعر معقول.',
			rating: 5,
			image: 'https://i.pravatar.cc/100?img=1',
		},
		{
			name: 'سارة محمود',
			feedback: 'الفنيين محترفين والتعامل راقي جدًا.. أنصح الجميع بخدماتكم 👌',
			rating: 4,
			image: 'https://i.pravatar.cc/100?img=2',
		},
		{
			name: 'أحمد مصطفى',
			feedback: 'خدمة سريعة وجودة عالية.. تم إصلاح الثلاجة بشكل رائع.',
			rating: 5,
			image: 'https://i.pravatar.cc/100?img=3',
		},
		{
			name: 'منى خالد',
			feedback: 'أحسن خدمة صيانة جربتها.. هتعامل معاكم دايمًا.',
			rating: 5,
			image: 'https://i.pravatar.cc/100?img=4',
		},
	]

	const renderStars = (count) =>
		[...Array(5)].map((_, i) => (
			<span key={i} className={i < count ? 'text-yellow-400' : 'text-gray-300'}>
				★
			</span>
		))
	const services = [
		{
			title: 'صيانة الغسالات',
			description:
				'نقدم خدمة تصليح الغسالات بسرعة ومهنية، مع ضمان جودة العمل وقطع الغيار.',
			icon: 'https://img.icons8.com/ios-filled/80/0000FF/washing-machine.png',
		},
		{
			title: 'صيانة التلاجات',
			description:
				'خدمة احترافية لجميع أنواع الثلاجات، لضمان تبريد مثالي وعمر أطول للجهاز.',
			icon: 'https://img.icons8.com/ios-filled/80/0000FF/fridge.png',
		},
		{
			title: 'فحص وصيانة الأجهزة المنزلية',
			description:
				'فحص شامل لجميع الأجهزة المنزلية وإصلاح الأعطال البسيطة قبل تفاقمها.',
			icon: 'https://img.icons8.com/ios-filled/80/0000FF/maintenance.png',
		},
		{
			title: 'استبدال القطع التالفة',
			description: 'نوفر قطع غيار أصلية وبديلة عالية الجودة لجميع الأجهزة.',
			icon: 'https://img.icons8.com/ios-filled/80/0000FF/replace.png',
		},
	]

	return (
		<div className='font-sans'>
			{/* ======= Hero / Banner ======= */}
			<motion.section
				className='bg-blue-600 text-white py-50 px-6 text-center'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}>
				<motion.h1
					className='text-5xl font-bold mb-4'
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}>
					أفضل خدمات صيانة الغسالات والتلاجات
				</motion.h1>

				<motion.p
					className='text-lg mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.6 }}>
					فريق متخصص، خدمة سريعة، وأسعار مناسبة
				</motion.p>

				<motion.a
					href='tel:01007179051'
					whileHover={{ scale: 1.1, rotate: -2 }}
					whileTap={{ scale: 0.95 }}>
					<button className='bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-9 rounded-xl shadow-lg'>
						اطلب الخدمة الآن
					</button>
				</motion.a>
			</motion.section>

			{/* ======= خدماتنا ======= */}
			<section className='bg-gray-50 py-20 px-6'>
				<div className='container mx-auto text-center max-w-6xl'>
					<h2 className='text-4xl font-bold mb-12 text-gray-800'>خدماتنا</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
						{services.map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								viewport={{ once: true }}
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
							</motion.div>
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
								<motion.div
									initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
									whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
									transition={{ duration: 0.8, delay: index * 0.2 }}
									viewport={{ once: true }}
									className='bg-white p-6 rounded-xl shadow hover:shadow-xl transition h-full flex flex-col items-center'>
									<img
										src={client.image}
										alt={client.name}
										className='w-20 h-20 rounded-full mb-4 border-2 border-blue-400'
									/>
									<p className='text-gray-600 italic mb-4'>
										“{client.feedback}”
									</p>
									<motion.div
										className='flex mb-2'
										animate={{ scale: [1, 1.2, 1] }}
										transition={{ repeat: Infinity, duration: 2 }}>
										{renderStars(client.rating)}
									</motion.div>
									<h3 className='font-semibold text-blue-600'>{client.name}</h3>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			{/* ======= من نحن ======= */}
			<motion.section
				className='py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100 text-center'
				initial={{ backgroundPosition: '0% 50%' }}
				animate={{ backgroundPosition: '100% 50%' }}
				transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}>
				<motion.h2
					className='text-4xl font-bold mb-6'
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}>
					من نحن
				</motion.h2>

				<motion.p
					className='text-gray-700 mb-4 text-lg'
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}>
					في{' '}
					<span className='font-semibold text-blue-600'>[Siyana i-tech]</span>،
					نحرص على أن تعمل أجهزتك المنزلية دائمًا بكفاءة...
				</motion.p>
			</motion.section>
		</div>
	)
}
