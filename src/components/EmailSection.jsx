"use client";
import React ,{useState ,useRef} from 'react'
import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon  from "../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const form = useRef( );
   

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_tsdcjqd', 'template_vj8ef3c', form.current, 'qf5k6VlZKIaWcLneM')
        .then((result) => {
            console.log(result.text);
            setEmailSubmitted(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80  z-0 blur-lg absolute top-3/4  -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'> 
            <h5 className='text-xl font-bold text-white my-2'>Lets Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {" "}I'm currently Looking for new opportunities , my inbox is always open , whether you have a question  or just  want to say hi , i'll try my best  to get back to you!
        </p>
        <div  className='socials flex flex-row gap-2'>
            <Link href="https://github.com/taha-ishaq">
                <Image src={GithubIcon} alt='Github Icon' />
            </Link>
            
            <Link href="https://www.linkedin.com/in/taha-ishaq-18048528a/">
                <Image src={LinkedinIcon} alt='linkedin Icon' />
            </Link>
        </div>
        </div>
        <div>
            <form ref={form} className='flex flex-col' onSubmit={sendEmail}>
                <div className='mb-6'>
                <label  className='text-white block mb-2  text-sm font-medium '>Your Email</label>
                <input type="email" name='user_email' className='bg-[#18191E] border border-[#33353F] placeholde-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' required placeholder='Taha@gmail.com' /> 
                </div>
                <div className='mb-6'>
                <label  className='text-white block mb-2 text-sm font-medium '>Name</label>
                <input type="text" name='user_name'  className='bg-[#18191E] border border-[#33353F] placeholde-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' required placeholder='Just saying Hi' /> 
                </div>
                <div className='mb-6'>
                    <label className='text-white block text-sm mb-2 font-medium'>Message</label>
                    <textarea name='message' id="message" className='bg-[#18191E] border border-[#33353F] placeholde-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Leave your Message Here'></textarea>
                </div>
                <button type='submit' value="Send"  className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message
                </button>
               
            </form>
            {emailSubmitted && <p className='text-green-500 text-sm mt-2'>Email sent</p>}
        </div>
    </section>
  )
            }

export default EmailSection
