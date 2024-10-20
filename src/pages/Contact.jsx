import  { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from '../components/ui/moving-border';
import toast, { Toaster } from 'react-hot-toast';
import register from "../assets/images/register.jpg"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_6ysiswq',  // Replace with your EmailJS Service ID
      'template_digk4x7', // Replace with your EmailJS Template ID
      formData,
      '2zg1zUGnnhNLoEz_z'      // Replace with your EmailJS User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Successfully Msg Send!')
    }, (err) => {
      console.log('FAILED...', err);
    });

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  return (
    <div className="">
       <div className=" mt-16 md:mt-32  flex items-center gap-2 text-3xl  overflow-hidden capitalize font-bold pl-1 w-[90%] md:w-[96%] mx-auto  border-b  text-slate-300 py-2 sm:text-2xl md:text-2xl xl:text-3xl mb-20 border-[#0ea5e9]">
        Contact
        <div>
          <Button
            borderRadius="1.75rem"
            className=" border p-0 m-0 text-[#0ea5e9] border-[#0ea5e9]"
          >
            how to meet?
          </Button>
        </div>
      </div>

      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8  mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-[#0ea5e9] leading-tight lg:text-5xl">Let's talk!</h2>
            <div className="text-gray-400">Vivamus in nisl metus? Phasellus.</div>
          </div>
          <img src={register} alt="" className="p-6 h-52 md:h-64" />
        </div>
        <form noValidate="" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-sm">Full name</label>
            <input
              id="name"
              type="text"
              required
              placeholder=""
              className="w-full p-3 rounded bg-gray-800 border border-[#0ea5e9]"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full p-3 rounded bg-gray-800 border border-[#0ea5e9]"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea
              id="message"
              rows="3"
              required
              className="w-full p-3 rounded bg-gray-800 border border-[#0ea5e9]"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#0ea5e9] text-gray-900">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;