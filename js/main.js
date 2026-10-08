/**
 * Spades Online (Koz Maça) - nayman.stream Official Script
 * Bilingual dictionary (TR / EN), Canvas particles, Gallery tabs, FAQ accordion, Lightbox & QR modal
 */

(function () {
  'use strict';

  // ==========================================
  // 1. Bilingual Dictionary (TR / EN)
  // ==========================================
  const translations = {
    en: {
      navFeatures: "Features",
      navModes: "Game Modes",
      navShowcase: "Showcase",
      navDecks: "Decks & Felts",
      navRules: "How to Play",
      navFaq: "FAQ",
      navDownload: "Download App",

      heroBadge: "♠️ The Ultimate 4-Player Card Game",
      heroTitle: "Master Every Trick.<br><span class=\"gold-gradient-text\">Claim Every Spade.</span>",
      heroDesc: "Experience authentic 4-player Spades with real-time multiplayer, knockout tournaments, zero wait-time smart AI, and customizable holographic decks. Join thousands of trick-taking masters worldwide.",
      btnPlayStoreSub: "GET IT ON",
      btnPlayStoreTitle: "Google Play",
      btnAppStoreSub: "DOWNLOAD ON",
      btnAppStoreTitle: "App Store",
      btnQrCode: "Scan QR",
      trustSpeed: "Instant Matchmaking & Zero Wait",
      trustFairPlay: "100% Fair Play ELO",
      floatTourneyTitle: "Knockout Cup Final",
      floatTourneySub: "Championship Gold Tier",
      floatRatingTitle: "60 FPS Fluid Animation",
      floatRatingSub: "Zero Latency Table",

      stat1Val: "4-Player",
      stat1Label: "Real-Time Multiplayer",
      stat2Val: "3-Round",
      stat2Label: "Knockout Tournaments",
      stat3Val: "15+",
      stat3Label: "Custom Decks & Felt Themes",
      stat4Val: "100%",
      stat4Label: "Skill-Based ELO Matchmaking",

      featTag: "GAME HIGHLIGHTS",
      featTitle: "Designed for Card Masters & Casuals Alike",
      featDesc: "From lightning-fast casual tricks to high-stakes knockout championships, every round is built with competitive balance and polished aesthetics.",

      f1Title: "Real-Time 4-Player",
      f1Desc: "Play 2v2 Partnership or Cutthroat Solo with players worldwide over sub-millisecond SignalR WebSocket connections.",
      f2Title: "Knockout Tournaments",
      f2Desc: "Advance through Quarter-Finals, Semi-Finals, and Championship Finals to hoist Bronze, Silver, and Gold cups.",
      f3Title: "Zero Wait-Time AI",
      f3Desc: "Trained with Residual Neural Network bidding and Double Dummy Solver algorithms for human-like tactical play.",
      f4Title: "Private Custom Tables",
      f4Desc: "Create password-protected custom tables, set custom entry stakes, and invite friends directly from your contacts.",
      f5Title: "City & Global Leaderboards",
      f5Desc: "Climb weekly and monthly leaderboards representing your country, state, and hometown with verified ELO rating.",
      f6Title: "Animated Gifts & Emotes",
      f6Desc: "Send interactive tomatoes, celebratory drinks, roses, and animated emoji reactions to teammates and rivals.",

      galTag: "GAMEPLAY SHOWCASE",
      galTitle: "Take a Seat at the Table",
      galDesc: "Explore authentic screenshots taken directly from live game sessions across mobile platforms.",
      tabGameplay: "Table Gameplay",
      tabBidding: "Bidding & Strategy",
      tabTourney: "Tournaments",
      tabLeaderboard: "Leaderboards",
      tabFriends: "Private Rooms",
      tabLobby: "Lobby & Profile",

      p1Tag: "CLASSIC & PARTNERSHIP",
      p1Title: "Authentic 4-Player Table Action",
      p1Desc: "Experience fluid 60 FPS card animations, crisp audio soundscapes, and intuitive touch controls optimized for one-handed portrait gameplay.",
      p1c1: "High-contrast card readability designed for competitive play",
      p1c2: "Dynamic trump break animations and trick collection counters",
      p1c3: "Interactive player seats with animated avatar frames and level badges",

      p2Tag: "PREDICTION & STRATEGY",
      p2Title: "Precision Bidding System",
      p2Desc: "Make your bid accurately to fulfill your team contract. Dare to declare Nil or Blind Nil for massive bonus points, but stay vigilant against sandbags.",
      p2c1: "Calculated partner and opponent bid tracking in real-time",
      p2c2: "Nil (+100) and Blind Nil (+200) high-stakes tactical options",
      p2c3: "Accurate sandbag accumulation warnings before penalties hit",

      p3Tag: "CHAMPIONSHIP CUPS",
      p3Title: "3-Round Knockout Brackets",
      p3Desc: "Compete in fast-paced tournaments against 8 teams. Win 3 consecutive elimination rounds to lift the Gold Trophy and claim jackpot coin rewards.",
      p3c1: "Bronze, Silver, and Gold tier cups with escalating prize pools",
      p3c2: "Instant bracket updates and automated round progression",
      p3c3: "Exclusive championship card backs unlocked by trophy count",

      p4Tag: "GLOBAL COMPETITION",
      p4Title: "Represent Your City & Country",
      p4Desc: "Every trick and victory boosts your ELO rating on weekly, monthly, and all-time leaderboards. Become the #1 Spades player in your hometown.",
      p4c1: "Dedicated city, national, and global leaderboard views",
      p4c2: "Weekly prize distributions for top 100 ranking players",
      p4c3: "Transparent win rate and match history inspection",

      p5Tag: "PLAY WITH BUDDIES",
      p5Title: "Custom Password-Protected Tables",
      p5Desc: "Host your own table for family and friends. Share 6-character room codes or send direct one-tap invites to anyone on your friends list.",
      p5c1: "Configurable target score (250, 300, or 500 points)",
      p5c2: "Custom turn timer options (10s blitz or 20s relaxed)",
      p5c3: "Friend presence notifications and private chat messaging",

      p6Tag: "PERSONALIZE YOUR EXPERIENCE",
      p6Title: "Lobby, Avatars & Daily Quests",
      p6Desc: "Personalize your identity with rare avatar frames, unlock daily login rewards, and track your card mastery progression over time.",
      p6c1: "Legendary animated frames (Dragon Flame, Americana Eagle, Royal Gold)",
      p6c2: "Daily quests providing coins and diamond progression rewards",
      p6c3: "Comprehensive lifetime player statistics and achievement badges",

      modesTag: "HOW DO YOU PLAY?",
      modesTitle: "Diverse Game Modes for Every Playstyle",
      modesDesc: "Choose your preferred speed and competitive intensity.",
      m1Badge: "MOST POPULAR",
      m1Title: "Partnership 2v2",
      m1Desc: "Team up with a partner sitting across the table. Combine your bids, cover each other's weaknesses, and outsmart the opposing duo.",
      m2Badge: "INDIVIDUAL SKILL",
      m2Title: "Cutthroat Solo",
      m2Desc: "Every player for themselves. No partners, no mercy. Calculate your own tricks and avoid taking sandbag penalties from rivals.",
      m3Badge: "HIGH STAKES",
      m3Title: "Knockout Cup",
      m3Desc: "Quarter-Finals, Semi-Finals, and Championship Final. 8 teams enter, only 1 champion walks away with the grand trophy.",
      m4Badge: "SOCIAL & CASUAL",
      m4Title: "Private Lounge",
      m4Desc: "Gather friends or family in a password-protected room. Play under custom rules with no strangers joining your game.",

      customTag: "TABLE CUSTOMIZATION",
      customTitle: "Legendary Decks & Atmospheric Felts",
      customDesc: "Express your prestige at the table with handcrafted holographic card decks and distinct table themes.",
      decksTitle: "🃏 Legendary Card Decks",
      decksDesc: "Click any deck to preview cards and holographic backs:",
      dDragon: "Dragon Flame",
      dGold: "Gold Kingdom",
      dAmericana: "Americana",
      dCyber: "Cyber Neon",
      feltsTitle: "🎨 Atmospheric Table Felts",
      feltsDesc: "Switch your table atmosphere to match your mood:",
      tRoyal: "Royal Court",
      tMedieval: "Medieval Stone",
      tStreet: "Street Park",

      rulesTag: "MASTER THE BASICS",
      rulesTitle: "Spades Rules & Strategy Guide",
      rulesDesc: "Everything you need to know to outplay opponents and become a grandmaster.",
      r1Title: "1. The Bidding Contract",
      r1Desc: "At the start of each hand, players assess their cards and bid the exact number of tricks (books) they expect to win. In 2v2, partner bids are combined.",
      r2Title: "2. Nil & Blind Nil Strategy",
      r2Desc: "Bid Nil to predict taking zero tricks for a 100-point reward. Trailing behind? Bid Blind Nil before looking at your hand for a massive 200-point comeback!",
      r3Title: "3. Beware the Sandbags",
      r3Desc: "Taking more tricks than your bid awards 1 extra point per bag. However, accumulate 10 penalty bags and your team is slapped with a 100-point penalty!",
      r4Title: "4. Spades are Always Trumps",
      r4Desc: "Spades outrank all other suits. You must follow the led suit if possible. You cannot lead with Spades until a player has 'broken' Spades by trumping a lead.",

      techTag: "UNDER THE HOOD",
      techTitle: "Zero Latency & 100% Fair Play Architecture",
      techDesc: "Spades Online is engineered with enterprise-grade cloud infrastructure to ensure instant matchmaking, reliable WebSocket connections, and cryptographically verified shuffles.",
      tp1: "⚡ SignalR WebSocket Sub-50ms Latency",
      tp2: "🤖 Residual NN + Double Dummy Solver AI",
      tp3: "🛡️ CSPRNG Cryptographic Card Shuffle",
      tp4: "🔄 Instant Bot Takeover on Disconnect",
      tm1Label: "Server Response Latency",
      tm1Val: "< 45 ms",
      tm2Label: "AI Decision Time",
      tm2Val: "< 120 ms",
      tm3Label: "Network Reconnect Tolerance",
      tm3Val: "Seamless (30s)",

      faqTag: "COMMON QUESTIONS",
      faqTitle: "Frequently Asked Questions",
      faqDesc: "Find quick answers regarding gameplay, accounts, and cross-platform access.",
      q1: "Is Spades Online free to play?",
      a1: "Yes! Spades Online is free to download and play. Every player receives daily login bonuses, quest rewards, and free chip refills so you can always stay at the table.",
      q2: "How does the ELO rating system work?",
      a2: "Our ELO algorithm calculates rating adjustments based on the strength of both your team and your opponents. Beating higher-ranked players yields greater gains, ensuring competitive integrity.",
      q3: "What happens if my internet connection drops during a match?",
      a3: "Our smart AI bot immediately steps in and plays according to your hand and bidding strategy so your partner is never abandoned. If you reconnect within the timeout window, you seamlessly resume control.",
      q4: "Can I play privately with my friends?",
      a4: "Yes! You can create a Private Table, set a custom password or share a 6-letter room code, and play exclusively with your invited friends.",
      q5: "How can I request account or data deletion?",
      a5: "You can delete your account directly inside the app settings under 'Delete Account', or submit an instant request via our web page at <a href=\"delete-account.html\" style=\"color:#fde047;\">nayman.stream/delete-account.html</a>.",

      ctaTitle: "Ready to Master the Spades Table?",
      ctaDesc: "Join thousands of active players right now. Download Spades Online on your phone or tablet and make your first bid!",

      footerBrandDesc: "The premier competitive online Spades & Koz Maça platform with real-time multiplayer, knockout tournaments, and high-performance gameplay.",
      footerColQuick: "Quick Links",
      footerColLegal: "Compliance & Legal",
      footerColSupport: "Developer & Support",
      footerPrivacy: "Privacy Policy",
      footerDelete: "Account & Data Deletion",
      footerAds: "App Ads Verification",
      footerDev: "Developer: Sertaç Nayman",
      footerEmail: "Support: snaimans@gmail.com",
      footerAllRights: "All rights reserved. Designed for Google Play and App Store.",

      qrTitle: "Scan to Download Spades",
      qrSub: "Point your smartphone camera to download instantly from Google Play Store."
    },
    tr: {
      navFeatures: "Özellikler",
      navModes: "Oyun Modları",
      navShowcase: "Ekran Görüntüleri",
      navDecks: "Desteler & Masalar",
      navRules: "Nasıl Oynanır",
      navFaq: "SSS",
      navDownload: "Hemen İndir",

      heroBadge: "♠️ 4 Kişilik Gerçek Zamanlı Batak Deneyimi",
      heroTitle: "Kozunu Oyna.<br><span class=\"gold-gradient-text\">Masayı Fethet!</span>",
      heroDesc: "Gerçek zamanlı 4 kişilik çok oyunculu maçlar, eleme turnuvaları, beklemesiz akıllı yapay zeka botları ve holografik özel destelerle otantik Spades (Koz Maça) keyfini yaşayın.",
      btnPlayStoreSub: "HEMEN İNDİRİN",
      btnPlayStoreTitle: "Google Play",
      btnAppStoreSub: "ÇOK YAKINDA",
      btnAppStoreTitle: "App Store",
      btnQrCode: "QR Kod",
      trustSpeed: "Anında Eşleşme & Sıfır Bekleme",
      trustFairPlay: "%100 Adil ELO Eşleşmesi",
      floatTourneyTitle: "Turnuva Finali 🏆",
      floatTourneySub: "Altın Kupa Şampiyonluğu",
      floatRatingTitle: "60 FPS Akıcı Animasyon",
      floatRatingSub: "Sıfır Gecikmeli Masa",

      stat1Val: "4 Kişilik",
      stat1Label: "Canlı Çok Oyunculu",
      stat2Val: "3 Aşamalı",
      stat2Label: "Eleme Turnuvaları",
      stat3Val: "15+",
      stat3Label: "Özel Deste ve Masa Teması",
      stat4Val: "%100",
      stat4Label: "Yetenek Odaklı ELO Sıralaması",

      featTag: "ÖNE ÇIKAN ÖZELLİKLER",
      featTitle: "Hem Ustalar Hem Yeni Başlayanlar İçin",
      featDesc: "Hızlı pratik ellerden yüksek ödüllü şampiyona turnuvalarına kadar her maç, rekabetçi denge ve üst düzey görsellikle donatıldı.",

      f1Title: "Gerçek Zamanlı 4 Kişilik",
      f1Desc: "Dünyanın dört bir yanından oyuncularla 2v2 Eşli veya Tekli (Cutthroat) modlarda gecikmesiz canlı masalarda yarışın.",
      f2Title: "Eleme Turnuvaları",
      f2Desc: "Çeyrek Final, Yarı Final ve Büyük Final aşamalarını geçerek Bronz, Gümüş ve Altın şampiyonluk kupalarını kazanın.",
      f3Title: "Beklemesiz Akıllı Botlar",
      f3Desc: "Residual Neural Network ihale tahminleri ve Double Dummy Solver algoritmalarıyla taktiksel insan seviyesinde yapay zeka.",
      f4Title: "Şifreli Özel Masalar",
      f4Desc: "Arkadaşlarınızla özel odalar oluşturun, masa giriş puanını belirleyin ve arkadaş listenizdekileri doğrudan davet edin.",
      f5Title: "Şehir ve Ülke Sıralamaları",
      f5Desc: "Memleketinizi ve ülkenizi temsil ederek haftalık ve aylık liderlik tablolarında ELO puanınızla zirveye tırmanın.",
      f6Title: "Animasyonlu Hediyeler & İfadeler",
      f6Desc: "Oyun sırasında rakiplerinize veya ortağınıza domates, kutlama içeceği, gül ve canlı emojiler göndererek etkileşime geçin.",

      galTag: "OYUN İÇİ GÖRÜNÜM",
      galTitle: "Masadaki Yerinizi Alın",
      galDesc: "Mobil cihazlardan doğrudan kaydedilmiş orijinal ekran görüntüleriyle oyunumuzun kalitesini keşfedin.",
      tabGameplay: "Oyun Masası",
      tabBidding: "İhale ve Tahmin",
      tabTourney: "Turnuvalar",
      tabLeaderboard: "Lider Tablosu",
      tabFriends: "Özel Odalar",
      tabLobby: "Lobi & Profil",

      p1Tag: "KLASİK VE EŞLİ BATAK",
      p1Title: "Otantik 4 Kişilik Canlı Oyun Alanı",
      p1Desc: "Tek elle oynamaya optimize edilmiş dikey arayüz, 60 FPS akıcı kart hareketleri ve gerçekçi masa sesleriyle kesintisiz oyun keyfi.",
      p1c1: "Okunabilirliği en üst düzeyde kontrastlı kart tasarımları",
      p1c2: "Dinamik koz maça kırma efektleri ve toplanan el sayaçları",
      p1c3: "Animasyonlu çerçeveler ve seviye rozetleriyle interaktif oyuncu koltukları",

      p2Tag: "TAHMİN VE STRATEJİ",
      p2Title: "Hassas İhale Mekanizması",
      p2Desc: "Elinizin gücüne göre alacağınız el sayısını tahmin edin. Sıfır el (Nil) veya Kör Nil (Blind Nil) diyerek maçı çevirin.",
      p2c1: "Ortak ve rakiplerin ihale tahminlerini anlık canlı takip",
      p2c2: "Nil (+100) ve Kör Nil (+200) yüksek kazançlı taktik seçenekler",
      p2c3: "Cezaya girmemek için fazla el (sandbag) birikim sayaçları",

      p3Tag: "ŞAMPİYONLUK KUPALARI",
      p3Title: "3 Turlu Eleme Turnuvaları",
      p3Desc: "8 takımın katıldığı yüksek tempolu turnuvalarda 3 maçı üst üste kazanarak Altın Kupayı kaldırın ve büyük ödülü toplayın.",
      p3c1: "Bronz, Gümüş ve Altın kupa kademeleriyle katlanan ödüller",
      p3c2: "Canlı turnuva ağacı ve otomatik tur geçişleri",
      p3c3: "Kupa sayısına göre açılan efsanevi kart arkalıkları",

      p4Tag: "KÜRESEL VE YEREL REKABET",
      p4Title: "Şehrini ve Ülkeni Zirveye Taşı",
      p4Desc: "Aldığınız her el ve galibiyet, ELO derecenizi yükseltir. Şehrinizin ve Türkiye'nin en iyi Spades oyuncusu olun.",
      p4c1: "Şehir, ülke ve dünya geneli ayrı liderlik tabloları",
      p4c2: "Haftalık ilk 100'e giren ustalara özel ödül dağıtımı",
      p4c3: "Şeffaf kazanma oranı ve geçmiş maç analizi incelemesi",

      p5Tag: "ARKADAŞLARINLA OYNA",
      p5Title: "Şifreli Özel Oda ve Masalar",
      p5Desc: "Aileniz veya dostlarınızla oynamak için şifreli masa açın. 6 haneli oda kodunu paylaşın veya tek dokunuşla davet gönderin.",
      p5c1: "Ayarlanabilir bitiş puanı (250, 300 veya 500 puan)",
      p5c2: "Özelleştirilebilir hamle süresi (10sn hızlı veya 20sn rahat)",
      p5c3: "Arkadaş çevrimiçi bildirimleri ve sohbet imkanı",

      p6Tag: "TARZINI YANSIT",
      p6Title: "Lobi, Avatarlar ve Günlük Görevler",
      p6Desc: "Nadir avatar çerçeveleriyle profilinizi süsleyin, günlük giriş takvimini takip edin ve ustalığınızı sergileyin.",
      p6c1: "Efsanevi efektli çerçeveler (Dragon Flame, Kartal, Kraliyet Altını)",
      p6c2: "Her gün çip ve elmas kazandıran günlük görev sistemi",
      p6c3: "Kapsamlı kariyer istatistikleri ve başarı rozetleri",

      modesTag: "HANGİ MODU SEVİYORSUN?",
      modesTitle: "Her Zevke Uygun Oyun Modları",
      modesDesc: "Stratejinize ve vaktinize uygun oyun modunu seçin.",
      m1Badge: "EN ÇOK OYNANAN",
      m1Title: "Eşli 2v2 Batak",
      m1Desc: "Karşınızdaki ortakla takım olun. İhaleleri birleştirin, birbirinizin eksiklerini kapatın ve rakip ikiliyi alt edin.",
      m2Badge: "BİREYSEL YETENEK",
      m2Title: "Tekli (Solo Cutthroat)",
      m2Desc: "Herkes tek başına, merhamet yok. Kendi ellerinizi toplayın ve rakiplerinize fazla el (bag) cezası aldırmaya çalışın.",
      m3Badge: "BÜYÜK HEYECAN",
      m3Title: "Eleme Turnuvası",
      m3Desc: "Çeyrek Final, Yarı Final ve Final. 8 takımdan sadece 1 tanesi şampiyonluk kupasını havaya kaldırır.",
      m4Badge: "ÖZEL & SOSYAL",
      m4Title: "Arkadaş Masası",
      m4Desc: "Şifreli odada yalnızca tanıdıklarınızla oynayın. Yabancılar olmadan kendi kurallarınızla keyifli vakit geçirin.",

      customTag: "MASANI KİŞİSELLEŞTİR",
      customTitle: "Efsanevi Desteler ve Atmosferik Masalar",
      customDesc: "Masadaki prestijinizi göz alıcı kart arkalıkları ve tematik masa örtüleriyle yansıtın.",
      decksTitle: "🃏 Efsanevi Kart Desteleri",
      decksDesc: "Kartları ve arkalıkları incelemek için üzerlerine tıklayın:",
      dDragon: "Ejderha Ateşi",
      dGold: "Altın Krallık",
      dAmericana: "Americana",
      dCyber: "Siber Neon",
      feltsTitle: "🎨 Atmosferik Masa Örtüleri",
      feltsDesc: "Masa kumaşını zevkinize göre değiştirin:",
      tRoyal: "Kraliyet Salonu",
      tMedieval: "Orta Çağ Taşı",
      tStreet: "Şehir Parkı",

      rulesTag: "TEMEL KURALLAR",
      rulesTitle: "Spades (Koz Maça) Kuralları & Taktikleri",
      rulesDesc: "Oyunu kazanmak ve usta olmak için bilmeniz gereken en kritik kurallar.",
      r1Title: "1. İhale ve Kontrat",
      r1Desc: "Her turun başında oyuncular ellerine bakarak kaç el (trick) alacaklarını söyler. 2v2 eşli oyunda iki ortağın tahminleri toplanır.",
      r2Title: "2. Nil & Kör Nil Taktikleri",
      r2Desc: "Hiç el almayacağını tahmin eden (Nil) +100 bonus puan kazanır. Çok gerideyseniz kartlara bakmadan Blind Nil diyerek +200 puanla maçı çevirebilirsiniz!",
      r3Title: "3. Fazla El (Sandbag) Cezası",
      r3Desc: "İhaleden fazla alınan her el +1 puan verir ancak kum torbası (bag) biriktirir. 10 fazla el biriktiğinde takımınız -100 puan ceza yer!",
      r4Title: "4. Maça Daima Kozdur",
      r4Desc: "Maça (Spades) diğer tüm serileri yener. Atılan seriden elinizde varsa oynamak zorundasınız. Maça serisi kırılmadan maça ile başlayamazsınız.",

      techTag: "ALTYAPI & TEKNOLOJİ",
      techTitle: "Sıfır Gecikme ve %100 Adil Kart Dağıtımı",
      techDesc: "Spades Online, kesintisiz WebSocket bağlantıları ve kriptografik rastgele kart karıştırma protokolleriyle güvenilir şekilde çalışır.",
      tp1: "⚡ SignalR WebSocket 50ms Altı Gecikme",
      tp2: "🤖 Residual NN + Double Dummy Solver Yapay Zeka",
      tp3: "🛡️ CSPRNG Kriptografik Rastgele Dağıtım",
      tp4: "🔄 Kopma Anında Kesintisiz Bot Devralması",
      tm1Label: "Sunucu Yanıt Süresi",
      tm1Val: "< 45 ms",
      tm2Label: "Yapay Zeka Karar Hızı",
      tm2Val: "< 120 ms",
      tm3Label: "Ağ Kopması Toleransı",
      tm3Val: "Kesintisiz (30sn)",

      faqTag: "MERAK EDİLENLER",
      faqTitle: "Sıkça Sorulan Sorular",
      faqDesc: "Oyun, hesap yönetimi ve platform hakkında en çok sorulan soruların yanıtları.",
      q1: "Spades Online'ı oynamak ücretsiz mi?",
      a1: "Evet! Spades Online tamamen ücretsizdir. Günlük giriş bonusları, görev ödülleri ve ücretsiz çip ikmalleriyle her gün kesintisiz oynayabilirsiniz.",
      q2: "ELO sistemi nasıl çalışır?",
      a2: "ELO algoritmamız sizin ve rakiplerinizin seviyesine göre maç sonu puan hesaplar. Güçlü rakipleri yenmek daha çok puan kazandırır ve sıralama adaletini korur.",
      q3: "Maç sırasında internetim koparsa ne olur?",
      a3: "Akıllı yapay zeka botumuz anında devreye girerek elinizi ve ihaleyi başarıyla tamamlamak için oynar. Süre dolmadan geri bağlandığınızda kontrolü anında geri alırsınız.",
      q4: "Arkadaşlarımla özel masa kurabilir miyim?",
      a4: "Kesinlikle! Özel Masa açıp şifre belirleyebilir veya 6 haneli oda kodunu arkadaşlarınızla paylaşarak sadece tanıdıklarınızla oynayabilirsiniz.",
      q5: "Hesap ve verilerimi nasıl silebilirim?",
      a5: "Uygulama içerisindeki Ayarlar > Hesabımı Sil menüsünden veya web sitemiz üzerinden <a href=\"delete-account.html\" style=\"color:#fde047;\">nayman.stream/delete-account.html</a> adresindeki formu doldurarak verilerinizi silebilirsiniz.",

      ctaTitle: "Masanın Başına Geçmeye Hazır Mısınız?",
      ctaDesc: "Binlerce oyuncuyla hemen yarışmaya başlayın. Telefonunuza veya tabletinize indirin ve ilk ihaleyi siz verin!",

      footerBrandDesc: "Gerçek zamanlı çok oyunculu, eleme turnuvaları ve akıcı oynanış sunan modern Spades ve Koz Maça platformu.",
      footerColQuick: "Hızlı Bağlantılar",
      footerColLegal: "Yasal & Uyumluluk",
      footerColSupport: "Geliştirici & Destek",
      footerPrivacy: "Gizlilik Politikası",
      footerDelete: "Hesap & Veri Silme",
      footerAds: "App Ads Doğrulaması",
      footerDev: "Geliştirici: Sertaç Nayman",
      footerEmail: "Destek: snaimans@gmail.com",
      footerAllRights: "Tüm hakları saklıdır. Google Play ve App Store için geliştirilmiştir.",

      qrTitle: "Hemen İndirmek İçin Tara",
      qrSub: "Google Play Store sayfasına anında ulaşmak için telefonunuzun kamerasını QR koda tutun."
    }
  };

  // Current language state
  let currentLang = 'tr'; // Varsayilan Turkce

  const savedLang = localStorage.getItem('spades_lang');
  if (savedLang && (savedLang === 'tr' || savedLang === 'en')) {
    currentLang = savedLang;
  } else if (navigator.language && !navigator.language.toLowerCase().startsWith('tr') && !navigator.language.toLowerCase().startsWith('az')) {
    currentLang = 'en'; // Yabanci diller icin EN
  }

  // ==========================================
  // 2. Language Switcher Function
  // ==========================================
  window.switchLanguage = function (lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('spades_lang', lang);

    // Update active state on toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update page title
    document.title = lang === 'tr'
      ? 'Spades Online (Koz Maça) - 4 Kişilik Canlı Kart Oyunu | nayman.stream'
      : 'Spades Online - Real-Time 4-Player Card Game | nayman.stream';

    // Update all elements with data-i18n
    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
  };

  // ==========================================
  // 3. Background Particle Animation (♠ ♥ ♦ ♣ & Stars)
  // ==========================================
  function initParticleCanvas() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    const suits = ['♠', '♥', '♦', '♣'];
    const particles = [];
    const particleCount = 45;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speedY: -0.2 - Math.random() * 0.4,
        speedX: (Math.random() - 0.5) * 0.3,
        size: Math.random() > 0.4 ? 12 + Math.random() * 12 : 2 + Math.random() * 3,
        isSuit: Math.random() > 0.45,
        suit: suits[Math.floor(Math.random() * suits.length)],
        opacity: 0.08 + Math.random() * 0.22,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.01
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;

        if (p.y < -30) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.isSuit) {
          ctx.font = `${p.size}px 'Cinzel', serif`;
          ctx.fillStyle = p.suit === '♠' || p.suit === '♣'
            ? `rgba(212, 175, 55, ${p.opacity})`
            : `rgba(244, 63, 94, ${p.opacity * 0.8})`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(p.suit, 0, 0);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 224, 102, ${p.opacity})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
          ctx.fill();
        }

        ctx.restore();
      }

      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  // ==========================================
  // 4. Interactive Screenshot Gallery Tabs
  // ==========================================
  function initGalleryTabs() {
    const tabBtns = document.querySelectorAll('.gallery-tab-btn');
    const panes = document.querySelectorAll('.gallery-content-pane');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        tabBtns.forEach(b => b.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const activePane = document.getElementById('pane-' + targetTab);
        if (activePane) {
          activePane.classList.add('active');
        }
      });
    });
  }

  // ==========================================
  // 5. Interactive FAQ Accordion
  // ==========================================
  function initFaqAccordion() {
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
      const question = item.querySelector('.faq-question');
      if (!question) return;

      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        items.forEach(i => i.classList.remove('active'));

        // Toggle current
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  // ==========================================
  // 6. Interactive 3D Card Flip / Hover
  // ==========================================
  function initCardFlip() {
    const flipCards = document.querySelectorAll('.flip-card-item');

    flipCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        if (!img) return;

        const currentSrc = img.getAttribute('src');
        const frontSrc = card.getAttribute('data-front');
        const backSrc = card.getAttribute('data-back');

        if (frontSrc && backSrc) {
          card.style.transform = 'scale(0.92) rotateY(90deg)';
          setTimeout(() => {
            img.src = currentSrc === frontSrc ? backSrc : frontSrc;
            card.style.transform = 'scale(1.05) rotateY(0deg)';
          }, 150);
        }
      });
    });
  }

  // ==========================================
  // 7. Lightbox for Screenshots
  // ==========================================
  function initLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const clickableImages = document.querySelectorAll('.gallery-image-box img, .device-screen img');

    if (!lightbox || !lightboxImg) return;

    clickableImages.forEach(img => {
      img.addEventListener('click', (e) => {
        e.stopPropagation();
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
      }
    });
  }

  // ==========================================
  // 8. QR Code Modal
  // ==========================================
  window.openQrModal = function () {
    const modal = document.getElementById('qr-modal');
    if (modal) modal.classList.add('active');
  };

  window.closeQrModal = function () {
    const modal = document.getElementById('qr-modal');
    if (modal) modal.classList.remove('active');
  };

  // ==========================================
  // 9. Navbar Scroll & Mobile Menu
  // ==========================================
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
        menuBtn.textContent = navLinks.classList.contains('mobile-open') ? '✕' : '☰';
      });

      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('mobile-open');
          menuBtn.textContent = '☰';
        });
      });
    }
  }

  // ==========================================
  // 10. Initialization on DOM Load
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    initParticleCanvas();
    initGalleryTabs();
    initFaqAccordion();
    initCardFlip();
    initLightbox();
    initNavbar();

    // Apply initial language
    window.switchLanguage(currentLang);
  });

})();
