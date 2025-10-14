/** @format */
'use client'
import { motion } from 'framer-motion'
import logo2 from '../../assets/zanossi/تلاجة نوفرست زانوسي1.jpg'
import fredg from '../../assets/zanossi/فريزر.png'
import logo3 from '../../assets/zanossi/غسالة اطباق.png'
import khsala from '../../assets/zanossi/غسالة امامى.webp'
import logo from '../../assets/zanossi/zanussi_logo.jpg'
import al3rosa from '../../assets/zanossi/غسالة.webp'
import al3rosa2 from '../../assets/zanossi/تلاجة 2.webp'
import syana from '../../assets/toshiba/1665271313istockphoto-1169128877-612x612.jpg'
import { useEffect } from 'react'
export default function Zanussi() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	const services = [
		{
			title: 'صيانة الغسالات',
			description: 'نقدم خدمات صيانة غسالات زانوسي بأحدث التقنيات وباستخدام قطع غيار أصلية مضمونة.',
			icon: 'https://img.icons8.com/ios-filled/80/FFD700/washing-machine.png',
		},
		{
			title: 'صيانة الثلاجات',
			description: 'نساعدك في حل جميع مشاكل التبريد وتوفير أداء مثالي لثلاجة زانوسي الخاصة بك.',
			icon: 'https://img.icons8.com/ios-filled/80/FFD700/fridge.png',
		},
		{
			title: 'فحص شامل للأجهزة',
			description: 'نقدم فحص شامل لجميع أجهزة زانوسي لاكتشاف الأعطال قبل حدوثها.',
			icon: 'https://img.icons8.com/ios-filled/80/FFD700/maintenance.png',
		},
		{
			title: 'استبدال القطع الأصلية',
			description: 'نستخدم فقط قطع غيار زانوسي الأصلية مع ضمان على الخدمة.',
			icon: 'https://img.icons8.com/ios-filled/80/FFD700/replace.png',
		},
	]

	return (
		<div className='font-sans'>
			{/* ======= Hero Section ======= */}
			<motion.section
				className='bg-gradient-to-r from-yellow-500 to-yellow-700 text-black py-24 px-6 text-center'
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				<img src={logo} className='mx-auto w-80 mb-6' alt='Zanussi logo' />
				<h1 className='text-2xl md:text-3xl font-bold mb-4'>
					زانوسي – التكنولوجيا الإيطالية في خدمتك
				</h1>
				<p className='text-sm mb-8'>
					صيانة وإصلاح جميع أجهزة زانوسي بأعلى جودة وكفاءة في جميع المحافظات.
				</p>

				<motion.a href='tel:01007179051' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
					<button className='bg-black text-yellow-400 font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-900 transition'>
						الخط الساخن
					</button>
				</motion.a>
			</motion.section>

			{/* ======= About Section ======= */}
			<div className='m-17 gap-8 flex flex-col lg:flex-row justify-between items-center'>
				<img src={syana} alt='syana' className='rounded-2xl' />
				<div dir='rtl'>
					<h1 className='text-5xl font-bold text-center lg:text-right'>زانوسي للصيانة</h1>
					<p className='py-8'>
						مركز صيانة زانوسي المعتمد يقدم خدمات الإصلاح والصيانة لجميع الأجهزة المنزلية من زانوسي
						بأعلى كفاءة. نلتزم بتقديم الخدمة السريعة والمضمونة مع استخدام قطع الغيار الأصلية.
					</p>
					<div className='text-center lg:text-right'>
						<a
							href='tel:01007179051'
							className='mt-5 inline-block bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition text-center'>
							اطلب الصيانة
						</a>
					</div>
				</div>
			</div>

			{/* ======= أجهزة زانوسي ======= */}
			<section className='bg-gray-50 py-20 px-6'>
				<div className='container mx-auto text-center max-w-6xl'>
					<h2 className='text-4xl font-bold mb-12 text-gray-800 border-b-2 pb-4 w-fit mx-auto border-yellow-500'>
						أجهزة زانوسي
					</h2>

					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
						{/* ثلاجة */}
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo2} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>ثلاجة زانوسي نوفروست</h3>
							<ul className='text-gray-600 mb-4 text-center'>
								<li>الثلاجة لا تبرد جيدًا</li>
								<li>تسرب مياه داخل الكابينة</li>
								<li>أصوات غير طبيعية أثناء التشغيل</li>
								<li>الفريزر لا يجمد الطعام</li>
							</ul>
							<a
								href='tel:01007179051'
								className='inline-block bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition'>
								اطلب الصيانة
							</a>
						</div>

						{/* غسالة */}
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={logo3} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>غسالة زانوسي</h3>
							<ul className='text-gray-600 mb-4 text-center'>
								<li>اهتزاز أثناء العصر</li>
								<li>ضعف في صرف المياه</li>
								<li>توقف مفاجئ أثناء الدورة</li>
								<li>تسرب مياه من الباب</li>
							</ul>
							<a
								href='tel:01007179051'
								className='inline-block bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition'>
								اطلب الصيانة
							</a>
						</div>

						{/* فريزر */}
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={fredg} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>فريزر زانوسي</h3>
							<ul className='text-gray-600 mb-4 text-center'>
								<li>تكون ثلج زائد داخل الفريزر</li>
								<li>ضعف في التجميد</li>
								<li>صوت عالي أثناء التشغيل</li>
								<li>الفريزر لا يفصل تلقائيًا</li>
							</ul>
							<a
								href='tel:01007179051'
								className='inline-block bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition'>
								اطلب الصيانة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={khsala} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>غسالة زانوسي امامى</h3>
							<ul className='text-gray-600 mb-4 text-center'>
								<li>المياه لا تُصرف بعد انتهاء الغسيل</li>
								<li>الغسالة لا تعصر أو العصر ضعيف</li>
								<li>أصوات غير طبيعية أثناء التشغيل</li>
								<li>تسرب مياه من باب الغسالة</li>
							</ul>
							<a
								href='tel:01007179051'
								className='mt-10 inline-block bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition text-center'>
								اطلب الصيانة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={al3rosa} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>غسالة زانوسي</h3>
							<ul className='text-gray-600 mb-4 text-center'>
								<li>اهتزازات قوية أثناء التشغيل</li>
								<li>الغسالة لا تسخن المياه أثناء الدورة</li>
								<li>أصوات غير طبيعية أثناء التشغيل</li>
								<li> الغسالة لا تفتح الباب بعد انتهاء الدورة</li>
							</ul>

							<a
								href='tel:01007179051'
								className='mt-10 inline-block bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition text-center'>
								اطلب الصيانة
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
							<img src={al3rosa2} alt='' className='w-full h-48 object-contain mb-4' />
							<h3 className='text-xl font-semibold mb-2'>ثلاجة زانوسى نوفروست </h3>
							<ul className='text-gray-600 mb-4 text-center'>
								<li>باب الثلاجة لا يُغلق بإحكام</li>
								<li>انسداد فتحات الهواء بين الفريزر والثلاجة</li>
								<li>أصوات غير طبيعية أثناء التشغيل</li>
								<li>تسرب مياه داخل الثلاجة</li>
							</ul>

							<a
								href='tel:01007179051'
								className='mt-10 inline-block bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition text-center'>
								اطلب الصيانة
							</a>
						</div>
					</div>
				</div>

				{/* خدماتنا */}
				<section className='bg-gray-50 py-20 px-6'>
					<div className='container mx-auto text-center max-w-6xl'>
						<h2 className='text-4xl font-bold mb-12 text-gray-800  border-b-2 pb-4 w-fit mx-auto border-yellow-500'>
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
									<h3 className='text-xl font-semibold mb-2 text-yellow-600'>{service.title}</h3>
									<p className='text-gray-600 text-center'>{service.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>
			</section>

			{/* من نحن */}
			<motion.section
				className='py-16 px-6 bg-gradient-to-r from-yellow-50 to-yellow-100 text-center'
				initial={{ backgroundPosition: '0% 50%' }}
				animate={{ backgroundPosition: '100% 50%' }}
				transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}>
				<motion.h2
					className='text-4xl font-bold mb-6 text-yellow-700'
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
					في <span className='font-semibold text-yellow-600'>مركز صيانة زانوسي</span>، نعمل على ضمان
					أن تعمل أجهزتك بأعلى أداء وكفاءة لتوفير راحة تامة في منزلك.
				</motion.p>
			</motion.section>

			{/* التنويه */}
			<motion.section
				dir='rtl'
				className='m-3 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white text-center py-18 px-6 rounded-lg shadow-xl'
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}>
				<motion.h2
					className='text-3xl md:text-4xl font-bold mb-6'
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					تنويه هام جدًا
				</motion.h2>

				<motion.p
					className='text-lg leading-relaxed max-w-4xl mx-auto mb-8'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}>
					مركز صيانة زانوسي هو مركز مستقل متخصص في صيانة أجهزة زانوسي باستخدام قطع غيار أصلية. نحن
					لا نتبع أي توكيل رسمي أو شركة مصنّعة، وهدفنا تقديم خدمة احترافية وسريعة لجميع عملائنا.
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
