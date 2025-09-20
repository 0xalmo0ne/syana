import React from 'react'

export default function About() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          من نحن
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          في <span className="font-semibold text-blue-600">[Siyana i-tech]</span>، نحرص على أن تعمل أجهزتك المنزلية دائمًا بكفاءة. نحن متخصصون في <span className="font-semibold">صيانة الغسالات والتلاجات</span> بسرعة ومهنية.
        </p>
        <p className="text-gray-700 mb-8 text-lg">
          فريقنا من الفنيين الخبراء يستخدم أحدث الأدوات لحل أي مشكلة، مع توضيح كل خطوة لك قبل البدء. هدفنا هو راحتك وأمانك في منزلك.
        </p>

        {/* أيقونات الأجهزة */}
        <div className="flex justify-center gap-12 mb-12">
          <img src="https://img.icons8.com/ios-filled/80/0000FF/washing-machine.png" alt="غسالة" className="w-20 h-20"/>
          <img src="https://img.icons8.com/ios-filled/80/0000FF/fridge.png" alt="ثلاجة" className="w-20 h-20"/>
        </div>

        {/* صورة فريق العمل */}
        <div className="flex justify-center">
          <img 
            src="https://i.pravatar.cc/200?img=12" 
            alt="فريق العمل" 
            className="w-48 h-48 rounded-full border-4 border-blue-400 shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

