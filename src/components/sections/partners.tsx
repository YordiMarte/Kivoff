import Image from "next/image";
import { partners, partnersCopy } from "@/config/partners";

export function Partners() {
    return (
        <section
         aria-labelledby="partners-heading"
         className="relative px-6 py-16 sm:py-24"
        >
            <div className="mx-auto max-w-4xl text-center">
                <h2
                    id="partners-heading"
                    className="mx-auto max-w-md text-balance text-base text-muted-foreground sm:text-lg"
                >
                    {partnersCopy.heading}
                </h2>

                <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
                    {partners.map((partner) => (
                        <li key={partner.name} className="flex items-center">
                            {partner.logo ? (
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                className="h-7 w-auto opacity-60 brightness-0 invert transition-opacity hover:opacity-100"
                            />
                        ) : (
                            <span className="text-xl font-semibold tracking-light text-foreground/60 transition-colors hover:text-foreground">
                                {partner.name}
                            </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>        
    );
}