/** @format */
'use client'
import { motion } from 'framer-motion'
import kiriaziFridge from '../../assets/kryazi/تلاجة1 .jpg'
import kiriaziFreezer from '../../assets/kryazi/فريزر-k330.webp'
import kiriaziWasher from '../../assets/kryazi/غسالة.webp'
import kiriaziDishwasher from '../../assets/kryazi/تصليح-غسالات-اطبا.webp'
import Freezer from '../../assets/kryazi/فريزر2.webp'
import kiriazi from '../../assets/kryazi/تلاجة 44.webp'

export default function Kiriazi() {
	return (
		<div className='font-sans'>
			{/* ======= Hero Section ======= */}
			<motion.section
				className='bg-gradient-to-r from-green-700 to-green-900 text-white py-24 px-6 text-center'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h1 className='text-5xl md:text-6xl font-bold mb-4'>كريازي – الجودة والثقة في بيتك</h1>
				<p className='text-lg mb-8'>نقدملك أفضل خدمات الصيانة لأجهزة كريازي بأيدي فنيين متخصصين.</p>

				<motion.a href='tel:01007179051' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
					<button className='bg-white text-green-700 font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-200 transition'>
						اطلب الخدمة الآن
					</button>
				</motion.a>
			</motion.section>

			{/* ======= منتجات كريازي ======= */}
			<section className='bg-gray-50 py-20 px-6'>
				<div className='container mx-auto text-center max-w-6xl'>
					<h2 className='text-4xl font-bold mb-12 text-gray-800 border-b-2 pb-4 w-fit mx-auto border-green-700'>
						منتجات كريازي
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img
								src={kiriaziFridge}
								alt='ثلاجة كريازي'
								className='w-full h-48 object-contain mb-4'
							/>
							<h3 className='text-xl font-semibold mb-2'>ثلاجة كريازي نوفروست</h3>
							<p className='text-gray-600 mb-4'>
								ثلاجة كريازي 16 قدم نوفروست – لون فضي، تصميم أنيق وتبريد قوي موفر للطاقة.
							</p>
							<a
								href='tel:01007179051'
								className='mt-8 inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition'>
								اطلب الخدمة
							</a>
						</div>

						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img
								src={kiriaziFreezer}
								alt='ديب فريزر كريازي'
								className='w-full h-48 object-contain mb-4'
							/>
							<h3 className='text-xl font-semibold mb-2'>ديب فريزر كريازي</h3>
							<p className='text-gray-600 mb-4'>
								ديب فريزر كريازي أفقي بسعة 230 لتر – نوفروست، هادئ جدًا واقتصادي في استهلاك
								الكهرباء.
							</p>
							<a
								href='tel:01007179051'
								className=' mt-3 inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition'>
								اطلب الخدمة
							</a>
						</div>

						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img
								src={kiriaziWasher}
								alt='غسالة كريازي'
								className='w-full h-48 object-contain mb-4'
							/>
							<h3 className='text-xl font-semibold mb-2'>غسالة كريازي أوتوماتيك</h3>
							<p className='text-gray-600 mb-4'>
								غسالة كريازي 7 كيلو فول أوتوماتيك – متعددة البرامج، أداء قوي وتوفير للطاقة.
							</p>
							<a
								href='tel:01007179051'
								className='mt-8 inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition'>
								اطلب الخدمة
							</a>
						</div>

						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img
								src={kiriaziDishwasher}
								alt='غسالة أطباق كريازي'
								className='w-full h-48 object-contain mb-4'
							/>
							<h3 className='text-xl font-semibold mb-2'>غسالة أطباق كريازي</h3>
							<p className='text-gray-600 mb-4'>
								غسالة أطباق كريازي 12 فرد – موفرة للماء والطاقة، تصميم أنيق وسهل الاستخدام.
							</p>
							<a
								href='tel:01007179051'
								className='mt-8 inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition'>
								اطلب الخدمة
							</a>
						</div>

						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img
								src={Freezer}
								alt='غسالة أطباق كريازي'
								className='w-full h-48 object-contain mb-4'
							/>
							<h3 className='text-xl font-semibold mb-2'>ديب فريزر كريازي</h3>
							<p className='text-gray-600 mb-4'>ديب فريزر افقي ابيض 137.0 لتر</p>
							<a
								href='tel:01007179051'
								className='mt-14 inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition'>
								اطلب الخدمة
							</a>
						</div>

						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img
								src={kiriazi}
								alt='غسالة أطباق كريازي'
								className='w-full h-48 object-contain mb-4'
							/>
							<h3 className='text-xl font-semibold mb-2'>ثلاجه بريميير 2 باب</h3>
							<p className='text-gray-600 mb-4'>
								ثلاجه بريميير 2 باب نوفروست ديجيتال , اسود 690.0 لتر
							</p>
							<a
								href='tel:01007179051'
								className='mt-8 inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition'>
								اطلب الخدمة
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
