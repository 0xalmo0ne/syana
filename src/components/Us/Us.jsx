export default function Us() {
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
    <section className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto text-center max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
              <img src={service.icon} alt={service.title} className="w-20 h-20 mb-4"/>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

