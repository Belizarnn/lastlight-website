import Link from "next/link";

export const metadata = {
  title: "Gizlilik Politikası",
  description: "Last Light gizlilik politikası ve veri koruma bilgileri.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-block text-slate-400 hover:underline font-heading text-sm tracking-wider mb-12"
        >
          ← Ana Sayfa
        </Link>
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-wider mb-8">
          Gizlilik Politikası
        </h1>
        <p className="text-gray-500 text-sm mb-10">Son güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>
        <div className="prose prose-invert prose-sm space-y-6 text-gray-300">
          <p>
            Last Light (&quot;biz&quot;, &quot;bize&quot;) olarak gizliliğinize saygı duyuyoruz. Bu politikada web sitemizi
            ziyaret ettiğinizde topladığımız bilgileri ve bunları nasıl kullandığımızı açıklıyoruz.
          </p>
          <h2 className="font-heading text-xl text-white mt-8">Toplanan Bilgiler</h2>
          <p>
            İletişim formu üzerinden gönderdiğiniz ad, e-posta ve mesaj içeriği iletilir. Bu bilgiler yalnızca
            talebinize yanıt vermek amacıyla kullanılır.
          </p>
          <h2 className="font-heading text-xl text-white mt-8">Çerezler</h2>
          <p>
            Dil tercihiniz gibi temel site işlevleri için oturum depolama kullanıyoruz. Üçüncü taraf izleme
            çerezleri kullanmıyoruz.
          </p>
          <h2 className="font-heading text-xl text-white mt-8">İletişim</h2>
          <p>
            Sorularınız için:{" "}
            <a href="mailto:hello@lastlight.studio" className="text-slate-400 hover:underline">
              hello@lastlight.studio
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
