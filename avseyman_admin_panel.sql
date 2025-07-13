-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Anamakine: localhost:3306
-- Üretim Zamanı: 13 Tem 2025, 16:38:59
-- Sunucu sürümü: 8.0.42-cll-lve
-- PHP Sürümü: 8.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `avseyman_admin_panel`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `blogs`
--

CREATE TABLE `blogs` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `content` text COLLATE utf8mb4_general_ci NOT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `content`, `image_url`, `created_at`, `updated_at`) VALUES
(5, 'KVKK Rehberi Işığında Ödeme ve Elektronik Para Sektöründe Kişisel Verilerin Korunması', '<p>Finansal hizmetlerin dijitalleşmesiyle birlikte ödeme ve elektronik para sektörü, sadece mali yükümlülüklerle değil; aynı zamanda veri sorumluluğu altında da faaliyet gösteren bir alan haline gelmiştir. 11 Nisan 2025 tarihinde KVK Kurumu tarafından yayınlanan \"Ödeme ve Elektronik Para Sektöründe Kişisel Verilerin Korunmasına İlişkin İyi Uygulamalar Rehberi\", bu alan için hem rehberlik eden hem de uyum denetiminde esas alınacak çerçeveyi sunmaktadır. Bu yönüyle yalnızca bir rehber değil; aynı zamanda bir sektör uyum standardı sunulmaktadır. Yazımızın devamında söz konusu rehberi inceleyeceğiz.</p><p><strong>Açık Rıza ve Aydınlatma Yükümlülüğü Arasındaki Dengenin Kurulması</strong></p><p>Rehberin en çok öne çıkan noktalarından biri, açık rıza ile aydınlatma yükümlülüğü arasındaki farkın uygulamada yeterince kavranmamış olmasıdır. Sektörde pek çok veri sorumlusu, her veri işleme faaliyetinin açık rıza gerektirdiğini düşünerek gereksiz yere rıza toplamaktadır. Bu durum, açık rızanın \"özgür iradeyle verilme\" şartını zedelemekte ve geçersiz rıza riskini doğurmaktadır.</p><p>Oysa ki KVK Kanunu\'nun 5. maddesi, sözleşmenin ifası, veri sorumlusunun meşru menfaati veya kanuni yükümlülük gibi rıza dışı işleme şartlarını da öngörmektedir. Bu kapsamda, örneğin bir ödeme hizmeti sağlayıcısının kimlik tespiti, şüpheli işlemlerin takibi veya dolandırıcılık tespiti gibi faaliyetleri, açık rızaya değil, kanuni yükümlülük ve meşru menfaate dayanarak yürütülebilir.</p><p>Dolayısıyla, uygulamada aydınlatma metinleri bu ayrıma uygun olarak yeniden düzenlenmeli, hangi işlemlerin hangi hukuki sebebe dayandığı net bir şekilde ortaya konulmalıdır. Veri sorumlusu tarafından kişisel veri işleme faaliyetinin amacı değerlendirilirken, öncelikli olarak açık rıza dışındaki işleme şartlarından birine dayanıp dayanmadığı tespit edilmelidir. Eğer işleme faaliyeti, 6698 sayılı Kanun’un 5. maddesinde yer alan işleme şartlarından herhangi birini karşılamıyorsa, bu durumda veri işleme faaliyeti ancak ilgili kişinin açık rızası alınmak suretiyle sürdürülebilir.</p><p>Kanun’un 5. maddesinde yer alan açık rıza dışı veri işleme şartları şunlardır:</p><p>Kanunlarda açıkça öngörülmesi,</p><p>Fiili imkânsızlık nedeniyle rızasını açıklayamayacak durumda bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir başkasının hayatı veya beden bütünlüğünün korunması için zorunlu olması,</p><p>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması,</p><p>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması,</p><p>İlgili kişinin kendisi tarafından alenileştirilmiş olması,</p><p>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması,</p><p>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.</p><p>Bu koşulların hiçbirini karşılamayan bir veri işleme faaliyeti açık rızaya dayandırılmalı ve bu rıza, özgür iradeyle, açık, belirli ve bilgilendirilmiş şekilde alınmalıdır. Aksi halde hem rızanın geçerliliği hem de veri işleme faaliyeti hukuki açıdan risk teşkil edecektir.</p><p><strong>Veri Envanteri ve Amaçla Sınırlı Veri İşleme</strong></p><p>Veri işleme envanteri oluşturulması, KVK uyumunun temel taşlarından biridir. Ancak özellikle fintech şirketlerinde tespit edilen en büyük eksikliklerden biri, işlenilen verilerin amaca uygunluk ve minimizasyon ilkeleri çerçevesinde yeterince analiz edilmemiş olmasıdır.</p><p>Uygulamada pek çok şirket, \"belki gerekebilir\" mantığıyla fazladan veri toplamakta; ancak bu durum KVK Kanunu\'nun 4. maddesindeki \"amacıyla sınırlı olma\" ve \"güncel, doğru, gerekli olma\" ilkeleriyle bağdaştırıldığında ihlal anlamı taşıyabilir. Rehber, bu konuda her veri kategorisinin işlenme amacına uygun olarak dokümante edilmesini önermektedir.</p><p>Bu nedenle şirketler, tüm işleme faaliyetlerini kapsayan bir veri envanteri oluşturmalı, hangi verinin neden işlendiğini, hangi yasal dayanağa oturduğunu ve hangi süreyle saklandığını denetlenebilir hale getirmelidir.</p><p><strong>Yurt Dışına Veri Aktarımı: Bulut Hizmetleri, Sessiz Taraf ve Uluslararası Riskler</strong></p><p>Rehberin önemli bir bölümü, yurt dışına veri aktarımı konusuna ayrılmış olup, bulut tabanlı hizmet kullanan şirketlerin bu konuda ya yeterli hukuki zemini oluşturmadığı ya da sadece açık rızaya dayandığı belirtilmektedir.</p><p>KVKK\'ya göre yurt dışına veri aktarımı, ancak yeterli koruma sağlanan ülkelere aktarım, KVK Kurulu tarafından onaylı taahhütname veya ilgili kişinin açık rızası ile mümkün olabilir. Burada dikkat edilmesi gereken husus, \"bulut hizmeti sağlayıcılarının yurt dışındaki veri merkezleriyle entegre çalışması\" gibi teknik altyapıların da veri aktarımı kapsamında değerlendirilmesidir.</p><p>Bu tespitten hareketle şirketler, kullandıkları tüm dış servislerin veri aktarım özelliklerini teknik ve hukuki olarak analiz etmeli; aktarım var ise gerekli açık rızaları almanın ötesinde Kurul onaylı taahhüt mekanizmalarına yönelmelidir.</p><p>Uygulamada karşılaşılan önemli durumlardan biri de, yurtdışındaki ana hizmet sağlayıcılara bağlı çalışan ve veri akışına dolaylı olarak dahil olan üçüncü taraf (\"sessiz taraf\") aktörlerdir. Bu aktörler, doğrudan hizmet sözleşmesinde yer almadığı hâlde sistemsel entegrasyonlar sebebiyle kişisel verileri işleyebilmekte ya da erişebilmektedir. Rehber, bu gibi durumlarda sessiz tarafların da veri aktarımı kapsamında değerlendirilmesi gerektiğini açıkça ifade etmektedir.</p><p>Örneğin, Türkiye’de faaliyet gösteren bir e-para kuruluşunun, yurt dışı merkezli bir analiz platformuyla çalışması hâlinde, bu platformun verileri doğrudan işlememesi fakat raporlama hizmeti sunması, yine de bir veri aktarımı anlamına gelir. Benzer şekilde, bulut hizmet sağlayıcısının yurt dışında yedekleme yapan bağlı şirketi de aktarıma taraf olarak kabul edilir.</p><p>Dolayısıyla şirketler yalnızca doğrudan sözleşme yaptıkları hizmet sağlayıcıları değil, aynı veri ekosisteminde yer alan tüm iş ortaklarını analiz etmeli; sessiz taraflar dahil olmak üzere yurt dışı risk analizlerini teknik ve hukuki çerçevede belgelemelidir.</p><p><strong>Davranışsal ve Konum Verilerinin İşlenmesi: Riskler ve Sınırlar</strong></p><p>Mobil uygulamalar aracılığıyla toplanan konum verileri, kullanıcı davranışlarına ilişkin analizler ve uygulama içi gezinti verileri, sektörde pazarlama için kullanılmaya çalışılmakta; ancak bu veriler özel nitelikli olmasa da hassasiyet arz ettiğinden hukuka aykırı veri işleme riski taşımaktadır.</p><p>KVKK, bu tür verilerin işlenmesi için açık rıza alınmasını zorunlu kılmaktadır. \"Uygulamayı kullanıyorsan, verini paylaşmak zorundasın\" gibi rıza mekanizmaları geçersizdir. Bu tür veriler için kullanıcı dostu, tercih hakkı sağlayan, önceden işaretli olmayan çerez ve izleme ayarları tasarlanmalıdır.</p><p><strong>Özel Nitelikli Verilerin İşlenmesi: MASAK\'ın Yeni Düzenlemeleri ve Hukuki Yükümlülükler</strong></p><p>MASAK’ın son düzenlemeleri, ödeme ve elektronik para sektöründe özel nitelikli verilerin işlenmesine yönelik yeni yükümlülükler getirmiştir. Özellikle biyometrik verilerin kullanımı, kimlik tespiti ve kara para aklama ile mücadele gibi alanlarda, veri sorumlularının yalnızca KVKK ile değil, MASAK’ın belirlediği çerçeveyle de uyumlu hareket etmeleri gerekmektedir. MASAK, yurt dışına veri aktarımı, iç denetim süreçleri ve özel verilerin korunmasına dair daha sıkı önlemler ve raporlama yükümlülükleri getirmiştir. Bu doğrultuda, özel nitelikli verilerin işlenmesi için daha fazla güvenlik tedbiri, açık rıza ve denetim süreçlerine dikkat edilmelidir.</p><p><strong>Teknik ve İdari Güvenlik Tedbirleri</strong></p><p>KVKK, sadece hukuki yükümlülükleri değil, teknik ve idari güvenlik tedbirlerini de zorunlu kılmaktadır. Bu kapsamda şuralar özellikle önem arz eder:</p><p><strong>Yetki sınırlaması ve rol bazlı erişim sistemleri</strong> kurulmalı,</p><p><strong>Veri şifreleme, maskeleme, loglama</strong> gibi teknik önlemler uygulanmalı,</p><p><strong>Küçük çapta da olsa periyodik sızma testleri</strong> yapılmalı,</p><p><strong>Çalışanlara KVKK eğitimi verilmeli</strong> ve yetkisiz erişim durumları için iç politika geliştirilmelidir.</p><p>Rehber, bu tedbirlerin sadece kağıt üzerinde değil, sistemli bir denetime tabi tutulmasını ve belgelendirilmesini zorunlu kılmaktadır. Bu nedenle teknik ekiplerin, hukuk birimleriyle birlikte çalışması artık bir tercih değil, zorunluluktur.</p><p><strong>Veri Güvenliği ve Denetim Kültürü</strong></p><p>Veri güvenliği yalnızca teknik önlemlerle sağlanabilecek bir olgu değildir. Kurumun tüm iş süreçlerine entegre edilmiş bir denetim kültürü gerektirir. Bu bağlamda veri sorumlularının, hem önleyici hem de tespit edici güvenlik mekanizmaları kurmaları zorunludur.</p><p>Rehber, iç denetim sistemlerinin kurulmasını, log takibinin sürekliliğini ve ihlal durumlarında derhal harekete geçilecek müdahale planlarının oluşturulmasını önermektedir. Ayrıca, bağımsız denetim firmaları aracılığıyla periyodik dış denetim süreçlerinin uygulanması, hem rehbere uygunluk hem de kurumsal şeffaflık açısından önem taşır.</p><p>Veri güvenliğinin sağlanmasında yönetim kademesinin rolü büyüktür. Yöneticiler, sadece politikaları onaylayan değil, aynı zamanda bizzat uygulayan ve denetleyen bir yapıda olmalıdır. Bu yaklaşım, veri ihlallerinin yalnızca bir IT sorunu değil, bütünsel bir kurumsal sorumluluk olduğunun da altını çizer.</p><p><strong>Rehberin Boşluk Bıraktığı Alanlar</strong></p><p>Rehber teknik olarak kapsamlı olmakla birlikte yapay zekâ destekli karar alma süreçlerinin şeffaflığına ve algoritmik ayrımcılığa dair açık yönlendirmelerin bulunmaması, mobil uygulamalarda konum ve davranış izleme için teknik tasarım ölçütleri tanımlanmaması gibi konularda uygulamacılar açısından halen netlik sağlayamamaktadır.</p><p><strong>Sonuç ve Değerlendirme</strong></p><p>KVKK\'nın rehberi, fintech sektörü için yalnızca bir uyum tavsiyesi değil, aynı zamanda denetimlerin dayandığı kıstasları da ortaya koymaktadır. Bu kapsamda veri sorumlularının sadece metinsel düzenlemelerle değil, aynı zamanda teknik, operasyonel ve süreç odaklı bir veri koruma sistemi inşa etmeleri elzemdir.</p><p>Aksi halde, 6698 sayılı Kanun\'un 18. maddesine göre ciddi para cezalarının yanı sıra müşteri güveni ve itibar kaybı gibi telafisi güç zararlarla karşı karşıya kalınabilir.</p><p>Rehberin tamamına buradan ulaşabilirsiniz: <a href=\"https://kvkk.gov.tr/SharedFolderServer/CMSFiles/5a7a3f8a-3b20-4773-970a-01aecfcc5222.pdf\">https://kvkk.gov.tr/SharedFolderServer/CMSFiles/5a7a3f8a-3b20-4773-970a-01aecfcc5222.pdf</a></p><p>&nbsp;</p>', '', '2025-05-02 11:41:09', '2025-05-05 14:15:28');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `contacts`
--

CREATE TABLE `contacts` (
  `id` int NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `value` text COLLATE utf8mb4_general_ci NOT NULL,
  `icon` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `contacts`
--

INSERT INTO `contacts` (`id`, `type`, `value`, `icon`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'phone', '0539 686 76 94', 'faPhone', 1, '2025-02-17 17:37:45', '2025-02-19 09:48:46'),
(2, 'email', 'info@avseymanurtasdemir.com', 'faEnvelope', 1, '2025-02-17 17:37:45', '2025-02-17 17:37:45'),
(3, 'address', 'Hürriyet Mah. Yurt Sk. No:12/3 Kağıthane/İstanbul', 'faMapMarkerAlt', 1, '2025-02-17 17:37:45', '2025-02-18 09:03:54'),
(4, 'whatsapp', '905396867694', 'faWhatsapp', 1, '2025-02-17 17:37:45', '2025-02-19 09:48:27'),
(5, 'working_hours', 'Pazartesi - Cuma: 09:00 - 18:00', 'faClock', 1, '2025-02-17 17:37:45', '2025-02-17 17:37:45');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `practice_areas`
--

CREATE TABLE `practice_areas` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `icon` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `practice_areas`
--

INSERT INTO `practice_areas` (`id`, `title`, `description`, `icon`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Ticaret ve Şirketler Hukuku', 'Şirketlerin kuruluşu, birleşmeleri, devir, hisse satışları ve ticari sözleşmeler gibi ticaret hukuku alanlarında hizmet veriyoruz.', 'fas fa-balance-scale', 1, '2025-02-17 18:18:10', '2025-02-17 18:21:19'),
(2, 'Dernek ve Vakıflar', 'Dernek ve vakıfların kuruluşu ve hukuki süreçleri ile ilgili danışmanlık hizmetleri sunuyoruz.', 'fas fa-users', 1, '2025-02-17 18:18:10', '2025-02-17 18:21:19'),
(3, 'Sözleşmeler Hukuku', 'İşbirliklerini güvence altına almak için ticari ve bireysel sözleşmelerin hazırlanması, gözden geçirilmesi ve müzakeresi hizmetlerini sunuyoruz.', 'fas fa-file-contract', 1, '2025-02-17 18:18:10', '2025-02-17 18:21:19'),
(4, 'İcra ve İflas Hukuku', 'Alacak tahsili ve iflas süreçlerini yöneterek stratejik çözümler sunuyoruz.', 'fas fa-gavel', 1, '2025-02-17 18:18:10', '2025-02-17 18:21:19'),
(5, 'Arabuluculuk', 'Hukuki uyuşmazlıkların hızlı ve dostane bir şekilde çözülmesi için arabuluculuk hizmeti sunuyoruz.', 'fas fa-handshake', 1, '2025-02-17 18:18:10', '2025-02-17 18:21:19'),
(6, 'KVKK/GDPR', 'Şirketlerin KVKK ve GDPR uyumluluğunu sağlamak adına danışmanlık hizmetleri sunuyoruz.', 'fas fa-shield-alt', 1, '2025-02-17 18:18:10', '2025-02-17 18:21:19'),
(7, 'Ceza Hukuku', 'Mali suçlar, dolandırıcılık ve zimmet davalarında hukuki savunma ve danışmanlık hizmetleri sunuyoruz.', 'fas fa-exclamation-triangle', 1, '2025-02-17 18:18:10', '2025-02-17 18:21:19'),
(8, 'İş Hukuku', 'İşverenler ve çalışanlar için iş sözleşmeleri, işçi hakları ve tazminat süreçlerinde hukuki danışmanlık sağlıyoruz.', 'fas fa-landmark', 1, '2025-02-17 18:18:10', '2025-02-17 18:21:19'),
(9, 'Bilişim Hukuku', 'Dijital dünyada müvekkillerimizin dijital haklarını ve veri güvenliğini korumak için bilişim hukuku hizmetleri sunuyoruz.', 'fas fa-laptop', 1, '2025-02-17 18:18:10', '2025-02-17 18:21:19'),
(10, 'Miras Hukuku', 'Miras süreçlerinin yönetimi, vasiyetname hazırlanması ve miras paylaşımı konusunda danışmanlık sağlıyoruz.', 'fas fa-user-tie', 1, '2025-02-17 18:18:10', '2025-02-17 18:21:19'),
(11, 'Sigorta Hukuku', 'Sigorta sözleşmeleri, tazminat talepleri ve sigorta davalarında hukuki destek sunuyoruz.', 'fas fa-shield-alt', 1, '2025-02-17 18:18:10', '2025-02-17 18:21:19'),
(12, 'Deniz Ticareti Hukuku', 'Uluslararası deniz ticaretine ilişkin sözleşme ve uyuşmazlık yönetimi konularında destek sağlıyoruz.', 'fas fa-briefcase', 1, '2025-02-17 18:18:10', '2025-02-18 09:08:13'),
(13, 'Medeni Hukuk', 'Aile hukuku, miras hukuku konularında profesyonel hizmet.', 'fas fa-balance-scale', 1, '2025-07-12 14:12:07', '2025-07-12 14:12:07'),
(14, 'Ticaret Hukuku', 'Şirket kuruluşu, ticari sözleşmeler.', 'fas fa-briefcase', 1, '2025-07-12 14:12:07', '2025-07-12 14:12:07'),
(15, 'İş Hukuku', 'İşçi-işveren ilişkileri, iş sözleşmeleri.', 'fas fa-users', 1, '2025-07-12 14:12:07', '2025-07-12 14:12:07'),
(16, 'Ceza Hukuku', 'Ceza davalarında savunma hizmeti.', 'fas fa-gavel', 1, '2025-07-12 14:12:07', '2025-07-12 14:12:07');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'admin123');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `practice_areas`
--
ALTER TABLE `practice_areas`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Tablo için AUTO_INCREMENT değeri `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Tablo için AUTO_INCREMENT değeri `practice_areas`
--
ALTER TABLE `practice_areas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
