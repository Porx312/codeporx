import Link from "next/link"
import Image from "next/image"

export default function ProjectCardMinimal() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 relative h-56 md:h-auto overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dq0pfesxe/image/upload/v1743873033/Captura_de_pantalla_2025-04-05_191009_xhtbsm.png"
            alt="IdeStore - E-commerce para programadores"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 md:opacity-100"></div>
        </div>

        <div className="md:w-3/5 p-8">
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="flex items-center space-x-2 mb-1">
              <div className="h-1 w-6 bg-blue-500 rounded-full"></div>
              <span className="text-xs uppercase tracking-wider font-medium text-blue-600 dark:text-blue-400">Proyecto</span>
              </div>
                <Image
                  src="https://res.cloudinary.com/dq0pfesxe/image/upload/v1741608903/idestore_ihxaim.png"
                  alt="Imagen de IdeStorex"
                  width={40}
                  height={40}
                  className="mr-2"
                />
              </div>
            
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">IdeStorex</h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                E-commerce inspirado en VS Code para programadores. Encuentra productos exclusivos relacionados con tus
                lenguajes de programación y tecnologías favoritas.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Next.js
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  Medusa.js
                </span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-6">
                <div className="flex items-center space-x-4">
                  <Link 
                    href="https://www.instagram.com/idestorex?igsh=MXc3azdpeDU4bWc0Zw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>
                  </Link>
                  <Link 
                    href="https://pin.it/j3UogSFYa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="Pinterest"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<circle cx="24" cy="24" r="20" fill="#E60023"></circle><path fill="#FFF" d="M24.4439087,11.4161377c-8.6323242,0-13.2153931,5.7946167-13.2153931,12.1030884	c0,2.9338379,1.5615234,6.5853882,4.0599976,7.7484131c0.378418,0.1762085,0.581543,0.1000366,0.668457-0.2669067	c0.0668945-0.2784424,0.4038086-1.6369019,0.5553589-2.2684326c0.0484619-0.2015381,0.0246582-0.3746338-0.1384277-0.5731201	c-0.8269653-1.0030518-1.4884644-2.8461304-1.4884644-4.5645752c0-4.4115601,3.3399658-8.6799927,9.0299683-8.6799927	c4.9130859,0,8.3530884,3.3484497,8.3530884,8.1369019c0,5.4099731-2.7322998,9.1584473-6.2869263,9.1584473	c-1.9630737,0-3.4330444-1.6238403-2.9615479-3.6153564c0.5654297-2.3769531,1.6569214-4.9415283,1.6569214-6.6584473	c0-1.5354004-0.8230591-2.8169556-2.5299683-2.8169556c-2.006958,0-3.6184692,2.0753784-3.6184692,4.8569336	c0,1.7700195,0.5984497,2.9684448,0.5984497,2.9684448s-1.9822998,8.3815308-2.3453979,9.9415283	c-0.4019775,1.72229-0.2453003,4.1416016-0.0713501,5.7233887l0,0c0.4511108,0.1768799,0.9024048,0.3537598,1.3687744,0.4981079l0,0	c0.8168945-1.3278198,2.0349731-3.5056763,2.4864502-5.2422485c0.2438354-0.9361572,1.2468872-4.7546387,1.2468872-4.7546387	c0.6515503,1.2438965,2.5561523,2.296936,4.5831299,2.296936c6.0314941,0,10.378418-5.546936,10.378418-12.4400024	C36.7738647,16.3591919,31.3823242,11.4161377,24.4439087,11.4161377z"></path>
</svg>
                  </Link>
                  <Link 
                    href="https://www.tiktok.com/@idestorex?_t=ZN-8vHinQUuLAt&_r=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    aria-label="TikTok"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
</svg>
                  </Link>
                </div>
                
                <Link
                  href="https://idestorex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 transition-colors"
                >
                  <span>Visitar tienda</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
