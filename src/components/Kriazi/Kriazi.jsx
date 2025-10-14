/** @format */
'use client'
import { motion } from 'framer-motion'
import logo2 from '../../assets/kryazi/تلاجة نوفرست_.jpg'
import fredg from '../../assets/kryazi/فريزر2.webp'
import logo3 from '../../assets/kryazi/غسالة.webp'
import khsala from '../../assets/kryazi/غسالة تحميل امامى.jpg'
import logo from '../../assets/kryazi/logo.png'
import al3rosa from '../../assets/kryazi/ثلاجة العروسة.webp'
import al3rosa2 from '../../assets/kryazi/تلاجة سوليتير.webp'
import syana from '../../assets/toshiba/1665271313istockphoto-1169128877-612x612.jpg'

export default function Kiriazi() {
	const services = [
		{
			title: 'صيانة الغسالات',
			description: 'خدمة صيانة غسالات كريازي بأعلى جودة وبضمان على قطع الغيار.',
			icon: 'https://img.icons8.com/ios-filled/80/006400/washing-machine.png',
		},
		{
			title: 'صيانة الثلاجات',
			description: 'فريقنا المتخصص يقدم صيانة دقيقة لضمان تبريد مثالي وطول عمر الجهاز.',
			icon: 'https://img.icons8.com/ios-filled/80/006400/fridge.png',
		},
		{
			title: 'فحص شامل للأجهزة المنزلية',
			description: 'فحص دوري لجميع أجهزة كريازي لتجنب الأعطال المفاجئة وتحسين الأداء.',
			icon: 'https://img.icons8.com/ios-filled/80/006400/maintenance.png',
		},
		{
			title: 'استبدال القطع الأصلية',
			description: 'نوفر قطع غيار أصلية من كريازي مع ضمان واستبدال فوري.',
			icon: 'https://img.icons8.com/ios-filled/80/006400/replace.png',
		},
	]

	return (
		<div className='font-sans'>
			{/* ======= Hero Section ======= */}
			<motion.section
				className='bg-gradient-to-r from-green-800 to-green-900 text-white py-24 px-6 text-center'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<img src={logo} className='mx-auto w-80 mb-6' alt='Kiriazi logo' />
				<h1 className='text-2xl md:text-5xl font-bold mb-4'>كريازي – الجودة في خدمتك</h1>
				<p className='text-sm mb-8'>
					نقدم أفضل خدمات الصيانة والإصلاح لجميع أجهزة كريازي المنزلية.
				</p>

				<motion.a href='tel:01007179051' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
					<button className='bg-white text-green-800 font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-200 transition'>
						الخط الساخن
					</button>
				</motion.a>
			</motion.section>

			{/* ======= About Section ======= */}
			<div className='m-17 gap-8 flex flex-col lg:flex-row justify-between items-center'>
				<img src={syana} alt='syana' className='rounded-2xl' />
				<div dir='rtl'>
					<h1 className='text-5xl font-bold text-center lg:text-right'>كريازي للصيانة</h1>
					<p className='py-8'>
						مركز صيانة كريازي المعتمد يقدم خدمات الإصلاح والصيانة لجميع الأجهزة المنزلية من كريازي
						بأعلى مستويات الكفاءة والاحترافية. نلتزم بتوفير قطع غيار أصلية، مع ضمان الخدمة وسرعة
						الاستجابة لتلبية احتياجات عملائنا في جميع المحافظات.
					</p>
					<div className='text-center lg:text-right'>
						<a
							href='tel:01007179051'
							className='mt-5 inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition text-center'>
							اطلب الصيانة
						</a>
					</div>
				</div>
			</div>

			{/* ======= أجهزة كريازي ======= */}
			<section className='bg-gray-50 py-20 px-6'>
				<div className='container mx-auto text-center max-w-6xl'>
					<h2 className='text-4xl font-bold mb-12 text-gray-800 border-b-2 pb-4 w-fit mx-auto border-green-700'>
						أجهزة كريازي
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
						{/* مثال واحد - تقدر تكرر بنفس الشكل للباقي */}
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo2} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>ثلاجة كريازي نوفروست</h3>
							<ul className='text-gray-600 mb-4 text-center'>
								<li>الثلاجة لا تبرد جيدًا</li>
								<li>تكون ثلج رغم نظام النوفروست</li>
								<li>أصوات غير طبيعية أثناء التشغيل</li>
								<li>تسرب مياه داخل الثلاجة</li>
							</ul>
							<a
								href='tel:01007179051'
								className='inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition'>
								اطلب الصيانة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo3} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>غسالة كريازي</h3>
							<ul className='text-gray-600 mb-4 text-center'>
								<li>اهتزاز أثناء العصر</li>
								<li>استهلاك ملحوظ للكهرباء والمياه</li>
								<li>تأخر في تصريف المياه أحيانًا</li>
								<li>أعطال موتور الغسيل</li>
							</ul>
							<a
								href='tel:01007179051'
								className='inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition'>
								اطلب الصيانة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={fredg} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>فريزر كريازي </h3>
							<ul className='text-gray-600 mb-4 text-center'>
								<li>الفريزر لا يبرد أو التجميد ضعيف</li>
								<li>تكون ثلج زائد داخل الفريزر</li>
								<li>الفريزر يصدر صوتًا عاليًا أثناء التشغيل</li>
								<li>الفريزر لا يفصل تلقائيًا</li>
							</ul>
							<a
								href='tel:01007179051'
								className='inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition'>
								اطلب الصيانة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={khsala} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>غسالة كريازي امامى</h3>
							<ul className='text-gray-600 mb-4 text-center'>
								<li>المياه لا تُصرف بعد انتهاء الغسيل</li>
								<li>الغسالة لا تعصر أو العصر ضعيف</li>
								<li>أصوات غير طبيعية أثناء التشغيل</li>
								<li>تسرب مياه من باب الغسالة</li>
							</ul>
							<a
								href='tel:01007179051'
								className='mt-6 inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition'>
								اطلب الصيانة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={al3rosa} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>ثلاجة كريازي ديفروست</h3>
							<ul className='text-gray-600 mb-4 text-center'>
								<li>الثلاجة لا تبرد جيدًا</li>
								<li>تكون ثلج رغم نظام النوفروست</li>
								<li>أصوات غير طبيعية أثناء التشغيل</li>
								<li>تسرب مياه داخل الثلاجة</li>
							</ul>
							<a
								href='tel:01007179051'
								className=' mt-6 inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition'>
								اطلب الصيانة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={al3rosa2} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>ثلاجة كريازي نوفروست سوليتير</h3>
							<ul className='text-gray-600 mb-4 text-center'>
								<li>تراكم الثلج داخل الفريزر بسبب خلل في نظام إذابة الثلج</li>
								<li>انسداد فتحات الهواء بين الفريزر والثلاجة</li>
								<li>أصوات غير طبيعية أثناء التشغيل</li>
								<li>تسرب مياه داخل الثلاجة</li>
							</ul>
							<a
								href='tel:01007179051'
								className='inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 transition'>
								اطلب الصيانة
							</a>
						</div>
					</div>
				</div>
				<section className='bg-gray-50 py-20 px-6'>
					<div className='container mx-auto text-center max-w-6xl'>
						<h2 className='text-4xl font-bold mb-12 text-gray-800  border-b-2 pb-4 w-fit mx-auto border-blue-600'>
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

					{/* خدماتنا */}
				</section>
			</section>

			{/* من نحن */}
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
					dir='rtl'
					className='text-gray-700 mb-4 text-lg'
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}>
					في <span className='font-semibold text-blue-600'>مركز صيانة كريازى</span>، نحرص على أن
					تعمل أجهزتك المنزلية دائمًا بكفاءة وجودة عالية.
				</motion.p>
			</motion.section>

			{/* ======= التنويه ======= */}
			<motion.section
				dir='rtl'
				className='m-3 bg-gradient-to-r from-green-700 to-green-900 text-white text-center py-18 px-6 rounded-lg shadow-xl'
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
					نود أن نوضح لجميع زوار موقعنا أن مركز صيانة كريازي هو مركز مستقل متخصص في صيانة جميع أنواع
					الأجهزة المنزلية باستخدام قطع غيار أصلية. نحن لا نتبع أي توكيلات تجارية أو شركات مصنّعة،
					وكل ما يتم ذكره من مصطلحات مثل "وكيل معتمد" هدفه تسهيل الوصول إلينا عبر محركات البحث.
					نلتزم بالشفافية ونعمل على مدار الأسبوع لتقديم أفضل خدمة لعملائنا الكرام.
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
