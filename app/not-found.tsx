import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-black">
      <h1 className="font-heading text-8xl md:text-9xl font-bold text-slate-600 mb-4">404</h1>
      <h2 className="font-heading text-xl md:text-2xl tracking-wider text-white mb-6 text-center">
        Sayfa Bulunamadı
      </h2>
      <p className="text-gray-500 text-center max-w-md mb-10">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <Link
        href="/"
        className="px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-heading font-semibold tracking-widest transition-colors"
      >
        ANA SAYFAYA DÖN
      </Link>
    </div>
  );
}
