import Image from 'next/image'
import Divider from './Divider'
const Audience = () => {
  const teams = [
    {
      title: 'Developers',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex expedita incidunt culpa tempora aliquid eveniet excepturi! Sint exercitationem iste nihil, aliquid quia inventore, culpa tenetur minus repudiandae, ducimus ut.',
      dot: 'text-yellow-600',
    },
    {
      title: 'Designers',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex expedita incidunt culpa tempora aliquid eveniet excepturi! Sint exercitationem iste nihil, aliquid quia inventore, culpa tenetur minus repudiandae, ducimus ut.',
      dot: 'text-green-600',
    },
    {
      title: 'Devops',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ex expedita incidunt culpa tempora aliquid eveniet excepturi! Sint exercitationem iste nihil, aliquid quia inventore, culpa tenetur minus repudiandae, ducimus ut.',
      dot: 'text-blue-600',
    },
  ]

  return (
    <section className="relative w-full bg-slate-50 dark:bg-transparent ">
      <Divider />
      <div className="px-4 py-16 mx-auto space-y-8 max-w-7xl">
        <div className="max-w-4xl px-4 mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-center md:text-5xl lg:text-6xl">
            From the big picture to every{' '}
            <span className="text-blue-600">tiny detail,</span> we got you
            covered
          </h2>
        </div>
        <div className="flex flex-col items-center max-w-6xl space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
          <div className="flex-1">
            <Image
              src="/images/asset6.png"
              alt="developers at work"
              objectFit="cover"
              width={540}
              height={520}
              placeholder="blur"
              blurDataURL="/images/asset6.png"
            />
          </div>
          <div className="flex-1 space-y-10">
            {teams.map((item, idx) => (
              <div className="space-y-2 " key={idx}>
                <h2 className="text-3xl font-semibold ">
                  <span className={item.dot}>.</span> {item.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Audience
