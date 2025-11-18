import { motion } from 'framer-motion'

export default function SocialProof() {
  const logos = [
    { name: 'Acme', src: 'https://dummyimage.com/140x40/ffffff/000000&text=Acme' },
    { name: 'Globex', src: 'https://dummyimage.com/140x40/ffffff/000000&text=Globex' },
    { name: 'Umbrella', src: 'https://dummyimage.com/140x40/ffffff/000000&text=Umbrella' },
    { name: 'Initech', src: 'https://dummyimage.com/140x40/ffffff/000000&text=Initech' },
    { name: 'Hooli', src: 'https://dummyimage.com/140x40/ffffff/000000&text=Hooli' },
  ]

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-slate-300 mb-6">Supporting tax teams managing 300,000+ workflows annually.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {logos.map((l, i) => (
            <motion.img
              key={l.name}
              src={l.src}
              alt={l.name}
              className="w-full opacity-70 hover:opacity-100 transition"
              initial={{opacity:0, y:10}}
              whileInView={{opacity:0.8, y:0}}
              viewport={{ once: true }}
              transition={{delay: i * 0.05, duration:0.5}}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
