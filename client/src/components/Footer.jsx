import React from 'react'
import { Footer } from 'flowbite-react';
import { FcAbout } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
    return (
        <Footer container className='border border-t-10'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='w-full sm:flex sm:items-center sm:justify-between'>
                        <Footer.Copyright
                            href='#'
                            by="Tech Blog"
                            year={new Date().getFullYear()}
                        />
                        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                            <Footer.Icon href='https://sanjeev-portfolio-softlabxsanjeev1s-projects.vercel.app/' icon={FcAbout} />
                            <Footer.Icon href='https://www.instagram.com/sanjeevkumar282000/' icon={BsInstagram} />
                            <Footer.Icon href='https://www.linkedin.com/in/sanjeev28kumar/' icon={FaLinkedin} />
                            <Footer.Icon href='https://github.com/softlabxsanjeev1' icon={BsGithub} />
                            <Footer.Icon href='#' icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </div>
        </Footer>
    );
}