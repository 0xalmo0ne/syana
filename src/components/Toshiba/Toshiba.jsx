/** @format */
'use client'
import { motion } from 'framer-motion'
import logo2 from '../../assets/toshipa nofrist.png'
import logo3 from '../../assets/غسالة.png'
import logo4 from '../../assets/toshiba تلاجة_1.png'
import logo5 from '../../assets/غسالة-550x550h.jpg'
import logo6 from '../../assets/فريزر_1.jpg'
import logo7 from '../../assets/غسالة اطباق.jpg'
export default function Toshiba() {
	return (
		<div className='font-sans'>
			{/* ======= Hero Section ======= */}
			<motion.section
				className='bg-gradient-to-r from-red-600 to-red-800 text-white py-24 px-6 text-center'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h1 className='text-5xl md:text-6xl font-bold mb-4'>توشيبا – التكنولوجيا في خدمتك</h1>
				<p className='text-lg mb-8'>نوفر لك أفضل خدمات الصيانة والدعم الفني لجميع منتجات توشيبا.</p>

				<motion.a href='tel:01007179051' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
					<button className='bg-white text-red-700 font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-200 transition'>
						اطلب الخدمة الآن
					</button>
				</motion.a>
			</motion.section>

			{/* ======= منتجات توشيبا ======= */}
			<section className='bg-gray-50 py-20 px-6'>
				<div className='container mx-auto text-center max-w-6xl'>
					<h2 className='text-4xl font-bold mb-12 text-gray-800 border-b-2 pb-4 w-fit mx-auto border-red-600'>
						منتجات توشيبا
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo2} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>تلاجة توشيبا نوفرست</h3>
							<p className='text-gray-600 mb-4'>
								ثلاجة توشيبا نوفروست 350 لتر ثلاجة 2 باب لون سيلفر ، يد دائرية فلتر بلاتنيوم منقى
								للروائح بلد المنشأ : مصر
							</p>
							<a
								href='tel:01007179051'
								className='inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
								اطلب الخدمة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo3} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>غساله توشيبا اوتوماتيك</h3>
							<p className='text-gray-600 mb-4'>
								غساله توشيبا اوتوماتيك 8كيلو 1400لفه سلفر انفرتر بخار واى فاى TWBL90A4EGSS
							</p>
							<a
								href='tel:01007179051'
								className='mt-5 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
								اطلب الخدمة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo4} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>ثلاجه توشيبا </h3>
							<p className='text-gray-600 mb-4'>
								ثلاجه توشيبا 338لتر رمادى غامق انفرتر GRRT468WEPMN37
							</p>
							<a
								href='tel:01007179051'
								className='mt-5 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
								اطلب الخدمة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo5} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>توشيبا غسالة ملابس فل اتوماتيك</h3>
							<p className='text-gray-600 mb-4'>
								توشيبا غسالة ملابس فل اتوماتيك، 12 كيلو، 1400 لفة، مجفف، ديجيتال- TWD-BM130GF4EG(MK)
							</p>
							<a
								href='tel:01007179051'
								className='mt-5 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
								اطلب الخدمة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo6} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>ديب فريزر نوفروست </h3>
							<p className='text-gray-600 mb-4'>
								توشيبا - ديب فريزر نوفروست ديجتال 7 درج رمادي- GR-RU312WE-DMN(57)
							</p>
							<a
								href='tel:01007179051'
								className='mt-12 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
								اطلب الخدمة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo7} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>غسالة اطباق توشيبا</h3>
							<p className='text-gray-600 mb-4'>
								غسالة اطباق توشيبا، 598 ملم، 13 فرد، فضي - DW-13F8AF(SS)
							</p>
							<a
								href='tel:01007179051'
								className='mt-13 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
								اطلب الخدمة
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
