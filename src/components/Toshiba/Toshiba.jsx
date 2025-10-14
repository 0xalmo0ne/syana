/** @format */
'use client'
import { motion } from 'framer-motion'
import logo2 from '../../assets/toshipa nofrist.png'
import logo3 from '../../assets/غسالة.png'
import logo4 from '../../assets/toshiba تلاجة_1.png'
import logo5 from '../../assets/غسالة-550x550h.jpg'
import logo6 from '../../assets/فريزر_1.jpg'
import logo7 from '../../assets/غسالة اطباق.jpg'
import logoo from '../../assets/toshiba/logo.png'
import syana from '../../assets/toshiba/1665271313istockphoto-1169128877-612x612.jpg'

export default function Toshiba() {
	const services = [
		{
			title: 'صيانة الغسالات',
			description: 'نقدم خدمة تصليح الغسالات بسرعة ومهنية، مع ضمان جودة العمل وقطع الغيار.',
			icon: 'https://img.icons8.com/ios-filled/80/0000FF/washing-machine.png',
		},
		{
			title: 'صيانة التلاجات',
			description: 'خدمة احترافية لجميع أنواع الثلاجات، لضمان تبريد مثالي وعمر أطول للجهاز.',
			icon: 'https://img.icons8.com/ios-filled/80/0000FF/fridge.png',
		},
		{
			title: 'فحص وصيانة الأجهزة المنزلية',
			description: 'فحص شامل لجميع الأجهزة المنزلية وإصلاح الأعطال البسيطة قبل تفاقمها.',
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
			{/* ======= Hero Section ======= */}
			<motion.section
				className='bg-gradient-to-r from-red-700 to-red-800 text-white py-24 px-6 text-center'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<img src={logoo} className='mx-auto' alt='' />
				<h1 className='text-2xl md:text-4xl font-bold mb-4'>توشيبا – التكنولوجيا في خدمتك</h1>
				<p className='text-lg mb-8'>نوفر لك أفضل خدمات الصيانة والدعم الفني لجميع منتجات توشيبا.</p>

				<motion.a href='tel:01007179051' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
					<button className='bg-white text-red-700 font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-200 transition'>
						الخط الساخن
					</button>
				</motion.a>
			</motion.section>

			<div className=' m-17 gap-8 flex flex-col lg:flex-row justify-between items-center '>
				<img src={syana} alt='syana' className='rounded-2xl' />
				<div dir='rtl'>
					<h1 className='text-5xl font-bold text-center lg:text-right'> توشيبا للصيانة</h1>
					<p className='py-8'>
						مركز صيانة توشيبا المعتمد هو أحد المراكز المتخصصة في تقديم خدمات الصيانة والإصلاح لأجهزة
						توشيبا المنزلية بمختلف أنواعها، وذلك وفقًا لأعلى معايير الجودة والدقة. نعمل في المركز
						على تلبية احتياجات عملائنا من خلال توفير حلول فنية شاملة تشمل الصيانة الدورية، الإصلاح
						الفوري، وتبديل قطع الغيار الأصلية المعتمدة من شركة توشيبا العالمية.
					</p>
					<div className='text-center lg:text-right'>
						{' '}
						<a
							href='tel:01007179051'
							className='mt-5 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition text-center'>
							اطلب الصيانة
						</a>
					</div>
				</div>
			</div>

			{/* ======= منتجات توشيبا ======= */}
			<section className='bg-gray-50 py-20 px-6'>
				<div className='container mx-auto text-center max-w-6xl'>
					<h2 className='text-4xl font-bold mb-12 text-gray-800 border-b-2 pb-4 w-fit mx-auto border-red-600'>
						اجهزة توشيبا
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo2} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>تلاجة توشيبا نوفرست</h3>
							<p className='text-gray-600 mb-4'>
								<ul>
									<li>الثلاجة لا تبرد بشكل كافٍ</li>
									<li>تسرب المياه داخل الثلاجة</li>
									<li>تكون طبقة ثلج في الفريزر رغم نظام النوفروست</li>
									<li>صدور صوت مرتفع أو غير طبيعي من الثلاجة</li>
								</ul>
							</p>
							<a
								href='tel:01007179051'
								className='mt-17 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
								اطلب الصيانة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo3} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>غساله توشيبا اوتوماتيك</h3>
							<p className='text-gray-600 mb-4'>
								<ul>
									<li>الغسالة لا تبدأ دورة الغسيل</li>
									<li>المياه لا تدخل إلى الغسالة</li>
									<li>الغسالة لا تصرف المياه بعد انتهاء الدورة</li>
									<li> عدم دوران الحلة أثناء الغسيل أو العصر</li>
								</ul>
							</p>
							<a
								href='tel:01007179051'
								className='mt-17 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
								اطلب الصيانة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo4} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>ثلاجه توشيبا </h3>
							<p className='text-gray-600 mb-4'>
								<ul>
									<li>الثلاجة لا تبرد بشكل كافٍ</li>
									<li>تسرب المياه داخل الثلاجة</li>
									<li>تكون طبقة ثلج في الفريزر رغم نظام النوفروست</li>
									<li>صدور صوت مرتفع أو غير طبيعي من الثلاجة</li>
								</ul>
							</p>
							<a
								href='tel:01007179051'
								className='mt-17 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
								اطلب الصيانة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo5} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>توشيبا غسالة ملابس فل اتوماتيك</h3>
							<p className='text-gray-600 mb-4'>
								<ul>
									<li>الغسالة لا تبدأ دورة الغسيل</li>
									<li>المياه لا تدخل إلى الغسالة</li>
									<li>الغسالة لا تصرف المياه بعد انتهاء الدورة</li>
									<li> عدم دوران الحلة أثناء الغسيل أو العصر</li>
								</ul>
							</p>
							<a
								href='tel:01007179051'
								className='mt-17 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
								اطلب الصيانة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo6} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>ديب فريزر نوفروست </h3>
							<p className='text-gray-600 mb-4'>
								<ul>
									<li>الديب فريزر لا يجمد الطعام بشكل كافٍ</li>
									<li>الفريزر لا يعمل نهائيًا</li>
									<li>تكون ثلج داخل الديب فريزر رغم أنه نوفروست</li>
									<li>رائحة غير مرغوبة أو انبعاث هواء ساخن من الجوانب</li>
								</ul>
							</p>
							<a
								href='tel:01007179051'
								className='mt-10 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
								اطلب الخدمة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo7} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>غسالة اطباق توشيبا</h3>
							<p className='text-gray-600 mb-4'>
								<ul>
									<li>ظهور أصوات عالية أثناء التشغيل</li>
									<li>تسريب مياه من الباب أو أسفل الغسالة</li>
									<li>الغسالة لا تجفف الأطباق بعد الغسيل</li>
									<li> عدم تسخين المياه أثناء التشغيل</li>
								</ul>
							</p>
							<a
								href='tel:01007179051'
								className='mt-15 inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition'>
								اطلب الصيانة
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className='bg-gray-50 py-20 px-6'>
				<div className='container mx-auto text-center max-w-6xl'>
					<h2 className='text-4xl font-bold mb-12 text-gray-800  border-b-2 pb-4 w-fit mx-auto border-red-600'>
						خدماتنا
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
						{services.map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								viewport={{ once: true }}
								className='bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center'>
								<img src={service.icon} alt={service.title} className='w-20 h-20 mb-4' />
								<h3 className='text-xl font-semibold mb-2 text-blue-600'>{service.title}</h3>
								<p className='text-gray-600 text-center'>{service.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
			<motion.section
				dir='rtl'
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
					في <span className='font-semibold text-blue-600'>مركز توشيبا</span>، نحرص على أن تعمل
					أجهزتك المنزلية دائمًا بكفاءة وجودة عالية.
				</motion.p>
			</motion.section>
			<motion.section
				dir='rtl'
				className='m-3 bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-18 px-6 rounded-lg shadow-xl'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}>
				<motion.h2
					className='text-3xl md:text-4xl font-bold mb-6'
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					للتنويه .. هام جدًا
				</motion.h2>

				<motion.p
					className='text-lg leading-relaxed max-w-4xl mx-auto mb-8'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}>
					نود أن نوضح لجميع زوار موقعنا أن مركز صيانة توشيبا هو مركز خدمة مستقل متخصص في صيانة جميع
					أنواع الأجهزة المنزلية باستخدام قطع غيار أصلية وتصليح على أعلى مستوى. نحن لا نتبع أي
					توكيلات تجارية أو شركات مصنّعة، وكل ما يتم ذكره من كلمات دعائية مثل "وكيل معتمد" هدفه
					تسهيل الوصول إلينا عبر محركات البحث. نلتزم جميعًا على الشفافية ونعمل على مدار الأسبوع
					لتقديم أفضل خدمة لكم.
				</motion.p>

				<motion.a
					href='#'
					className='text-white underline hover:text-gray-200 transition text-lg font-semibold'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.8 }}>
					سياسة الخصوصية
				</motion.a>
			</motion.section>
		</div>
	)
}
