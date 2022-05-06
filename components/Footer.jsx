import Link from 'next/link'
import { MdCopyright } from 'react-icons/md'
import { BsTwitter, BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs'
const Footer = () => {
  const footerItems = [
    {
      heading: 'Products',
      lists: ['Web Development', 'Mobile App', 'Web Apps'],
    },
    {
      heading: 'Resources',
      lists: ['Blog', 'Mockups', 'Templates', 'Industries & tools'],
    },
    {
      heading: 'Company',
      lists: [
        'Diversity & Inclusion',
        'About Us',
        'Customer Stories',
        'Online Communities',
      ],
    },
  ]
  const socialLinks = [
    { icon: <BsTwitter size={20} />, url: 'https://twitter.com/norej_udeisa' },
    { icon: <BsGithub size={20} />, url: 'https://github.com/jeronasiedu' },
    {
      icon: <BsLinkedin size={20} />,
      url: 'https://linkedin.com/in/jeronasiedu',
    },
    { icon: <BsFacebook size={20} />, url: '/' },
  ]
  return (
    <footer className="px-4 py-16 mx-auto space-y-8 max-w-7xl">
      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row md:justify-between">
        <div className="">
          <h3 className="mb-2 text-2xl">JTECH</h3>
          <p className="text-lg text-gray-500 dark:text-slate-300">
            Bring your creative ideas to life
          </p>
        </div>
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:space-x-8 lg:flex-row">
          {footerItems.map((item, idx) => (
            <div key={idx}>
              <h6 className="mb-1 text-lg font-medium">{item.heading}</h6>
              <ul className="space-y-1">
                {item.lists.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    <Link href="/">
                      <a className="text-gray-700 dark:text-slate-300">
                        {item}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <small className="flex items-center text-base text-gray-600 dark:text-slate-300">
          <MdCopyright className="mr-1" />
          {new Date().getFullYear()} {''}JTECH. All Rights reserved
        </small>
        <div className="flex items-center space-x-6">
          {socialLinks.map((item, idx) => (
            <Link href={item.url} key={idx}>
              <a
                className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-full md:w-10 md:h-10 bg-slate-200 text-slate-500 focus:ring focus:ring-blue-500 focus:outline-none dark:text-blue-600 dark:bg-slate-800 hover:-translate-y-1 "
                target="_blank"
              >
                {item.icon}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
