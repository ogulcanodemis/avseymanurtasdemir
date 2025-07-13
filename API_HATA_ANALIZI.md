# API Hata Analizi ve Çözüm Önerileri

## 🔍 Tespit Edilen Hatalar

### 1. **CORS (Cross-Origin Resource Sharing) Hatası**
```
Origin https://avseymanurtasdemir.com is not allowed by Access-Control-Allow-Origin. Status code: 500
```

### 2. **URL Uyumsuzluğu**
- **Frontend'de Kullanılan URL**: `https://avseymanurtasdemir.com/backend/api/`
- **Hatalarda Görünen URL**: `https://avseymanurtasdemir.com/backend/api/`
- **Dosya Adı Uyumsuzluğu**: `get_practice_areas_final.php`, `get_contacts_final.php`, `get_blogs_final.php`

### 3. **HTTP 500 Internal Server Error**
Tüm API endpoint'lerinde 500 hatası alınıyor.

## 🔎 Hataların Detaylı Analizi

### Domain Uyumsuzluğu Problemi
1. **Frontend Origin**: `https://avseymanurtasdemir.com`
2. **API Request Target**: `https://avseymanurtasdemir.com`
3. **Dosya Adları**: Mevcut dosyalar `get_*.php` iken, hatalarda `get_*_final.php` görülüyor

### CORS Konfigürasyon Problemi
Mevcut PHP dosyalarında CORS headers doğru tanımlanmış:
```php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
```

Ancak sunucu tarafında ek kısıtlamalar olabilir.

### Dosya Yolu Problemi
Backend'de mevcut dosyalar:
- ✅ `get_practice_areas.php`
- ✅ `get_contacts.php` 
- ✅ `get_blogs.php`

Ancak istenen dosyalar:
- ❌ `get_practice_areas_final.php`
- ❌ `get_contacts_final.php`
- ❌ `get_blogs_final.php`

## 🚨 Muhtemel Sebepler

### 1. **Domain Değişikliği**
Site domain'i `avseymanurtasdemir.com.tr`'ye taşınmış ancak frontend kodları güncellenmemiş.

### 2. **Dosya Yeniden Adlandırılması**
API dosyaları `*_final.php` olarak yeniden adlandırılmış ancak local dosyalar güncel değil.

### 3. **Sunucu Konfigürasyonu**
- htaccess kuralları değişmiş
- SSL sertifikası problemi
- Server-side CORS kısıtlamaları

### 4. **Deployment Problemi**
Local ve production ortamlarında farklı dosya versiyonları bulunuyor.

## 🛠️ Çözüm Önerileri

### Acil Çözümler

#### 1. **Domain URL'lerini Güncelle**
Aşağıdaki dosyalarda URL'leri güncelleyin:
- `src/Pages/Services.js:21`
- `src/Components/BlogSection.js:24`
- `src/Pages/SingleBlog.js:22`
- `src/Components/PracticeAreas.js:46`
- `src/context/ContactContext.js:20`

**Değiştirilecek:**
```javascript
'https://avseymanurtasdemir.com/backend/api/'
```

**Şuna:**
```javascript
'https://avseymanurtasdemir.com/backend/api/'
```

#### 2. **Eksik API Dosyalarını Oluşturun**
Production sunucusunda şu dosyaları oluşturun:
- `get_practice_areas_final.php`
- `get_contacts_final.php` 
- `get_blogs_final.php`

#### 3. **Environment Configuration**
Bir config dosyası oluşturun:
```javascript
// src/config.js
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://avseymanurtasdemir.com/backend/api'
  : 'http://localhost/backend/api';

export default API_BASE_URL;
```

### Uzun Vadeli Çözümler

#### 1. **htaccess Konfigürasyonu**
```apache
# backend/.htaccess
Header always set Access-Control-Allow-Origin "https://avseymanurtasdemir.com"
Header always set Access-Control-Allow-Methods "GET, POST, OPTIONS"
Header always set Access-Control-Allow-Headers "Content-Type, Authorization"

# Handle preflight requests
RewriteEngine On
RewriteCond %{REQUEST_METHOD} OPTIONS
RewriteRule ^(.*)$ $1 [R=200,L]
```

#### 2. **PHP CORS Headers Güvenliği**
```php
<?php
$allowed_origins = [
    'https://avseymanurtasdemir.com',
    'https://www.avseymanurtasdemir.com.tr'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
}
?>
```

#### 3. **SSL ve Security Headers**
```php
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
```

## 📋 Kontrol Listesi

### Yapılması Gerekenler
- [ ] Frontend URL'lerini güncelle (.com.tr)
- [ ] Eksik `*_final.php` dosyalarını oluştur
- [ ] Sunucu CORS ayarlarını kontrol et
- [ ] SSL sertifikasını doğrula
- [ ] htaccess dosyasını güncelle
- [ ] Database connection string'i kontrol et
- [ ] Error logging'i aktifleştir

### Test Edilmesi Gerekenler
- [ ] API endpoint'lerine doğrudan erişim
- [ ] CORS preflight requests
- [ ] SSL certificate validity
- [ ] Database bağlantısı
- [ ] File permissions (755/644)

## 🔍 Debug Yöntemleri

### 1. **Server Error Logs**
```bash
tail -f /var/log/apache2/error.log
tail -f /var/log/nginx/error.log
```

### 2. **PHP Error Logging**
```php
ini_set('display_errors', 1);
ini_set('log_errors', 1);
error_reporting(E_ALL);
```

### 3. **Browser Network Tab**
- Response headers kontrol et
- Status code detaylarını incele
- Request/Response body'yi kontrol et

### 4. **cURL Testi**
```bash
curl -H "Origin: https://avseymanurtasdemir.com" \
     -H "Access-Control-Request-Method: GET" \
     -H "Access-Control-Request-Headers: X-Requested-With" \
     -X OPTIONS \
     https://avseymanurtasdemir.com/backend/api/get_contacts_final.php
```

## ⚠️ Kritik Notlar

1. **Güvenlik**: CORS `*` wildcard production'da güvenlik riski
2. **Cache**: Browser cache'i temizle
3. **CDN**: CloudFlare gibi CDN kullanılıyorsa cache purge yap
4. **Database**: Connection string'de domain değişikliği gerekebilir

## 📞 Acil Müdahale Adımları

1. **Hızlı Fix**: URL'leri `.com.tr` olarak güncelle
2. **Dosya Kopyalama**: Mevcut API dosyalarını `*_final.php` olarak kopyala
3. **Cache Temizleme**: Browser ve server cache'i temizle
4. **Test**: Tüm API endpoint'lerini manuel test et

---

**Son Güncelleme:** 13 Temmuz 2025
**Durum:** Acil müdahale gerekli - Site API'leri çalışmıyor