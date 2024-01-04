import HomeLayout from "../Layouts/HomeLayout";
import aboutMainimage from "../assets/Images/aboutmainimage.png";
import { celebrities } from "../Constants/CelebrityData";
import CarouselSlide from "../Components/CarouselSlide";

function AboutUs() {
    // Render the About Us page within the HomeLayout component
    return (
        <HomeLayout>
            {/* Main content for the About Us page */}
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    {/* Left section with text content */}
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and Quality Education
                        </h1>
                        <p className="text-xl text-gray-200 ">
                            {/* Description of the educational goals and mission */}
                            Our goal is to provide affordable and quality education to the world.
                            We are providing a platform for aspiring teachers and students to share
                            their skills, creativity, and knowledge with each other to empower and contribute
                            to the growth and wellness of mankind.
                        </p>
                    </section>
                    {/* Right section with the main image */}
                    <div className="w-1/2">
                        <img
                            id="test1"
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0, 0, 0))",
                            }}
                            className="w-50 h-80 drop-shadow-2xl"
                            src={aboutMainimage}
                            alt="about main image"
                        />
                    </div>
                </div>
                {/* Carousel section with celebrity data */}
                <div className="carousel m-auto w-1/2">
                    {celebrities && celebrities.map(celebrity => (
                        <CarouselSlide
                            {...celebrity}
                            key={celebrity.slideNumber}
                            totalSlides={celebrities.length}
                        />
                    ))}
                </div>
            </div>
        </HomeLayout>
    );
}

export default AboutUs;
