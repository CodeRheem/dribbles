export default function AboutUs() {
  return (
    <>
      <div className="relative border border-white flex flex-row justify-start items-center gap-4 py-4 px-4 rounded-lg w-4/5 max-w-5xl mx-auto h-66 mt-24">
        <div className="border border-white rounded-lg w-60 h-60 overflow-hidden shrink-0">
          <img
            src="public/nicolas-lafargue-Fj7l30GcAEQ-unsplash.jpg"
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="border border-white rounded-lg w-full bg-white h-60 ">
          <div className="pl-9">
            <h2 className="text-lg font-bold-sm mt-8 mb-2 font-[outfit] dark:text-black">About Us</h2>
            <p className="text-gray-700 text-sm font-[outfit]">
              We offer the latest technologies in audio and provide a wide range of products <br /> to meet the needs of every customer.
            </p>
            <div className="flex flex-row justify-start items-center gap-4 mt-4 font-[outfit] text-white">
              <div className="border border-white bg-black rounded-lg w-25 h-13 flex flex-col items-center justify-center">
                <div className="text-sm">12Y</div>
                <div className="text-[10px] text-gray-400">Experience</div>
              </div>
              <div className="border border-white bg-black rounded-lg w-25 h-13 flex flex-col items-center justify-center">
                <div className="text-sm">4K</div>
                <div className="text-[10px] text-gray-400">Products</div>
              </div>
              <div className="border border-white bg-black rounded-lg w-25 h-13 flex flex-col items-center justify-center">
                <div className="text-sm ">40K</div>
                <div className="text-[10px] text-gray-400">Happy clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}