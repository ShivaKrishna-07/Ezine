import Image from "next/image"
import banner from "../images/bannerImg.jpg"

export const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
        <Image
            src={banner}
            alt="banner img"
            className="w-full max-h-screen object-contain"
        />
        <div className="absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center">
            <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold">Tailor Smith</h2>
            <p>Traveler, Photographer</p>


        </div>
    </div>
  )
}
