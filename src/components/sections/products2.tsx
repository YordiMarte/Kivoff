import Image from "next/image";
import { Box } from "lucide-react";
import { products2, type Product } from "@/config/products2";

function ProductMark({ product }: { product: Product }) {
  return (
    <div className="relative size-24">
      <div
        aria-hidden
        className="absolute inset-x-5 -bottom-2 h-6 rounded-full bg-brand/60 blur-xl"
      />

        {product.logo ? (
          <Image
            src={product.logo}
            alt=""
            sizes="96px"
            className="relative size-full rounded-[1.75rem] object-cover"
          />
        ) : (
        <div className="relative grid size-full place-items-center rounded-[1.75rem] bg-gradient-to-b from-white/[0.12] to-white/[0.02]">
          <Box className="size-10 text-foreground/80" aria-hidden />
        </div>
        )}

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-white/15 ring-inset"
      />
    </div>
  );
}

function ProductPreview({ product }: { product: Product }) {
  return (
    <div className="relative mt-14 w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_0_90px_-30px_rgb(0_220_130/0.35)]">
      {product.screenshot ? (
        <Image
          src={product.screenshot}
          alt={product.screenshotAlt ?? `${product.name} in action`}
          sizes="(min-width: 1152px) 1024px, 100vw"
          className="h-auto w-full"
        />
      ) : (
        <div
          aria-hidden
          className="grid aspect-[16/10] place-items-center bg-[radial-gradient(60%_60%_at_50%_0%,rgb(255_255_255/0.05),transparent)]"
        >
          <span className="text-xs tracking-widest text-muted-foreground/60 uppercase">
            {product.name} preview
          </span>
        </div>
      )}
    </div>
  );
}

export function Products2() {
  return (
    <section id="products" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-32">
        {products2.map((product2) => (
          <article
            key={product2.id}
            className="flex flex-col items-center text-center"
          >
            <ProductMark product={product2} />

            <h2 className="text-gradient mt-10 text-5xl font-medium tracking-tight sm:text-6xl">
              {product2.name}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-balance text-muted-foreground sm:text-lg">
              {product2.description}
            </p>

            <ProductPreview product={product2} />
          </article>
        ))}
      </div>
    </section>
  );
}