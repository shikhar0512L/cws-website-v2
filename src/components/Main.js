import React from 'react';
import Testimonials from './Testimonials';
import { Link } from "react-router-dom";

function Main() {
    return (
        <>             {/* The whole container */}
            <div className="flex bg-white h-96 container mx-auto">
                <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h2 className="text-3xl hover:animate-bounce font-semibold text-gray-800 md:text-4xl">Welcome to <span className="text-purple-800">CodeWithShikhar</span></h2>

                        <p className="mt-2 text-sm text-gray-500 md:text-base ">
                            We are in a mission to help that people who want to learn coding but cannot afford to buy a course. And to make it easy to all of our CWS family to understand programming Only you need is a laptop/desktop and a good internet connection.
                        </p>

                        <div className=" lg:justify-start mt-6">
                            <div className="space-y-3 items-center">
                                <a href="https://discord.gg/qHs5NF9SeM" rel="noreferrer"  className="px-3 py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800 hover:animate-bounce hover:text-white" target="_blank">Discord</a>
                                <a href="https://www.youtube.com/channel/UCUAF4OuZMv39rP-xM2amj0Q?sub_confirmation=1" rel="noreferrer"  className="px-3 py-2 mx-4 lg:px-4 lg:py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400 hover:animate-bounce hover:text-gray-900" target="_blank">Subscribe</a>

                                <Link to="/blog" className="grid px-3 py-2 mx-9 lg:px-4 lg:py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400 hover:animate-bounce hover:text-gray-900 md:hidden">Blogs</Link>

                                <Link to="/Contact" className=" grid py-2 mx-9 lg:px-4 lg:py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400 hover:animate-bounce hover:text-gray-900 md:hidden">Contact</Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2" style={{ clipPath: "polygon(10% 0px, 100% 0%, 100% 100%, 0px 100%)" }}>
                    <div className="h-full object-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80')" }}>
                        <div className="h-full bg-black opacity-25"></div>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-medium title-font text-gray-900 my-10 text-center hover:animate-bounce">Recommended Courses</h2>
            <div className="flex flex-wrap">
                <div className="lg:p-4 md:w-1/3 flex justify-center">
                    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                        <img className="w-full" src="https://cdn.discordapp.com/attachments/886151983902388234/941975249052917790/code2.png" alt="Tailwind Course In Hindi" />
                        <div className="px-6 py-4 lg:h-52">
                            <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Free Course</span>
                            <div className="title-font text-lg font-medium text-gray-900 mb-3 hover:animate-bounce hover:text-black">
                                <a href="https://www.youtube.com/playlist?list=PLdKLG_PbpWy2HzwP3NP-AslMWgmWUA0o-" rel="noreferrer"  target="_blank">Web Dev Tutorials For Beginners</a>
                            </div>
                            <p className="text-gray-700 text-base">This is one of my favorite courses. In this series, you'll learn about HTML, CSS, JavaScript, and everything needed to be a job-ready web developer. Just hop on, man.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:p-4 md:w-1/3 flex justify-center">
                    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                        <img className="w-full" src="https://cdn.discordapp.com/attachments/886151983902388234/941979472951930890/code3.png" alt="js Tutorials For Beginners" />
                        <div className="px-6 py-4 lg:h-52">
                            <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Free Course</span>
                            <div className="title-font text-lg font-medium text-gray-900 mb-3 hover:animate-bounce hover:text-black">
                                <a href="https://www.youtube.com/playlist?list=PLdKLG_PbpWy2MNk2KNzpCTfpo4ccKdAU0" rel="noreferrer"  target="_blank">JavaScript tutorial for beginners</a>
                            </div>
                            <p className="text-gray-700 text-base">JavaScript is an essential element for the web developers. If you want to take your web development journey one step ahead then you enroll in this course.

                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:p-4 md:w-1/3 flex justify-center">
                    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                        <img className="w-full" src="https://cdn.discordapp.com/attachments/886151983902388234/941970661222514698/code.png" alt="React Js Tutorials For Beginners" />
                        <div className="px-6 py-4 lg:h-52">
                            <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Free Course</span>
                            <div className="title-font text-lg font-medium text-gray-900 mb-3 hover:animate-bounce hover:text-black">
                                <a href="https://www.youtube.com/playlist?list=PLdKLG_PbpWy2yNSxKeBCK6MOvu4jhlCj-" rel="noreferrer"  target="_blank">React Js Tutorials For Beginners</a>
                            </div>
                            <p className="text-gray-700 text-base">React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials />
        </>
    )
}

export default Main;