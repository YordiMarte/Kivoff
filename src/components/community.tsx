'use client'

import React from "react"
import { motion } from "@/lib/motion"
import { Github, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"


const community = [
  {
    name: 'Tex',
    handle: '@thatguy_tex',
    avatar: '/avatars/foto1.png',
    text: "Working with @kivoff has been one of the best dev experiences I've had lately. Incredibly easy to set up, great documentation, and so many fewer hoops to jump through than the competition. I definitely plan to use it on any and all future projects.",
  },
  {
    name: 'IxoyeDesign',
    handle: '@IxoyeDesign',
    avatar: '/avatars/user-2.png',
    text: '@kivoff is just 🤯 Now I see why a lot of people love using it as a backend for their applications. I am really impressed with how easy it is to set.',
  },
  {
    name: 'Sergio',
    handle: '@sergio_dev',
    avatar: '/avatars/user-3.png',
        text: "Just started using @kivoff and I'm already blown away by how easy it is to set up and use. The AI tools are a game changer for my workflow. Highly recommend!",
    },

    {
        name: 'Mia',
        handle: '@mia_dev',
        avatar: '/avatars/user-4.png',
        text: "Kivoff has transformed the way I build and deploy applications. The AI-powered features are incredibly intuitive and save me so much time. Can't imagine going back to my old workflow!",
    },

    {
        name: 'Alex',
        handle: '@alex_dev',
        avatar: '/avatars/user-5.png',
        text: "As a solo developer, Kivoff has been a lifesaver. The tools are powerful yet easy to use, and the community support is fantastic. It's like having a team of experts at my fingertips.",
    }

    ,
    {
        name: 'Jordan',
        handle: '@jordan_dev',
        avatar: '/avatars/user-6.png',
        text: "Kivoff has completely changed the way I approach development. The AI tools are incredibly powerful and have saved me countless hours of work.",
    },
    {
        name: 'Liam',
        handle: '@liam_dev',
        avatar: '/avatars/user-7.png',
        text: "I've been using Kivoff for a while now, and it's been a game changer for my development workflow. The AI features are super helpful, and the community is really active.",
    },
    {
        name: 'Emma',
        handle: '@emma_dev',
        avatar: '/avatars/user-8.png',
        text: "Kivoff has been a huge time saver for me. The AI tools are super intuitive, and the community is really supportive. I highly recommend it to anyone looking to build something with Kivoff.",
    },
    {
        name: 'Olivia',
        handle: '@olivia_dev',
        avatar: '/avatars/user-9.png',
        text: "Kivoff has made my development process so much smoother. The AI tools are incredibly powerful, and the community is always there to help out.",
    },
    {
        name: 'Ava',
        handle: '@ava_dev',
        avatar: '/avatars/user-10.png',
        text: "I've been using Kivoff for a while now, and it's been a game changer for my development workflow. The AI features are super helpful, and the community is really active.",
    },
    {
        name: 'Noah',
        handle: '@noah_dev',
        avatar: '/avatars/user-11.png',
        text: "Kivoff has been a huge time saver for me. The AI tools are super intuitive, and the community is really supportive. I highly recommend it to anyone looking to build something with Kivoff.",
    }
]


export function Community() {
  // Solo los primeros cinco testimonios
  const visibleCommunity = community.slice(0, 11);

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join the community
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Feedback from the community of developers using kivoff
          </p>
        </div>

        {/* Animación de scroll infinito */}
        <div className="overflow-hidden relative">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, -1500, 0] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="flex gap-6"
          >
            {visibleCommunity.map((person) => (
              <div
                key={person.handle}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col items-center text-center min-w-[320px] max-w-xs mx-auto"
              >
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="h-16 w-16 rounded-full mb-4 border border-gray-100 shadow"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-snug">
                  {person.name}
                </h3>
                <span className="text-xs text-gray-400 mb-2">{person.handle}</span>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {person.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}



