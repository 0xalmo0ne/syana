import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-5 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* اللوجو أو الاسم */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Siyana i-Tech</h2>
          <p className="text-gray-400 mt-2">
            حلول صيانة متكاملة للأجهزة المنزلية بأعلى جودة.
          </p>
        </div>

        {/* روابط سريعة */}
        <div>
          <h3 className="text-lg font-semibold mb-3">روابط سريعة</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400">الرئيسية</a></li>
            <li><a href="/About" className="hover:text-blue-400">من نحن</a></li>
            <li><a href="/Us" className="hover:text-blue-400">خدماتنا</a></li>
            <li><a href="/Contact" className="hover:text-blue-400">تواصل معنا</a></li>
          </ul>
        </div>

        {/* تواصل معنا */}
        <div>
          <h3 className="text-lg font-semibold mb-3">تواصل معنا</h3>
          <ul className="space-y-2 text-gray-300">
            <li>📞 01007179051</li>
            <li>✉️ info@example.com</li>
            <li>📍 القاهرة، مصر</li>
          </ul>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} جميع الحقوق محفوظة - Siyana i-Tech
      </div>
    </footer>
  )
}

