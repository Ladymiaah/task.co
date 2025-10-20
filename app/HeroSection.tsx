import Image from "next/image";

export default function HeroSection() {
    return(
        <div>
            <main className="bg-[#ffffff] ">
                <h1 className="text-3xl sm:text-6xl text-[#010101] text-center pt-5 sm:pt-20">
                    Boost Productivity with <br/> the Best Platform
                </h1>
                <p className="pt-3 text-sm sm:text-lg text-center text-[#777777] ">
                    Organize, Priortize, and complete your task more efficiently in one trusted platform
                </p>
                 <Image 
                 src="/Hero Img.png" 
                 alt="Hero image" 
                 width={1300} 
                 height={400} 
                 className="mx-auto" />

                  <Image 
                 src="/img1.png" 
                 alt="Hero image" 
                 width={1300} 
                 height={200} 
                 className="mx-auto" />
            </main>
            <div className="bg-[#f2f3fb] pt-5 sm:pt-10">
                <h1 className="text-3xl sm:text-6xl text-[#010101] text-center">
                    Optimize Time and <br/> Complete More Tasks
                </h1>
            <p className="pt-3 text-sm sm:text-lg text-center text-[#777777] ">
                Supercharge productivity. Streamline work by doing it, and seeing it, in one place.
            </p>
             <Image 
                 src="/img2.png" 
                 alt="task image" 
                 width={1300} 
                 height={200} 
                 className="mx-auto pt-5 sm:pt-10" />
            </div>
            <div className="bg-[#ffffff] pt-5 sm:pt-10">
                <h1 className="text-2xl sm:text-6xl text-[#010101] text-center">
                    Everything your team is looking for
                </h1>
        <p className="pt-3 text-sm sm:text-lg text-center text-[#777777] ">
          Task.co&apos;s incredible flexibility can handle any type of job. And we never stop innovating.
        </p>
                 <Image 
                 src="/img3.png" 
                 alt="flexibility image" 
                 width={1300} 
                 height={200} 
                 className="mx-auto pt-5 sm:pt-10" />

                 <h1 className="text-3xl sm:text-6xl text-[#010101] text-center pt-6 sm:pt-20">
                    People love us, and we <br/> love them back
                 </h1>
                 <p className="pt-3 text-sm sm:text-lg text-center text-[#777777] ">
                    Productivity platform Task.co is always innovating by releasing <br/> new feature request every week
                 </p>
                 <Image 
                 src="/img4.png" 
                 alt="Product image" 
                 width={1200} 
                 height={200} 
                 className="mx-auto pt-5 sm:pt-10" />
            </div>
            <div className="bg-gradient-to-b from-[#f5f6fd]  via-[#b5b4f4] to-[#f1f1fc] pt-10 sm:pt-20">
                <h1 className="text-[#fcfdfd] text-6xl text-center">
                     Join us! Be Part of the <br/> Smart Work Resolution
                </h1>
                <p className="pt-3 text-sm sm:text-lg text-center text-[#fcfdfd]">
                    Join Us and Be Part of the change in Creating Smarter. Efficient and Productive 
                    <br className="hidden sm:block"/>
                    Working Methods at Every Step!
                  </p>
                 <Image 
                 src="/img5.png" 
                 alt="Product image" 
                 width={1200} 
                 height={200} 
                 className="mx-auto pt-5 sm:pt-10" />
                 </div>
              <div className="bg-white w-full px-6 py-10">
  {/* Container: side-by-side on desktop, stacked on mobile */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
    
    {/* Left Section */}
    <div className="space-y-4 max-w-md">
      {/* Logo */}
      <div className="flex items-center space-x-1">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <h1 className="text-xl text-[#212121] font-bold">Task.Co</h1>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-lg text-[#777777]">
        Productivity platform Task.co is always innovating by releasing feature
        requests every week.
      </p>

      {/* Contact */}
      <div className="flex items-center space-x-2">
        <Image src="/icon.png" alt="message icon" width={30} height={30} />
        <p className="text-sm sm:text-lg text-[#777777]">
          connect@task.co.id
        </p>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full sm:w-[35rem] h-[15rem] bg-white rounded-lg shadow-xl flex flex-col justify-between p-4">
      <h1 className="text-sm text-[#777777]">Send your message</h1>
      <button className="bg-[#7e77c9] px-4 py-2 rounded-lg text-[#fcfdfd] self-end">
        Send
      </button>
    </div>

  </div>
  <div className="sm:flex sm:justify-between pt-20">
    <h1 className="text-sm font-bold">2024 task.co. All Rights reserved.</h1>
    <div className="sm:flex sm:justify between gap-6">
        <p className="text-sm font-bold "> Privacy Policy  </p>
        <p className="text-sm font-bold "> Terms of Use </p>
        <p className="text-sm font-bold "> Cancellation & Refund </p>
        <p className="text-sm font-bold "> Contact Us </p>
        
    </div>
  </div>
</div>

        </div>
    )
}