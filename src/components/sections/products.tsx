import Image from "next/image";
import { Box } from "lucide-react";
import { products, type Product } from "@/config/products";

function ProductMark({ product }: { product: Product }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-x-5 -bottom-2 h-6 rounded-full bg-brand/60 blur-xl"
      />
      <div className="relative grid size-24 place-items-center rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.12] to-white/[0.02] shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] backdrop-blur">
        {product.logo ? (
          <Image
            src={product.logo}
            alt=""
            className="size-14 object-contain"
          />
        ) : (
          <Box className="size-10 text-foreground/80" aria-hidden />
        )}
      </div>
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

export function Products() {
  return (
    <section id="products" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-32">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex flex-col items-center text-center"
          >
            <ProductMark product={product} />

            <h2 className="text-gradient mt-10 text-5xl font-medium tracking-tight sm:text-6xl">
              {product.name}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-balance text-muted-foreground sm:text-lg">
              {product.description}
            </p>

            <ProductPreview product={product} />
          </article>
        ))}
      </div>
    </section>
  );
}