/** @format */
'use client'
import { motion } from 'framer-motion'
// صور منتجات زانوسي (ممكن تستبدلها بصورك لاحقًا)
import zanussiFridge from '../../assets/zanossi/زانوسي نوفرست_1.png'
import zanussiWasher from '../../assets/zanossi/غسالة زانوسيpng.png'
import zanussiDishwasher from '../../assets/zanossi/غسالة اطباق.png'
import zanussiFreezer from '../../assets/zanossi/فريزر.png'
import zanussiFreezer2 from '../../assets/zanossi/فريزر22.png'
import zanussiFreezer33 from '../../assets/zanossi/فريزر زانوسي33.png'

export default function Zanussi() {
	return (
		<div className='font-sans'>
			{/* ======= Hero Section ======= */}
			<motion.section
				className='bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-24 px-6 text-center'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<h1 className='text-5xl md:text-6xl font-bold mb-4'>زانوسي – الابتكار في كل تفصيلة</h1>
				<p className='text-lg mb-8'>
					نوفر لك أفضل خدمات الصيانة والدعم الفني لجميع منتجات زانوسي بأعلى جودة وسرعة.
				</p>

				<motion.a href='tel:01007179051' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
					<button className='bg-black text-yellow-400 font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-800 transition'>
						اطلب الخدمة الآن
					</button>
				</motion.a>
			</motion.section>

			{/* ======= منتجات زانوسي ======= */}
			<section className='bg-gray-50 py-20 px-6'>
				<div className='container mx-auto text-center max-w-6xl'>
					<h2 className='text-4xl font-bold mb-12 text-gray-800 border-b-2 pb-4 w-fit mx-auto border-yellow-500'>
						منتجات زانوسي
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
						{[
							{
								name: 'ثلاجة زانوسي نوفروست',
								desc: 'ثلاجة زانوسي 400 لتر، تبريد سريع وتكنولوجيا نوفروست موفرة للطاقة.',
								img: zanussiFridge,
							},
							{
								name: 'غسالة زانوسي أوتوماتيك',
								desc: 'غسالة زانوسي 9 كجم، 1400 لفة، تحكم رقمي متطور وتقنية توفير الطاقة.',
								img: zanussiWasher,
							},
							{
								name: 'غسالة أطباق زانوسي',
								desc: 'غسالة أطباق 13 فرد، هادئة واقتصادية في استهلاك المياه.',
								img: zanussiDishwasher,
							},
							{
								name: 'ديب فريزر زانوسي',
								desc: 'فريزر رأسي بسعة 280 لتر، تصميم أنيق وتجميد فائق السرعة.',
								img: zanussiFreezer,
							},
							{
								name: 'ثلاجة زانوسي 320 لتر باب واحد اسود',
								desc: ' لفترة أطول,تصميم جديد من الداخل والخارج مع أرفف تخزين مرنة',
								img: zanussiFreezer2,
							},
							{
								name: 'فريزر 320 لتر فضي ',
								desc: '  درج مغلق يحافظ على فواكهك وخضرواتك طازجة ومقرمشة لفترة أطول ',
								img: zanussiFreezer33,
							},
						].map((product, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
								<img
									src={product.img}
									alt={product.name}
									className='w-full h-48 object-contain mb-4'
								/>
								<h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
								<p className='text-gray-600 mb-4'>{product.desc}</p>
								<a
									href='tel:01007179051'
									className='inline-block bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition'>
									اطلب الخدمة
								</a>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
