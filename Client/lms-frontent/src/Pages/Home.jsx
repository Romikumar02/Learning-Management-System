import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import Bgimage from "../assets/Images/backgroundmainimage.png";

function HomePage() {
    // Render the Home page within the HomeLayout component
    return (
        <HomeLayout>
            {/* Main content for the Home page */}
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                {/* Left section with text content */}
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">
                        {/* Main heading with a span for styling */}
                        Find out Best <span className="text-yellow-500 font-bold">Online Courses</span>
                    </h1>
                    <p className="text-xl text-gray-200">
                        {/* Description of the online courses */}
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                    </p>
                    <div className="space-x-6">
                        {/* Buttons to explore courses and contact */}
                        <Link to="/courses">
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-large cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore courses
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-large cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact us
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Right section with the homepage image */}
                <div className="w-1/2 flex item-center justify-center">
                    <img src={Bgimage} alt="Homepage image" />
                </div>
            </div>
        </HomeLayout>
    );
}

export default HomePage;
