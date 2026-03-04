import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-black">
      <h1 className="font-heading text-8xl md:text-9xl font-bold text-[#00E5FF]/20 mb-4">404</h1>
      <h2 className="font-heading text-xl md:text-2xl tracking-wider text-white mb-6 text-center">
        Sayfa Bulunamadı
      </h2>
      <p className="text-gray-500 text-center max-w-md mb-10">
        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
      </p>
      <Link
        href="/"
        className="px-8 py-4 bg-[#FF003C] hover:bg-[#FF0044] text-white font-heading font-semibold tracking-widest transition-colors"
      >
        ANA SAYFAYA DÖN
      </Link>
    </div>
  );
}
