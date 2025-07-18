import Image from "next/image";

export default function Component() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          INDUSTRY-LEADING
          <br />
          NETWORK SUPPORT
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-12">Codex powers real-time experiences for</p>

        {/* Top row of company logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-full"></div>
            <span className="text-lg font-medium">MoonPay</span>
          </div>
          <span className="text-2xl font-bold">TradingView</span>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
            <span className="text-lg font-medium">rainbow</span>
          </div>
          <span className="text-2xl font-bold">0x</span>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">MAGIC EDEN</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">BullX</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">BANANA GUN</span>
          </div>
        </div>

        {/* Second row of company logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          <span className="text-lg font-medium">defi.app</span>
          <span className="text-xl font-bold">fomo</span>
          <span className="text-lg font-bold">ALF3</span>
          <span className="text-lg font-medium">SLINGSHOT</span>
          <span className="text-lg font-medium">vector</span>
          <span className="text-lg font-medium">Defined</span>
        </div>

        {/* Grid of app icons */}
        <div className="grid grid-cols-6 gap-4 max-w-2xl mx-auto">
          {/* Row 1 */}
          <div className="aspect-square bg-blue-900 rounded-lg flex items-center justify-center">
            <Image src="/placeholder.svg?height=40&width=40" alt="App icon" width={40} height={40} className="invert" />
          </div>
          <div className="aspect-square bg-white rounded-lg flex items-center justify-center border">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="aspect-square bg-black rounded-lg flex items-center justify-center">
            <div className="text-cyan-400 text-2xl font-bold">×</div>
          </div>
          <div className="aspect-square bg-green-800 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded"></div>
          </div>
          <div className="aspect-square bg-purple-100 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
          </div>
          <div className="aspect-square bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="text-white text-xl font-bold">B</div>
          </div>

          {/* Row 2 */}
          <div className="aspect-square bg-black rounded-lg flex items-center justify-center">
            <div className="text-white text-xl font-bold">W</div>
          </div>
          <div className="aspect-square bg-pink-100 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-pink-400 rounded"></div>
          </div>
          <div className="aspect-square bg-cyan-400 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded"></div>
          </div>
          <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
            <div className="text-white text-xl">⌂</div>
          </div>
          <div className="aspect-square bg-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-blue-600 text-xl font-bold">R</div>
          </div>
          <div className="aspect-square bg-teal-500 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded"></div>
          </div>

          {/* Row 3 */}
          <div className="aspect-square bg-yellow-500 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-black rounded-full"></div>
          </div>
          <div className="aspect-square bg-orange-400 rounded-lg flex items-center justify-center">
            <div className="text-white text-xl font-bold">S</div>
          </div>
          <div className="aspect-square bg-blue-500 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded"></div>
          </div>
          <div className="aspect-square bg-cyan-300 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-orange-400 rounded-full"></div>
          </div>
          <div className="aspect-square bg-black rounded-lg flex items-center justify-center">
            <div className="text-white text-xl">×</div>
          </div>
          <div className="aspect-square bg-cyan-300 rounded-lg flex items-center justify-center">
            <div className="text-white text-xl font-bold">C</div>
          </div>

          {/* Row 4 */}
          <div className="aspect-square bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded"></div>
          </div>
          <div className="aspect-square bg-white rounded-lg flex items-center justify-center border">
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
          </div>
          <div className="aspect-square bg-black rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded"></div>
          </div>
          <div className="aspect-square bg-blue-500 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded"></div>
          </div>
          <div className="aspect-square bg-white rounded-lg flex items-center justify-center border">
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
          </div>
          <div className="aspect-square bg-white rounded-lg flex items-center justify-center border">
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 