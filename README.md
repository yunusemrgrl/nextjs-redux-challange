# Next.js + Tailwind CSS + Redux

## Kitap Katalog Uygulaması

- Redux
- Tailwindcss
- TypeScript
- Next.js
- Figma
- Vercel

Giriş yapma sayfası ve kayıt olma sayfası içerir. Giriş yapma sayfası, bir e-posta adresi ve şifre gerektirir. Kayıt
olma sayfası ise, kullanıcının ad-soyad, telefon numarası, e-posta adresi ve şifre bilgilerini gerektirir. Bu formlarda,
gerekli validasyonlar yapılmıştır. Bu sayfaların arkaplanında kullanılan görsel, figma üzerinden çizilmiştir.
<br>

Validasyonlar:

- Email kontrolü
- Parola alfanumeric 6 ile 20 hane arası kontrolü
- Parola tekrar uyuşmazlık kontrolü
- Telefon numarası maskeleme işlemi
- Geçerli telefon numarası kontrolü

#### Kullanıcı kayıt durum sorgulaması

- Kayıt Ol sayfasından yönlenen kullanıcının `access-token` değerini tarayıcı üzerindeki `document.cookie` storage
  üzerinde `token` key olarak saklıyoruz. Sayfayi Login sayfasına `router.push` ile yönlendiriyoruz.
- `access-token` değeri olmayan kullanıcı Login sayfasına erişemez.
- `access-token` değerine sahip kullanıcı Login olurken "Remember Me" checkbox'ını onaylarsa eğer `localstorage`
  üzerinde bu değeri `true` olarak saklıyoruz.
- `access-token` ile `remember-me` değerine sahip kullanıcılar doğrudan `router.push` ile `/products` sayfasına
  yönlendirilirler.

![figma-tasarim]("https://github.com/yunusemrgrl/nextjs-redux-challange/blob/main/public/readme-ss/figma_bg.png") <br><br>
Figma üzerinden gradient geçişi ve ellips ile gerekli tasarım yapılmıştır.
<br><br>
![uygulama-arayuzu]("https://github.com/yunusemrgrl/nextjs-redux-challange/blob/main/public/readme-ss/projectReview.gif")

## Nasıl Kullanılır

Bu repoyu indirip aşağıdaki komutları kullanarak kendi localinizde kurabilirsiniz. İsterseniz repo açıklaması
kısmında `Vercel` üzerinden deploy ettiğim linke ulaşabilirsiniz.

```bash
yarn install
```

```bash
yarn run dev
```
