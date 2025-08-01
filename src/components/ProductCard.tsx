import { div, span } from 'framer-motion/client';
import { features } from 'process';
import React from 'react';

export function ProductCard({
    logo,
    name,
    status,
    statusColor,
    description,
    features,
    link,
}: {
    logo: string;
    name: string;
    status: string;
    statusColor: string;
    description: string;
    features: string[];
    link: string;
}) {
    <img src={logo} alt={name + "logo"} className="h-12 w-12 rounded-lg" />
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 w-full max-w-md min-h-[340px">
            <div className="flex items-center gap-3">
                <div className="flex flex-col">
                <img src={logo} alt={name + "logo"} className="h-12 w-12 rounded-lg" />
                <span className="text-xl font-semibold text-gray-900">{name}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor}` }>
                    {status}
                </span>
            </div>
        </div>
        <p className='text-gray-600'>{description}</p>
        <div className="grid grid-cols-2 gap-2 my-2">
            {features.map((f) => (
                <span
                    key={f}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-lg text-center"
                    >
                        {f}
                    </span>
                ))}
            </div>
            <div className='mt-auto'>
                <a href={link}
                className='inline-flex items-center gap-1 text-indigo-600 font-semibold hover:underline'
                >
                    Explore <span aria-hidden>→</span>
                </a>
            </div>
        </div>
    )
}
