import Image from "next/image"
export default function HeroSection() {

    return (
      <>
        <div className="container  h-screen  flex justify-between text-center py-4 px-6 bg-blue-800 text-white mx-auto   ">
      

       

         

          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Get More Done with <span className="text-white flex">Whitespace</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Project management software that enables your teams to collaborate,
              plan, analyze, and manage everyday tasks.
            </p>
             <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6  rounded-lg shadow-lg transition">
              Try Whitespace Free →
            </button> 
           

      
 
  </div>
              {/* right section */}
              <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="bg-blue-100 rounded-lg shadow-lg h-60 w-full"></div>
        </div>
      
    </div>
        
        {/* Left Side - Project Management */}
        <div className="container  h-screen  flex justify-between  py-4 px-6 bg-white text-black mx-auto mt-[100px]  ">
        <div className="md:w-1/2 text-center md:text-left ">
  
          <h1 className="text-4xl font-bold mb-4 whitespace-nowrap  ">
            Project Management
            <Image className="flex justify-items-end md:w-1/2  md:mt-0 mt-6 ml-2 px-4 py-2 w-[30px ]"


src="/image/Element.png" width={500} height={500}
alt=" image"

/>
          </h1>
          <p className="text-gray-600">
            Images, videos, PDFs and audio files are supported. 
            Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          
          
          
          <button className="w-40 h-10 bg-blue-500 hover:bg-blue-800  text-white rounded ">
  Get Started →
</button>
  </div>      
        
        
        {/* Right Side - Placeholder for Image */}
       < div className=" flex md:w-1/2 mt-10 md:mt-0">
          <div className="bg-blue-100 rounded-lg shadow-lg h-64 w-full"></div>
        
      </div>
  
   

     </div>


  <div className="container  h-screen  flex justify-between  py-4 px-6 bg-white text-black mx-auto -mb-52 ">
    {/* right */}
    <div className="md:w-1/2 text-center md:text-left">
    <Image className="flex md:w-1/2  md:mt-0 mt-6 px-4 py-2"
  src="/image/Work Together Image.png" width={200} height={200}
  alt="Description of image"
  
/>

  
  </div>
    
            {/* Left Section */}
            <div className="  md:w-1/2  text-center md:text-left">
            {/* <h1 className="  text-4xl md:text-5xl  leading-tight font-bold  mb-6">
              Work Togather
            </h1> */}
            <h1 className="text-4xl font-bold mb-4 whitespace-nowrap  ">work
    Togather 
  <Image className="flex justify-items-end md:w-1/2  md:mt-0 mt-6 ml-20 px-4 py-2"


  src="/image/Element.png" width={500} height={500}
  alt=" image"
  
/>
</h1>

            <p className="text-lg text-black-300 mb-8">
              Project management software that enables your teams to collaborate,
              plan, analyze, and manage everyday tasks.
            </p>
             <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6  rounded-lg shadow-lg transition text-xl font-bold">
               try on it → 
              {/* <div className="text-xl font-bold">

  Try it now &rarr;
</div> */}

            </button> 
    </div>       

      
 
       
 
  
       </div>
  





       {/* 3rd th part */} 
      
       <div className="container  h-screen  py-4 px-6 bg-slate-200 text-black mx-auto  ">
       <div className="md:w-1/2 text-center md:text-left  ">
        <h1 className="text-4xl font-bold mb-5 whitespace-nowrap text-center ">choose your palne</h1>
       
       <p className="flex justify-center">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote </p> <p>has the right plan for you.</p>
        </div>
        <div className="flex  justify-cente w-3/6 h-80">
        <Image className=" md:w-1/2  md:mt-0 mt-6  px-4 py-2"


src="/image/price-1.png" width={500} height={500}
alt=" image"

/>
<Image className="flex md:w-1/2  md:mt-0 mt-6  px-4 py-2"


src="/image/price-2.png" width={500} height={500}
alt=" image"

/>
<Image className="md:w-1/2  md:mt-0 mt-6  px-4 py-2"


src="/image/price-3.png" width={500} height={500}
alt=" image"

/>
</div>
</div>



        
        
  </>
    
    
    
    
  )
}



      
        
      
    
  
  