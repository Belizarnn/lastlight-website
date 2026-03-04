# Last Light Websitesi Yayına Alma Rehberi

Bu rehber siteyi **GitHub**, **Vercel** ve **Neon** kullanarak yayına almanızı anlatır.

---

## 1. GitHub’a Projeyi Yükleme

### 1.1 Git Kurulu mu Kontrol Et
```powershell
git --version
```
Yüklü değilse: https://git-scm.com/download/win

### 1.2 GitHub’da Yeni Repo Oluştur
1. https://github.com adresine gidin
2. Sağ üst **“New repository”** tıklayın
3. Repository adı: `lastlight-website` (veya istediğiniz)
4. **Public** seçin, **Create repository** tıklayın

### 1.3 Projeyi GitHub’a Gönderin
```powershell
cd c:\Users\yavuz\OneDrive\Desktop\lastlight-website\my-app
git init
git add .
git commit -m "Initial commit - Last Light website"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/lastlight-website.git
git push -u origin main
```

> **Not:** `KULLANICI_ADINIZ` yerine kendi GitHub kullanıcı adınızı yazın. Repo adını değiştirdiyseniz URL’yi buna göre güncelleyin.

---

## 2. Vercel ile Yayına Alma

### 2.1 Vercel Hesabı
1. https://vercel.com adresine gidin
2. **Sign Up** → **Continue with GitHub**
3. GitHub hesabınızla giriş yapın

### 2.2 Projeyi İçe Aktarın
1. https://vercel.com/new
2. **Import Git Repository** → GitHub repo listenizden `lastlight-website` seçin
3. **Root Directory:** boş bırakın (proje zaten kök dizinde)
4. **Framework Preset:** Next.js (otomatik algılanır)

### 2.3 Ortam Değişkenleri (İsteğe Bağlı)
- **Project Settings → Environment Variables**
- Örneğin: `NEXT_PUBLIC_SITE_URL` = `https://lastlight-studio.vercel.app`
- Kendi domain’inizi kullanacaksanız o adresi yazın

### 2.4 Deploy
- **Deploy** tıklayın
- Birkaç dakika sonra siteniz hazır olacak (örn: `https://lastlight-website-xxx.vercel.app`)

### Otomatik Güncellemeler
GitHub’a her `git push` yaptığınızda Vercel otomatik yeni deploy alır.

---

## 3. Neon (Veritabanı – İsteğe Bağlı)

Bu proje şu an veritabanı kullanmıyor. İletişim formu Formspree veya mailto ile çalışıyor.

Neon’u şu durumlarda ekleyebilirsiniz:
- Veritabanına mesaj kaydetmek
- Newsletter aboneleri tutmak
- Blog veya dinamik içerik

### Neon Kullanacaksanız (Örnek Kurulum)

1. https://neon.tech adresinden ücretsiz hesap açın  
2. Yeni bir **PostgreSQL** projesi oluşturun  
3. Connection string’i alın  
4. Vercel **Environment Variables**’a ekleyin:
   - `DATABASE_URL` = Neon connection string  
5. Projeye Prisma veya `pg` ekleyip bağlantı kurun

> Mevcut site için **Neon zorunlu değildir**. Sadece GitHub + Vercel yeterli.

---

## Özet Akış

```
1. Kod → GitHub repo
2. GitHub repo → Vercel’e import
3. Deploy → Site canlı
4. (İsteğe bağlı) Neon → Veritabanı ekleme
```

---

## Hızlı Komutlar

```powershell
# Değişiklik yaptıktan sonra güncelleme
cd c:\Users\yavuz\OneDrive\Desktop\lastlight-website\my-app
git add .
git commit -m "Site güncellemesi"
git push
# Vercel otomatik yeni deploy alır
```

---

## Sorun Giderme

- **Root Directory uyarısı:** Projeyi my-app klasöründen push ettiyseniz Root Directory boş olmalı  
- **Build hatası:** `npm run build` komutunu yerelde çalıştırıp hata varsa düzeltin  
- **404 / görsel hatası:** `public` klasöründeki dosyaların yolunu kontrol edin
