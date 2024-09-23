import exp from "constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return(
     <div id="About">
        <section className="text-grey-600 font-bold bg-cover bg-center custom-image bg-fixed">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="... ring-2 ring-green-700/50 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center items-center outline-double outline-3 outline-offset-2 rounded-full aspect-square shadow-xl">

                    
<Image
    className="object-cover rounded-full outline-double outline-3 outline-offset-2 rounded-full aspect-square "
    alt="Profile Picture"
    width={500}
    height={500}
    src={require('../../../public/assets/Picture/Capture.PNG')}
/>
</div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-gray-800 mb-6 shadow-lg">
   More About Me
</h1>
      <p className="mb-8 leading-relaxed">
      Aspiring full-stack web developer with a solid foundation in web development technologies and a year of
            dedicated learning experience. With a Bachelor's degree in Commerce, I bring a unique blend of business
            acumen and technical curiosity to my pursuits.

            While my journey is rooted in academic learning and exploration, I am deeply passionate about honing my
            skills and applying theoretical knowledge to practical scenarios. My dedication to mastering the intricacies
            of web development is fueled by a commitment to continuous improvement and a thirst for knowledge.

           
      </p>
      <p className="mb-8 leading-relaxed text-grey-900">
      In addition to my focus on web development, I have delved into the realm of YouTube SEO optimization,
            leveraging my analytical skills to enhance the discoverability of digital content. Furthermore, my
            proficiency in Canva designing adds a creative dimension to my skill set, allowing me to craft visually
            compelling digital experiences.

            Driven by a relentless desire to grow and evolve, I am eager to transition from a learner to a hands-on
            practitioner, ready to tackle real-world challenges and contribute meaningfully to innovative projects.
      </p>
     
      <div className="flex justify-center">
      <Link href="/assets/cv.pdf">
                        <button className="font-semibold text-white bg-green-800 inline-flex items-center bg-gray-100 border-0 py-1 px-3 
                    focus:outline-none hover:bg-green-500 rounded text-base mt-4 md:mt-0">

                            View CV
                          
                        </button>
                    </Link>
       
      </div>
    </div>
  </div>
</section>

     </div>
    )
}

export default About