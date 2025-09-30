import React from 'react';

export type Status = 'online' | 'recently_active' | 'offline';

export const getActivityStatus = (lastSeen: string): Status => {
    const now = new Date();
    const lastSeenDate = new Date(lastSeen);
    const timeDiff = now.getTime() - lastSeenDate.getTime();
    const minutesDiff = timeDiff / (1000 * 60);

    if (minutesDiff < 5) return 'online';
    if (minutesDiff < 30) return 'recently_active';
    return 'offline';
};

export const testimonialsData = [
    {
        name: 'Tex',
        handle: '@thatguy_tex',
        avatar: '/avatar/Tex.svg',
        text: "Working with @kivoff has been one of the best dev experiences I've had lately. Incredibly easy to set up, great documentation, and so many fewer hoops to jump through than the competition. I definitely plan to use it on any and all future projects.",
        lastSeen: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    },
    {
        name: 'IxoyeDesign',
        handle: '@IxoyeDesign',
        avatar: '/avatar/Ixo.svg',
        text: '@kivoff is just 🤯 Now I see why a lot of people love using it as a backend for their applications. I am really impressed with how easy it is to set.',
        lastSeen: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    },
    {
        name: 'Sergio',
        handle: '@sergio_dev',
        avatar: '/avatar/Sergio.svg',
        text: "Just started using @kivoff and I'm already blown away by how easy it is to set up and use. The AI tools are a game changer for my workflow. Highly recommend!",
        lastSeen: new Date(Date.now() - 1 * 60 * 1000).toISOString(),
    },
    {
        name: 'Mia',
        handle: '@mia_dev',
        avatar: '/avatar/Mia.svg',
        text: "Kivoff has transformed the way I build and deploy applications. The AI-powered features are incredibly intuitive and save me so much time. Can't imagine going back to my old workflow!",
        lastSeen: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    },
    {
        name: 'Alex',
        handle: '@alex_dev',
        avatar: '/avatar/Ale.svg',
        text: "As a solo developer, Kivoff has been a lifesaver. The tools are powerful yet easy to use, and the community support is fantastic. It's like having a team of experts at my fingertips.",
        lastSeen: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
    },
    {
        name: 'Jordan',
        handle: '@jordan_dev',
        avatar: '/avatar/Jorda.svg',
        text: "Kivoff has completely changed the way I approach development. The AI tools are incredibly powerful and have saved me countless hours of work.",
        lastSeen: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
    },
    {
        name: 'Liam',
        handle: '@liam_dev',
        avatar: '/avatar/Liam.svg',
        text: "I've been using Kivoff for a while now, and it's been a game changer for my development workflow. The AI features are super helpful, and the community is really active.",
        lastSeen: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    },
    {
        name: 'Emma',
        handle: '@emma_dev',
        avatar: '/avatar/Ema.svg',
        text: "Kivoff has been a huge time saver for me. The AI tools are super intuitive, and the community is really supportive. I highly recommend it to anyone looking to build something with Kivoff.",
        lastSeen: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    },
    {
        name: 'Olivia',
        handle: '@olivia_dev',
        avatar: '/avatar/Olivia.svg',
        text: "Kivoff has made my development process so much smoother. The AI tools are incredibly powerful, and the community is always there to help out.",
        lastSeen: new Date(Date.now() - 1 * 60 * 1000).toISOString(),
    },
    {
        name: 'Ava',
        handle: '@ava_dev',
        avatar: '/avatar/ava.svg',
        text: "I've been using Kivoff for a while now, and it's been a game changer for my development workflow. The AI features are super helpful, and the community is really active.",
        lastSeen: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    },
    {
        name: 'Noah',
        handle: '@noah_dev',
        avatar: '/avatar/Noah.svg',
        text: "Kivoff has been a huge time saver for me. The AI tools are super intuitive, and the community is really supportive. I highly recommend it to anyone looking to build something with Kivoff.",
        lastSeen: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
    }
];