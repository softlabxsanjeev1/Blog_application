import React from 'react'

export default function About() {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='max-w-2xl mx-auto p-3 text-center'>
                <div>
                    <h1 className='text-3xl font font-semibold text-center my-7'>
                        About Tech Blog
                    </h1>
                    <div className='text-md text-gray-500 flex flex-col gap-6'>
                        <p>
                            Welcome to Tech Blog! This blog was created by Sanjeev Kumar
                            through this project i want to share tech informations.Here all passionate developer who loves to write about
                            technology, coding, and everything in between post their blogs.
                        </p>

                        <p>
                            On this blog, you will find weekly articles and tutorials on topics
                            such as web development, software engineering, and programming
                            languages.I always learning and exploring new
                            technologies, so be sure to check back often for new content!
                        </p>

                        <p>
                            We encourage you to leave comments on our posts and engage with
                            other readers. You can like other people's comments and reply to
                            them as well. We believe that a community of learners can help
                            each other grow and improve.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}