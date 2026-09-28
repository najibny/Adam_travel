'use strict';
/* ============ الإعدادات (عدّلها هنا) ============ */
const CFG = {
  name: { ar: 'ادم للسياحة', en: 'Company Name (placeholder — replace)' }, // اسم الشركة
  logo: 'logo.PNG',                       // مسار اللوغو (ضعه بجانب index.html)
  whatsapp: '000000000000',               // رقم واتساب دولي بلا + ولا مسافات، مثال: 966500000000 (قيمة تجريبية!)
  currency: 'USD',                        // عملة الأسعار
  phone: '[رقم هاتف تجريبي]', email: '[بريد تجريبي]',                     // بيانات التواصل
  address: { ar: '[عنوان تجريبي]', en: '[Sample address]' },
  hours: { ar: 'ساعات العمل: [تجريبية — عدّلها]', en: 'Hours: [sample — edit]' },
  social: { facebook: '', instagram: '', x: '', tiktok: '' },  // ضع الروابط الحقيقية؛ الفارغ يظهر معطّلاً
  mapEmbedUrl: '',                        // رابط تضمين خريطة Google الصحيح؛ الفارغ = مساحة نائبة
  heroSeconds: 10,
  // إحصاءات تجريبية — استبدل القيم بأرقام حقيقية
  stats: [{ v: 1200, k: 'stTrav' }, { v: 25, k: 'stDest' }, { v: 40, k: 'stProg' }]
};
// صور Unsplash (روابط مباشرة؛ استبدلها بصورك عند الحاجة)
const U = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`;
const IMG = {
  kaaba: U('photo-1591604129939-f1efa4d9f7fa'), madina: U('photo-1564769625905-50e93615e769'),
  ist: U('photo-1524231757912-21f4fe3a7200'), mald: U('photo-1514282401047-d79a71a590e8'),
  paris: U('photo-1502602898657-3e91760cbb34'), alps: U('photo-1530122037265-a5f1f91d3b99'),
  north: U('photo-1541432901042-2d8bd64b4a9b'), hero: U('photo-1542816417-0983c9c9ad53')
};
/* ============ البرامج (أمثلة تجريبية — عدّل الأسعار والفنادق والصور) ============
   g: H = حج وعمرة، T = سياحة | type: umrah/hajj/tour | dest: mm/europe/turkey/maldives
   svc: خدمات مشمولة | tag: hot (الأكثر طلباً) أو offer (عرض خاص) أو '' */
const PROGRAMS = [
  { id: 'u1', g: 'H', type: 'umrah', cat: 'eco', dest: 'mm', days: 8, price: 900, tag: '', imgs: [IMG.kaaba, IMG.madina],
    n: { ar: 'عمرة اقتصادية', en: 'Economy Umrah' }, loc: { ar: 'فندق 3 نجوم (مثال) — نحو 900 م من الحرم (تقريبي)', en: '3-star hotel (sample) — approx. 900 m from the Haram' }, svc: ['ht', 'tr', 'gd'] },
  { id: 'u2', g: 'H', type: 'umrah', cat: 'vip', dest: 'mm', days: 10, price: 2600, tag: 'hot', imgs: [IMG.madina, IMG.kaaba],
    n: { ar: 'عمرة VIP', en: 'VIP Umrah' }, loc: { ar: 'فندق 5 نجوم (مثال) — نحو 150 م من الحرم (تقريبي)', en: '5-star hotel (sample) — approx. 150 m from the Haram' }, svc: ['fl', 'ht', 'tr', 'gd'] },
  { id: 'u3', g: 'H', type: 'umrah', cat: 'ramadan', dest: 'mm', days: 12, price: 1800, tag: 'offer', imgs: [IMG.kaaba, IMG.hero],
    n: { ar: 'عمرة رمضان', en: 'Ramadan Umrah' }, loc: { ar: 'فندق 4 نجوم (مثال) — نحو 400 م من الحرم (تقريبي)', en: '4-star hotel (sample) — approx. 400 m from the Haram' }, svc: ['ht', 'tr', 'gd'] },
  { id: 'u4', g: 'H', type: 'umrah', cat: 'family', dest: 'mm', days: 9, price: 1500, tag: '', imgs: [IMG.madina, IMG.kaaba],
    n: { ar: 'عمرة عائلية', en: 'Family Umrah' }, loc: { ar: 'فندق 4 نجوم (مثال) — غرف عائلية، نحو 500 م (تقريبي)', en: '4-star hotel (sample) — family rooms, approx. 500 m' }, svc: ['ht', 'tr', 'br'] },
  { id: 'h1', g: 'H', type: 'hajj', cat: 'hajj', dest: 'mm', days: 21, price: 6500, tag: '', imgs: [IMG.kaaba, IMG.madina],
    n: { ar: 'برنامج حج (سعر نائب)', en: 'Hajj Program (placeholder price)' }, loc: { ar: 'التفاصيل والمواقع تُحدَّد وفق الجهات الرسمية', en: 'Details and locations set per official authorities' }, svc: ['fl', 'ht', 'tr', 'gd'] },
  { id: 't1', g: 'T', type: 'tour', cat: 'europe', dest: 'europe', days: 9, price: 2400, tag: 'hot', imgs: [IMG.alps, IMG.paris],
    n: { ar: 'جولة أوروبا الكلاسيكية', en: 'Classic Europe Tour' }, loc: { ar: 'فنادق 4 نجوم (أمثلة) في وسط المدن', en: '4-star hotels (samples) in city centres' }, svc: ['fl', 'ht', 'gd'] },
  { id: 't2', g: 'T', type: 'tour', cat: 'turkey', dest: 'turkey', days: 7, price: 950, tag: 'offer', imgs: [IMG.ist, IMG.north],
    n: { ar: 'إسطنبول وبورصة', en: 'Istanbul & Bursa' }, loc: { ar: 'فندق 4 نجوم (مثال) قرب المعالم', en: '4-star hotel (sample) near landmarks' }, svc: ['ht', 'tr', 'gd'] },
  { id: 't3', g: 'T', type: 'tour', cat: 'maldives', dest: 'maldives', days: 6, price: 1900, tag: '', imgs: [IMG.mald, IMG.mald],
    n: { ar: 'جزر المالديف', en: 'Maldives Escape' }, loc: { ar: 'منتجع جزيرة (مثال)', en: 'Island resort (sample)' }, svc: ['fl', 'ht', 'tr'] },
  { id: 't4', g: 'T', type: 'tour', cat: 'family', dest: 'turkey', days: 8, price: 1200, tag: '', imgs: [IMG.north, IMG.ist],
    n: { ar: 'شمال تركيا العائلية', en: 'Northern Turkey Family Trip' }, loc: { ar: 'فنادق عائلية (أمثلة) بين طرابزون وأوزنجول', en: 'Family hotels (samples) around Trabzon & Uzungöl' }, svc: ['ht', 'tr', 'br'] },
  { id: 't5', g: 'T', type: 'tour', cat: 'honeymoon', dest: 'europe', days: 7, price: 2100, tag: '', imgs: [IMG.paris, IMG.alps],
    n: { ar: 'شهر العسل في باريس', en: 'Paris Honeymoon' }, loc: { ar: 'فندق بوتيكي (مثال) وسط باريس', en: 'Boutique hotel (sample) central Paris' }, svc: ['fl', 'ht', 'gd'] }
];
const CATS = { H: ['all', 'eco', 'vip', 'ramadan', 'family', 'hajj'], T: ['all', 'europe', 'turkey', 'maldives', 'family', 'honeymoon'] };
const ICONS = {
  fl: 'M21 3L3 10l7 3 3 7z', ht: 'M3 20V8l9-5 9 5v12M9 20v-6h6v6', vs: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7',
  tr: 'M4 5h16v11H4zM4 11h16M7 19v-3M17 19v-3', pv: 'M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11zM12 12a2 2 0 100-4 2 2 0 000 4', hj: 'M20 14A8 8 0 1110 4a6 6 0 0010 10z'
};
/* ============ القاموس (ar / en) — كل نصوص الواجهة ============ */
const DICT = {
  ar: {
    lang: 'English', nHome: 'الرئيسية', nUmrah: 'الحج والعمرة', nTours: 'البرامج السياحية', nServ: 'خدماتنا', nAbout: 'من نحن', nContact: 'تواصل معنا',
    waBtn: 'استفسر عبر واتساب', h1: 'رحلتك إلى الحرمين تبدأ براحة وطمأنينة',
    hSub: 'نساعدك في اختيار برنامج العمرة أو الحج المناسب، ونوضّح لك تفاصيل الرحلة قبل الحجز.', hB1: 'اكتشف برامج العمرة',
    sType: 'نوع البرنامج', sDest: 'الوجهة', sBud: 'الميزانية', sBtn: 'ابحث', any: 'الكل', umrah: 'عمرة', hajj: 'حج', tour: 'رحلة سياحية',
    mm: 'مكة والمدينة', europe: 'أوروبا', turkey: 'تركيا', maldives: 'المالديف', b1: 'حتى 1500', b2: '1500 – 3000', b3: 'أكثر من 3000',
    uTitle: 'برامج الحج والعمرة', uDesc: 'برامج متنوعة لتناسب ميزانيتك وعائلتك. جميع الفنادق والأسعار هنا أمثلة قابلة للتعديل وليست عرضاً مؤكداً.',
    priceNote: 'الأسعار استرشادية وقابلة للتغيير. تأكد من السعر والتفاصيل النهائية قبل الحجز.',
    sort: 'الترتيب', sDef: 'الافتراضي', sPa: 'السعر: الأقل أولاً', sPd: 'السعر: الأعلى أولاً', sDur: 'المدة: الأقصر أولاً',
    c_all: 'الكل', c_eco: 'اقتصادية', c_vip: 'VIP', c_ramadan: 'رمضان', c_family: 'عائلية', c_hajj: 'حج', c_europe: 'أوروبا', c_turkey: 'إسطنبول والشمال التركي', c_maldives: 'المالديف', c_honeymoon: 'شهر العسل',
    days: 'أيام', from: 'يبدأ من', details: 'تفاصيل البرنامج', tDetails: 'تفاصيل الرحلة', book: 'احجز / استفسر', hot: 'الأكثر طلباً', offer: 'عرض خاص',
    fl: 'طيران', ht: 'إقامة', tr: 'نقل', gd: 'مرشد', br: 'إفطار', empty: 'لا توجد نتائج مطابقة. جرّب تغيير الفلاتر أو مسح البحث.',
    gTitle: 'دليل المعتمر والحاج', fTitle: 'أسئلة شائعة',
    gNote: 'تنبيه: هذه معلومات عامة فقط. الأسعار والمتطلبات والمواعيد الرسمية قد تتغير، فتحقق منها لدى الجهات المختصة.',
    steps: ['حدد نوع الرحلة والتاريخ المتوقع وعدد المسافرين.', 'تحقق من صلاحية جواز السفر والمتطلبات الرسمية لدى الجهات المختصة.', 'راجع تفاصيل البرنامج والفندق وما يشمله السعر.', 'جهّز حقيبة خفيفة وأدويتك الضرورية ونسخاً من مستنداتك.', 'احتفظ بأرقام التواصل وتفاصيل الحجز طوال الرحلة.'],
    faq: [['كيف أحجز؟', 'اضغط زر الاستفسار في البرنامج لفتح واتساب برسالة جاهزة، ثم أرسلها إلى فريقنا.'], ['هل الأسعار نهائية؟', 'لا، الأسعار استرشادية وقد تتغير حسب الموسم والتوفر. سنؤكد السعر النهائي قبل الحجز.'], ['هل تساعدون في التأشيرة؟', 'نقدم مساعدة إرشادية في إجراءات التأشيرة دون ضمان الموافقة، فالقرار للجهات الرسمية.'], ['هل يمكن تخصيص برنامج؟', 'نعم، استخدم نموذج «برنامج عمرة مخصص» وسنعود إليك بخيارات مناسبة.']],
    cTitle: 'اطلب برنامج عمرة مخصصاً', cDesc: 'أخبرنا بما تحتاجه وسنجهّز لك مقترحاً مناسباً.',
    fName: 'الاسم', fPhone: 'رقم الهاتف', fTrav: 'عدد المسافرين', fBud: 'الميزانية التقريبية', fDate: 'التاريخ المتوقع', fNotes: 'ملاحظات (اختياري)', fDest: 'الوجهة أو نوع الخدمة', fMore: 'تفاصيل إضافية (اختياري)',
    fSend: 'افتح الرسالة في واتساب', fHint: 'سيفتح الطلب في واتساب لتراجعه وترسله بنفسك؛ لا تُرسل البيانات إلى أي خادم.',
    errReq: 'يرجى تعبئة الحقول المطلوبة بشكل صحيح.', errPhone: 'رقم الهاتف غير صالح.', ok: 'تم تجهيز الرسالة وفتح واتساب. راجعها ثم أرسلها.',
    tTitle: 'البرامج والوجهات السياحية', tDesc: 'رحلات إلى أوروبا وتركيا والمالديف وغيرها. الأسعار والتفاصيل أمثلة قابلة للتعديل.',
    sTitle: 'خدماتنا', svc: [['vs', 'حجوزات الطيران', 'مقارنة الخيارات وحجز التذاكر المناسبة لرحلتك.'], ['ht', 'حجوزات الفنادق', 'فنادق تناسب ميزانيتك وموقع وجهتك.'], ['vs', 'المساعدة بشأن التأشيرات', 'إرشاد في الإجراءات دون ضمان الموافقة.'], ['tr', 'النقل والمواصلات', 'ترتيب التنقل بين المطار والفندق والوجهات.'], ['pv', 'تنظيم الرحلات الخاصة', 'برامج مصممة لعائلتك أو مجموعتك.'], ['hj', 'خدمات الحج والعمرة', 'تنظيم وإرشاد للمعتمرين والحجاج.']],
    wTitle: 'لماذا تختارنا', why: [['وضوح التفاصيل', 'نعرض ما يشمله البرنامج وما لا يشمله.'], ['تنوع الخيارات', 'برامج لمختلف الميزانيات والأذواق.'], ['سرعة الرد', 'نهدف للرد على استفساراتك بسرعة.'], ['متابعة العملاء', 'نتابع معك قبل الرحلة وخلالها.']],
    stTrav: 'مسافر', stDest: 'وجهة', stProg: 'برنامج', statNote: '* الأرقام أعلاه تجريبية وستُستبدل ببيانات حقيقية.',
    rTitle: 'آراء العملاء', rNote: 'أمثلة تجريبية غير حقيقية وليست تقييمات موثقة — تُستبدل بآراء حقيقية قبل النشر.',
    reviews: [['عميل تجريبي 1', 'مثال: تنظيم واضح وتواصل سريع.'], ['عميل تجريبي 2', 'مثال: كانت تفاصيل البرنامج مفهومة.'], ['عميل تجريبي 3', 'مثال: متابعة جيدة قبل السفر.']],
    kTitle: 'تواصل معنا', kDesc: 'أرسل استفسارك وسنجيبك عبر واتساب.', fTag: 'مكتب سياحة وسفر وحج وعمرة.', fLinks: 'روابط سريعة', fMap: 'الموقع', mapPh: 'مساحة الخريطة — أضف رابط التضمين في الإعدادات',
    mItin: 'برنامج الأيام (مثال توضيحي)', mInc: 'يشمل', mExc: 'لا يشمل', mNote: 'الأسعار والفنادق والبرنامج اليومي أمثلة توضيحية قابلة للتغيير وليست عرضاً مؤكداً.',
    day: 'اليوم', itH: ['الوصول والاستقبال والتوجه إلى الفندق', 'أيام العبادة والزيارات حسب البرنامج', 'الاستعداد للمغادرة والعودة'], itT: ['الوصول والاستقبال', 'جولات ومعالم حسب البرنامج', 'وقت حر وتسوّق', 'المغادرة والعودة'],
    incH: ['الإقامة (حسب البرنامج)', 'النقل الداخلي (مثال)', 'الدعم الإرشادي'], excH: ['تذاكر الطيران (ما لم تُذكر)', 'المصاريف الشخصية', 'رسوم التأشيرة إن وُجدت'],
    incT: ['الإقامة (مثال)', 'الجولات المذكورة', 'الاستقبال'], excT: ['تذاكر الطيران (ما لم تُذكر)', 'المصاريف الشخصية', 'التأمين'],
    waHello: 'مرحباً، أرغب في الاستفسار عن خدماتكم.', waProg: 'مرحباً، أرغب في الاستفسار عن: ', close: 'إغلاق', top: 'العودة للأعلى', menu: 'القائمة', prev: 'السابق', next: 'التالي',
    mCust: 'طلب برنامج عمرة مخصص', mCon: 'استفسار', pName: 'الاسم', pPhone: 'الهاتف', pTrav: 'عدد المسافرين', pBud: 'الميزانية', pDate: 'التاريخ', pNotes: 'ملاحظات', pDest: 'الوجهة/الخدمة', off: 'غير مفعّل — أضف الرابط في الإعدادات'
  },
  en: {
    lang: 'العربية', nHome: 'Home', nUmrah: 'Hajj & Umrah', nTours: 'Tours', nServ: 'Services', nAbout: 'About', nContact: 'Contact',
    waBtn: 'Ask on WhatsApp', h1: 'Your journey to the Two Holy Mosques begins with ease and peace of mind',
    hSub: 'We help you choose the right Umrah or Hajj program and explain the trip details before you book.', hB1: 'Explore Umrah programs',
    sType: 'Program type', sDest: 'Destination', sBud: 'Budget', sBtn: 'Search', any: 'Any', umrah: 'Umrah', hajj: 'Hajj', tour: 'Tour',
    mm: 'Makkah & Madinah', europe: 'Europe', turkey: 'Turkey', maldives: 'Maldives', b1: 'Up to 1,500', b2: '1,500 – 3,000', b3: 'Over 3,000',
    uTitle: 'Hajj & Umrah Programs', uDesc: 'Programs for different budgets and families. Hotels and prices are editable samples, not confirmed offers.',
    priceNote: 'Prices are indicative and may change. Confirm final price and details before booking.',
    sort: 'Sort', sDef: 'Default', sPa: 'Price: low to high', sPd: 'Price: high to low', sDur: 'Duration: shortest',
    c_all: 'All', c_eco: 'Economy', c_vip: 'VIP', c_ramadan: 'Ramadan', c_family: 'Family', c_hajj: 'Hajj', c_europe: 'Europe', c_turkey: 'Istanbul & Northern Turkey', c_maldives: 'Maldives', c_honeymoon: 'Honeymoon',
    days: 'days', from: 'From', details: 'Program details', tDetails: 'Trip details', book: 'Book / Ask', hot: 'Most requested', offer: 'Special offer',
    fl: 'Flights', ht: 'Stay', tr: 'Transfers', gd: 'Guide', br: 'Breakfast', empty: 'No matching results. Try changing the filters or clearing the search.',
    gTitle: 'Pilgrim & Visitor Guide', fTitle: 'FAQ',
    gNote: 'Note: general information only. Prices, requirements and official dates may change; verify with the competent authorities.',
    steps: ['Decide trip type, expected date and number of travelers.', 'Check passport validity and official requirements with the authorities.', 'Review the program, hotel and what the price includes.', 'Pack light, bring essential medication and copies of documents.', 'Keep contact numbers and booking details with you.'],
    faq: [['How do I book?', 'Press the inquiry button on a program to open WhatsApp with a ready message, then send it to our team.'], ['Are prices final?', 'No, prices are indicative and may change with season and availability. We confirm the final price before booking.'], ['Do you help with visas?', 'We offer guidance on visa procedures without guaranteeing approval; the decision rests with the authorities.'], ['Can I customize a program?', 'Yes, use the custom Umrah form and we will get back to you with options.']],
    cTitle: 'Request a custom Umrah program', cDesc: 'Tell us what you need and we will prepare a suitable proposal.',
    fName: 'Name', fPhone: 'Phone number', fTrav: 'Travelers', fBud: 'Approx. budget', fDate: 'Expected date', fNotes: 'Notes (optional)', fDest: 'Destination or service', fMore: 'Extra details (optional)',
    fSend: 'Open message in WhatsApp', fHint: 'The request opens in WhatsApp for you to review and send yourself; no data is sent to a server.',
    errReq: 'Please fill in the required fields correctly.', errPhone: 'Invalid phone number.', ok: 'Message prepared and WhatsApp opened. Review it, then send.',
    tTitle: 'Tour Programs & Destinations', tDesc: 'Trips to Europe, Turkey, the Maldives and more. Prices and details are editable samples.',
    sTitle: 'Our Services', svc: [['vs', 'Flight bookings', 'Compare options and book tickets that suit your trip.'], ['ht', 'Hotel bookings', 'Hotels matching your budget and destination.'], ['vs', 'Visa assistance', 'Guidance on procedures; approval is not guaranteed.'], ['tr', 'Transport', 'Airport, hotel and sightseeing transfers.'], ['pv', 'Private trips', 'Programs tailored to your family or group.'], ['hj', 'Hajj & Umrah services', 'Organization and guidance for pilgrims.']],
    wTitle: 'Why choose us', why: [['Clear details', 'We show what a program includes and excludes.'], ['Variety', 'Programs for different budgets and tastes.'], ['Fast replies', 'We aim to answer your inquiries quickly.'], ['Follow-up', 'We stay in touch before and during the trip.']],
    stTrav: 'Travelers', stDest: 'Destinations', stProg: 'Programs', statNote: '* Numbers above are placeholders to be replaced with real data.',
    rTitle: 'Customer reviews', rNote: 'Sample, non-real placeholders — not verified reviews. Replace with real ones before launch.',
    reviews: [['Sample customer 1', 'Sample: clear organization and quick replies.'], ['Sample customer 2', 'Sample: program details were easy to understand.'], ['Sample customer 3', 'Sample: good follow-up before travel.']],
    kTitle: 'Contact us', kDesc: 'Send your inquiry and we will reply via WhatsApp.', fTag: 'Travel, Hajj & Umrah office.', fLinks: 'Quick links', fMap: 'Location', mapPh: 'Map area — add embed URL in settings',
    mItin: 'Daily plan (illustrative sample)', mInc: 'Included', mExc: 'Not included', mNote: 'Prices, hotels and daily plan are illustrative, editable samples — not a confirmed offer.',
    day: 'Day', itH: ['Arrival, reception and hotel transfer', 'Worship and visits per the program', 'Preparing for departure and return'], itT: ['Arrival and reception', 'Tours and landmarks per the program', 'Free time and shopping', 'Departure and return'],
    incH: ['Accommodation (per program)', 'Local transport (sample)', 'Guidance support'], excH: ['Flights (unless stated)', 'Personal expenses', 'Visa fees if any'],
    incT: ['Accommodation (sample)', 'Listed tours', 'Reception'], excT: ['Flights (unless stated)', 'Personal expenses', 'Insurance'],
    waHello: 'Hello, I would like to inquire about your services.', waProg: 'Hello, I would like to inquire about: ', close: 'Close', top: 'Back to top', menu: 'Menu', prev: 'Previous', next: 'Next',
    mCust: 'Custom Umrah program request', mCon: 'Inquiry', pName: 'Name', pPhone: 'Phone', pTrav: 'Travelers', pBud: 'Budget', pDate: 'Date', pNotes: 'Notes', pDest: 'Destination/Service', off: 'Inactive — add the link in settings'
  }
};
/* ============ المنطق ============ */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
let lang = 'ar', Q = { type: '', dest: '', bud: '' }, chip = { H: 'all', T: 'all' }, gi = 0, cur = null, lastFocus = null, heroTimer;
const t = k => DICT[lang][k], L = o => o[lang];
const money = n => `${n.toLocaleString(lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US')} ${CFG.currency}`;
const waUrl = txt => `https://wa.me/${CFG.whatsapp}?text=${encodeURIComponent(txt)}`; // مصدر الرقم الوحيد
const store = { get() { try { return localStorage.getItem('lang'); } catch (e) { return null; } }, set(v) { try { localStorage.setItem('lang', v); } catch (e) {} } };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const svg = k => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[k]}"/></svg>`;

function opts(sel, arr, keep) { sel.innerHTML = arr.map(([v, l]) => `<option value="${v}">${esc(l)}</option>`).join(''); if (keep) sel.value = keep; }
function setLang(l) {
  lang = l; store.set(l);
  document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(e => { e.textContent = t(e.dataset.i18n); });
  $('#langBtn').textContent = t('lang'); $('#langBtn').setAttribute('aria-label', l === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  $('#burger').setAttribute('aria-label', t('menu')); $('#mClose').setAttribute('aria-label', t('close'));
  $('#toTop').setAttribute('aria-label', t('top')); $('#gPrev').setAttribute('aria-label', t('prev')); $('#gNext').setAttribute('aria-label', t('next'));
  $('#waFloat').setAttribute('aria-label', t('waBtn'));
  const n = L(CFG.name); $('#brandName').textContent = n; $('#fName2').textContent = n; $('#fName3').textContent = n; $('#logo').alt = n;
  opts($('#sType'), [['', t('any')], ['umrah', t('umrah')], ['hajj', t('hajj')], ['tour', t('tour')]], Q.type);
  opts($('#sDest'), [['', t('any')], ['mm', t('mm')], ['europe', t('europe')], ['turkey', t('turkey')], ['maldives', t('maldives')]], Q.dest);
  opts($('#sBud'), [['', t('any')], ['0-1500', t('b1')], ['1500-3000', t('b2')], ['3000-999999', t('b3')]], Q.bud);
  ['H', 'T'].forEach(g => { const s = $('#sort' + g), v = s.value; opts(s, [['def', t('sDef')], ['pa', t('sPa')], ['pd', t('sPd')], ['dur', t('sDur')]], v || 'def'); });
  $('#steps').innerHTML = t('steps').map(s => `<li>${esc(s)}</li>`).join('');
  $('#faq').innerHTML = t('faq').map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('');
  $('#services4').innerHTML = t('svc').map(([i, h, p]) => `<div class="card reveal">${svg(i)}<h3>${esc(h)}</h3><p>${esc(p)}</p><a class="btn btn-line sm" target="_blank" rel="noopener" href="${waUrl(t('waProg') + h)}">${esc(t('waBtn'))}</a></div>`).join('');
  $('#why').innerHTML = t('why').map(([h, p]) => `<div class="card reveal"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('');
  $('#reviews').innerHTML = t('reviews').map(([h, p]) => `<div class="card reveal"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`).join('');
  $('#fLinks').innerHTML = [['home', 'nHome'], ['umrah', 'nUmrah'], ['tours', 'nTours'], ['services', 'nServ'], ['about', 'nAbout'], ['contact', 'nContact']].map(([h, k]) => `<li><a href="#${h}">${esc(t(k))}</a></li>`).join('');
  $('#fInfo').innerHTML = [CFG.phone, CFG.email, L(CFG.address), L(CFG.hours)].map(x => `<li>${esc(x)}</li>`).join('');
  $('#social').innerHTML = Object.entries(CFG.social).map(([k, u]) => u ? `<a href="${esc(u)}" target="_blank" rel="noopener">${k}</a>` : `<span title="${esc(t('off'))}" aria-disabled="true">${k}</span>`).join('');
  $('#map').innerHTML = CFG.mapEmbedUrl ? `<iframe src="${esc(CFG.mapEmbedUrl)}" loading="lazy" title="map"></iframe>` : esc(t('mapPh'));
  $$('[data-wa]').forEach(a => { a.href = waUrl(t('waHello')); });
  $('#stats').innerHTML = CFG.stats.map(s => `<div><b data-v="${s.v}">${s.v.toLocaleString('en-US')}</b><span>${esc(t(s.k))}</span></div>`).join(''); statsDone = false; watchStats();
  renderChips(); render('H'); render('T');
  if (cur) openModal(cur, true);
}
function renderChips() {
  ['H', 'T'].forEach(g => {
    $('#chips' + g).innerHTML = CATS[g].map(c => `<button type="button" class="chip" data-c="${c}" aria-pressed="${chip[g] === c}">${esc(t('c_' + c))}</button>`).join('');
  });
}
function filtered(g) {
  let a = PROGRAMS.filter(p => p.g === g && (chip[g] === 'all' || p.cat === chip[g]));
  if (Q.type) a = a.filter(p => p.type === Q.type);
  if (Q.dest) a = a.filter(p => p.dest === Q.dest);
  if (Q.bud) { const [lo, hi] = Q.bud.split('-').map(Number); a = a.filter(p => p.price >= lo && p.price <= hi); }
  const s = $('#sort' + g).value;
  if (s === 'pa') a.sort((x, y) => x.price - y.price); if (s === 'pd') a.sort((x, y) => y.price - x.price); if (s === 'dur') a.sort((x, y) => x.days - y.days);
  return a;
}
function render(g) {
  const a = filtered(g), grid = $('#grid' + g), em = $('#empty' + g);
  em.hidden = a.length > 0; em.textContent = t('empty');
  grid.innerHTML = a.map(p => {
    const name = L(p.n);
    return `<article class="card reveal"><div class="im"><img loading="lazy" src="${p.imgs[0]}" alt="${esc(name)}" onerror="this.style.display='none'">${p.tag ? `<span class="tag">${esc(t(p.tag))}</span>` : ''}</div>
    <div class="bd"><small>${esc(t('c_' + p.cat))} — ${p.days} ${esc(t('days'))}</small><h3>${esc(name)}</h3><p class="loc">${esc(L(p.loc))}</p>
    <p class="pr"><small>${esc(t('from'))}</small> ${money(p.price)}</p><div class="svcs">${p.svc.map(s => `<span>${esc(t(s))}</span>`).join('')}</div>
    <div class="btns"><button class="btn btn-line" type="button" data-d="${p.id}">${esc(t(g === 'H' ? 'details' : 'tDetails'))}</button><a class="btn btn-gold" target="_blank" rel="noopener" href="${waUrl(t('waProg') + name)}">${esc(t('book'))}</a></div></div></article>`;
  }).join('');
  observe();
}
/* النافذة المنبثقة */
function openModal(id, keep) {
  const p = PROGRAMS.find(x => x.id === id); if (!p) return; cur = id; if (!keep) { gi = 0; lastFocus = document.activeElement; }
  const h = p.g === 'H', m = $('#modal');
  $('#mTitle').textContent = L(p.n); $('#mMeta').textContent = `${t('from')} ${money(p.price)} — ${p.days} ${t('days')}`;
  $('#mDesc').textContent = L(p.n) + ' — ' + t('mNote'); $('#mHotel').textContent = L(p.loc);
  $('#mItin').innerHTML = t(h ? 'itH' : 'itT').map((x, i) => `<details${i === 0 ? ' open' : ''}><summary>${t('day')} ${i + 1}</summary><p>${esc(x)}</p></details>`).join('');
  $('#mInc').innerHTML = t(h ? 'incH' : 'incT').map(x => `<li>${esc(x)}</li>`).join(''); $('#mExc').innerHTML = t(h ? 'excH' : 'excT').map(x => `<li>${esc(x)}</li>`).join('');
  $('#mWa').href = waUrl(t('waProg') + L(p.n)); gal(0);
  m.hidden = false; document.body.style.overflow = 'hidden'; if (!keep) $('#mClose').focus();
}
function gal(d) { const p = PROGRAMS.find(x => x.id === cur); gi = (gi + d + p.imgs.length) % p.imgs.length; const i = $('#gImg'); i.style.display = ''; i.src = p.imgs[gi]; i.alt = `${L(p.n)} (${gi + 1}/${p.imgs.length})`; i.onerror = () => { i.style.display = 'none'; }; }
function closeModal() { $('#modal').hidden = true; document.body.style.overflow = ''; cur = null; if (lastFocus) lastFocus.focus(); }
/* النماذج */
function form(f, title, fields) {
  const d = Object.fromEntries(new FormData(f)), msg = $('.msg', f); let bad = false;
  $$('input,textarea', f).forEach(i => i.classList.remove('bad'));
  ['name', 'phone', 'trav', ...fields].forEach(k => { const i = f.elements[k], v = (d[k] || '').trim(); if (!v || (k === 'trav' && +v < 1)) { i.classList.add('bad'); bad = true; } });
  if (bad) { msg.className = 'msg full err'; msg.textContent = t('errReq'); return; }
  if (!/^[0-9+\s()-]{7,20}$/.test(d.phone.trim())) { f.elements.phone.classList.add('bad'); msg.className = 'msg full err'; msg.textContent = t('errPhone'); return; }
  const lines = [title, `${t('pName')}: ${d.name}`, `${t('pPhone')}: ${d.phone}`, `${t('pTrav')}: ${d.trav}`];
  if (d.bud) lines.push(`${t('pBud')}: ${d.bud}`); if (d.dest) lines.push(`${t('pDest')}: ${d.dest}`); if (d.date) lines.push(`${t('pDate')}: ${d.date}`); if (d.notes) lines.push(`${t('pNotes')}: ${d.notes}`);
  msg.className = 'msg full ok'; msg.textContent = t('ok'); window.open(waUrl(lines.join('\n')), '_blank', 'noopener');
}
/* الظهور والعدّاد */
let io, statsDone = false, sio;
function observe() { io = io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 }); $$('.reveal:not(.in)').forEach(e => io.observe(e)); }
function watchStats() {
  if (sio) sio.disconnect(); const box = $('#stats'), red = matchMedia('(prefers-reduced-motion:reduce)').matches;
  sio = new IntersectionObserver(es => { if (es[0].isIntersecting && !statsDone) { statsDone = true; sio.disconnect(); if (red) return;
    $$('b', box).forEach(b => { const v = +b.dataset.v, t0 = performance.now(); (function step(n) { const k = Math.min((n - t0) / 1600, 1); b.textContent = Math.round(v * k).toLocaleString('en-US'); if (k < 1) requestAnimationFrame(step); })(t0); }); } }, { threshold: .4 });
  sio.observe(box);
}
function startHero() {
  const box = $('.slides'), imgs = [IMG.kaaba, IMG.madina, IMG.hero]; box.innerHTML = imgs.map(s => `<img src="${s}" alt="" onerror="this.remove()">`).join('');
  let i = 0; const all = () => $$('img', box); if (all()[0]) all()[0].classList.add('on');
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  clearInterval(heroTimer); heroTimer = setInterval(() => { const a = all(); if (a.length < 2) return; a[i % a.length].classList.remove('on'); i++; a[i % a.length].classList.add('on'); }, CFG.heroSeconds * 1000);
}
/* ============ التهيئة ============ */
document.addEventListener('DOMContentLoaded', () => {
  $('#logo').src = CFG.logo; $('#logo').onerror = () => { $('.logo-box').style.display = 'none'; };
  $('#year').textContent = new Date().getFullYear();
  const nav = $('#nav'), top = $('#toTop'), menu = $('#menu'), bur = $('#burger');
  const onScroll = () => { nav.classList.toggle('scrolled', scrollY > 40); top.hidden = scrollY < 500; }; addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const closeMenu = () => { menu.classList.remove('open'); bur.setAttribute('aria-expanded', 'false'); };
  bur.addEventListener('click', () => { const o = menu.classList.toggle('open'); bur.setAttribute('aria-expanded', o); });
  menu.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  top.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
  $('#langBtn').addEventListener('click', () => setLang(lang === 'ar' ? 'en' : 'ar'));
  $('#sForm').addEventListener('submit', e => { e.preventDefault(); Q = { type: $('#sType').value, dest: $('#sDest').value, bud: $('#sBud').value }; chip = { H: 'all', T: 'all' }; renderChips(); render('H'); render('T'); $(Q.type === 'tour' ? '#tours' : '#umrah').scrollIntoView({ behavior: 'smooth' }); });
  ['H', 'T'].forEach(g => {
    $('#chips' + g).addEventListener('click', e => { const b = e.target.closest('.chip'); if (!b) return; chip[g] = b.dataset.c; renderChips(); render(g); });
    $('#sort' + g).addEventListener('change', () => render(g));
    $('#grid' + g).addEventListener('click', e => { const b = e.target.closest('[data-d]'); if (b) openModal(b.dataset.d); });
  });
  $('#mClose').addEventListener('click', closeModal); $('#gPrev').addEventListener('click', () => gal(-1)); $('#gNext').addEventListener('click', () => gal(1));
  $('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { if (cur) closeModal(); closeMenu(); }
    if (cur && e.key === 'Tab') { const f = $$('button,a[href],summary', $('.m-box')).filter(x => x.offsetParent); const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
    if (cur && e.key === 'ArrowLeft') gal(-1); if (cur && e.key === 'ArrowRight') gal(1);
  });
  $('#fCustom').addEventListener('submit', e => { e.preventDefault(); form(e.target, t('mCust'), ['bud']); });
  $('#fContact').addEventListener('submit', e => { e.preventDefault(); form(e.target, t('mCon'), ['dest']); });
  startHero(); setLang(store.get() === 'en' ? 'en' : 'ar');
});
