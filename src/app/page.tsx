'use client'

import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    const W = window as any

    // ===== DATA =====
    const S=[
      {n:1,nm:"الفاتحة",ay:7,tp:"مكية"},{n:2,nm:"البقرة",ay:286,tp:"مدنية"},{n:3,nm:"آل عمران",ay:200,tp:"مدنية"},
      {n:4,nm:"النساء",ay:176,tp:"مدنية"},{n:5,nm:"المائدة",ay:120,tp:"مدنية"},{n:6,nm:"الأنعام",ay:165,tp:"مكية"},
      {n:7,nm:"الأعراف",ay:206,tp:"مكية"},{n:8,nm:"الأنفال",ay:75,tp:"مدنية"},{n:9,nm:"التوبة",ay:129,tp:"مدنية"},
      {n:10,nm:"يونس",ay:109,tp:"مكية"},{n:11,nm:"هود",ay:123,tp:"مكية"},{n:12,nm:"يوسف",ay:111,tp:"مكية"},
      {n:13,nm:"الرعد",ay:43,tp:"مدنية"},{n:14,nm:"إبراهيم",ay:52,tp:"مكية"},{n:15,nm:"الحجر",ay:99,tp:"مكية"},
      {n:16,nm:"النحل",ay:128,tp:"مكية"},{n:17,nm:"الإسراء",ay:111,tp:"مكية"},{n:18,nm:"الكهف",ay:110,tp:"مكية"},
      {n:19,nm:"مريم",ay:98,tp:"مكية"},{n:20,nm:"طه",ay:135,tp:"مكية"},{n:21,nm:"الأنبياء",ay:112,tp:"مكية"},
      {n:22,nm:"الحج",ay:78,tp:"مدنية"},{n:23,nm:"المؤمنون",ay:118,tp:"مكية"},{n:24,nm:"النور",ay:64,tp:"مدنية"},
      {n:25,nm:"الفرقان",ay:77,tp:"مكية"},{n:26,nm:"الشعراء",ay:227,tp:"مكية"},{n:27,nm:"النمل",ay:93,tp:"مكية"},
      {n:28,nm:"القصص",ay:88,tp:"مكية"},{n:29,nm:"العنكبوت",ay:69,tp:"مكية"},{n:30,nm:"الروم",ay:60,tp:"مكية"},
      {n:31,nm:"لقمان",ay:34,tp:"مكية"},{n:32,nm:"السجدة",ay:30,tp:"مكية"},{n:33,nm:"الأحزاب",ay:73,tp:"مدنية"},
      {n:34,nm:"سبأ",ay:54,tp:"مكية"},{n:35,nm:"فاطر",ay:45,tp:"مكية"},{n:36,nm:"يس",ay:83,tp:"مكية"},
      {n:37,nm:"الصافات",ay:182,tp:"مكية"},{n:38,nm:"ص",ay:88,tp:"مكية"},{n:39,nm:"الزمر",ay:75,tp:"مكية"},
      {n:40,nm:"غافر",ay:85,tp:"مكية"},{n:41,nm:"فصلت",ay:54,tp:"مكية"},{n:42,nm:"الشورى",ay:53,tp:"مكية"},
      {n:43,nm:"الزخرف",ay:89,tp:"مكية"},{n:44,nm:"الدخان",ay:59,tp:"مكية"},{n:45,nm:"الجاثية",ay:37,tp:"مكية"},
      {n:46,nm:"الأحقاف",ay:35,tp:"مكية"},{n:47,nm:"محمد",ay:38,tp:"مدنية"},{n:48,nm:"الفتح",ay:29,tp:"مدنية"},
      {n:49,nm:"الحجرات",ay:18,tp:"مدنية"},{n:50,nm:"ق",ay:45,tp:"مكية"},{n:51,nm:"الذاريات",ay:60,tp:"مكية"},
      {n:52,nm:"الطور",ay:49,tp:"مكية"},{n:53,nm:"النجم",ay:62,tp:"مكية"},{n:54,nm:"القمر",ay:55,tp:"مكية"},
      {n:55,nm:"الرحمن",ay:78,tp:"مدنية"},{n:56,nm:"الواقعة",ay:96,tp:"مكية"},{n:57,nm:"الحديد",ay:29,tp:"مدنية"},
      {n:58,nm:"المجادلة",ay:22,tp:"مدنية"},{n:59,nm:"الحشر",ay:24,tp:"مدنية"},{n:60,nm:"الممتحنة",ay:13,tp:"مدنية"},
      {n:61,nm:"الصف",ay:14,tp:"مدنية"},{n:62,nm:"الجمعة",ay:11,tp:"مدنية"},{n:63,nm:"المنافقون",ay:11,tp:"مدنية"},
      {n:64,nm:"التغابن",ay:18,tp:"مدنية"},{n:65,nm:"الطلاق",ay:12,tp:"مدنية"},{n:66,nm:"التحريم",ay:12,tp:"مدنية"},
      {n:67,nm:"الملك",ay:30,tp:"مكية"},{n:68,nm:"القلم",ay:52,tp:"مكية"},{n:69,nm:"الحاقة",ay:52,tp:"مكية"},
      {n:70,nm:"المعارج",ay:44,tp:"مكية"},{n:71,nm:"نوح",ay:28,tp:"مكية"},{n:72,nm:"الجن",ay:28,tp:"مكية"},
      {n:73,nm:"المزمل",ay:20,tp:"مكية"},{n:74,nm:"المدثر",ay:56,tp:"مكية"},{n:75,nm:"القيامة",ay:40,tp:"مكية"},
      {n:76,nm:"الإنسان",ay:31,tp:"مدنية"},{n:77,nm:"المرسلات",ay:50,tp:"مكية"},{n:78,nm:"النبأ",ay:40,tp:"مكية"},
      {n:79,nm:"النازعات",ay:46,tp:"مكية"},{n:80,nm:"عبس",ay:42,tp:"مكية"},{n:81,nm:"التكوير",ay:29,tp:"مكية"},
      {n:82,nm:"الانفطار",ay:19,tp:"مكية"},{n:83,nm:"المطففين",ay:36,tp:"مكية"},{n:84,nm:"الانشقاق",ay:25,tp:"مكية"},
      {n:85,nm:"البروج",ay:22,tp:"مكية"},{n:86,nm:"الطارق",ay:17,tp:"مكية"},{n:87,nm:"الأعلى",ay:19,tp:"مكية"},
      {n:88,nm:"الغاشية",ay:26,tp:"مكية"},{n:89,nm:"الفجر",ay:30,tp:"مكية"},{n:90,nm:"البلد",ay:20,tp:"مكية"},
      {n:91,nm:"الشمس",ay:15,tp:"مكية"},{n:92,nm:"الليل",ay:21,tp:"مكية"},{n:93,nm:"الضحى",ay:11,tp:"مكية"},
      {n:94,nm:"الشرح",ay:8,tp:"مكية"},{n:95,nm:"التين",ay:8,tp:"مكية"},{n:96,nm:"العلق",ay:19,tp:"مكية"},
      {n:97,nm:"القدر",ay:5,tp:"مكية"},{n:98,nm:"البينة",ay:8,tp:"مدنية"},{n:99,nm:"الزلزلة",ay:8,tp:"مدنية"},
      {n:100,nm:"العاديات",ay:11,tp:"مكية"},{n:101,nm:"القارعة",ay:11,tp:"مكية"},{n:102,nm:"التكاثر",ay:8,tp:"مكية"},
      {n:103,nm:"العصر",ay:3,tp:"مكية"},{n:104,nm:"الهمزة",ay:9,tp:"مكية"},{n:105,nm:"الفيل",ay:5,tp:"مكية"},
      {n:106,nm:"قريش",ay:4,tp:"مكية"},{n:107,nm:"الماعون",ay:7,tp:"مكية"},{n:108,nm:"الكوثر",ay:3,tp:"مكية"},
      {n:109,nm:"الكافرون",ay:6,tp:"مكية"},{n:110,nm:"النصر",ay:3,tp:"مدنية"},{n:111,nm:"المسد",ay:5,tp:"مكية"},
      {n:112,nm:"الإخلاص",ay:4,tp:"مكية"},{n:113,nm:"الفلق",ay:5,tp:"مكية"},{n:114,nm:"الناس",ay:6,tp:"مدنية"}
    ];

    const BUILTIN=[
      {id:'ar.alafasy',dl:'afasy',nm:'مشاري العفاسي',im:'https://picsum.photos/seed/alafasy/100/100',builtin:true},
      {id:'ar.abdulbasitmurattal',dl:'abdulbasit',nm:'عبدالباسط عبدالصمد',im:'https://picsum.photos/seed/abdulbasit/100/100',builtin:true},
      {id:'ar.husary',dl:'husary',nm:'محمود خليل الحصري',im:'https://picsum.photos/seed/husary/100/100',builtin:true},
      {id:'ar.minshawimurattal',dl:'minshawi',nm:'محمد صديق المنشاوي',im:'https://picsum.photos/seed/minshawi/100/100',builtin:true},
      {id:'ar.abdurrahmaansudais',dl:'sudais',nm:'عبدالرحمن السديس',im:'https://picsum.photos/seed/sudais/100/100',builtin:true},
      {id:'ar.maheralmuaiqly',dl:'maher',nm:'ماهر المعيقلي',im:'https://picsum.photos/seed/maher/100/100',builtin:true},
      {id:'ar.hudhaify',dl:'hudhaify',nm:'علي الحذيفي',im:'https://picsum.photos/seed/hudhaify/100/100',builtin:true},
      {id:'ar.ahmedajamy',dl:'ajamy',nm:'أحمد العجمي',im:'https://picsum.photos/seed/ajamy/100/100',builtin:true},
      {id:'ar.abdullahbasfar',dl:'basfar',nm:'عبد الله البصفر',im:'https://picsum.photos/seed/basfar/100/100',builtin:true},
      {id:'ar.nufais',dl:'nufais',nm:'أحمد النفيس',im:'https://picsum.photos/seed/nufais/100/100',builtin:true},
      {id:null,dl:'shur',nm:'سعود الشريم',im:'https://picsum.photos/seed/shur/100/100',builtin:true},
      {id:null,dl:'yasser',nm:'ياسر الدوسري',im:'https://picsum.photos/seed/yasser/100/100',builtin:true},
      {id:null,dl:'qtm',nm:'ناصر القطامي',im:'https://picsum.photos/seed/qtm/100/100',builtin:true},
      {id:null,dl:'jleel',nm:'خالد الجليل',im:'https://picsum.photos/seed/jleel/100/100',builtin:true},
      {id:'ar.idrisabkr',dl:'abkr',nm:'إدريس أبكر',im:'https://picsum.photos/seed/abkr/100/100',builtin:true},
      {id:null,dl:'shatri',nm:'أبو بكر الشاطري',im:'https://picsum.photos/seed/shatri/100/100',builtin:true}
    ];

    // NEW_POOL: قراء من mp3quran.net مع توقيتات زمنية دقيقة من Timing API (115 قارئ)
    // كل قارئ له readId يُستخدم لجلب التوقيتات من /api/mp3quran-timing
    const NEW_POOL=[
      // === القراء الموجودون (مع تحديث السيرفرات و readId) ===
      {nm:'عبدالله الجهني',url:'https://server13.mp3quran.net/jhn/{num}.mp3',readId:62},
      {nm:'إبراهيم الأخضر',url:'https://server6.mp3quran.net/akdr/{num}.mp3',readId:1},
      {nm:'سعيد أبو عونة',url:'https://server6.mp3quran.net/aboona/{num}.mp3'},
      {nm:'خالد القحطاني',url:'https://server10.mp3quran.net/qht/{num}.mp3',readId:21},
      {nm:'فارس عباد',url:'https://server8.mp3quran.net/frs_a/{num}.mp3',readId:81},
      {nm:'وديع اليمني',url:'https://server6.mp3quran.net/wdee3/{num}.mp3',readId:219},
      {nm:'محمد الطبلاوي',url:'https://server12.mp3quran.net/tblawi/{num}.mp3',readId:106},
      {nm:'هاني الرفاعي',url:'https://server8.mp3quran.net/hani/{num}.mp3',readId:89},
      {nm:'ساهل ياسين',url:'https://server6.mp3quran.net/shl/{num}.mp3',readId:32},
      {nm:'ناصر القطبي',url:'https://server6.mp3quran.net/ketbi/{num}.mp3'},
      {nm:'بندر بليهه',url:'https://server6.mp3quran.net/balilah/{num}.mp3',readId:217},
      {nm:'صلاح البدير',url:'https://server6.mp3quran.net/s_bud/{num}.mp3',readId:43},
      {nm:'ماجد الزامل',url:'https://server9.mp3quran.net/zaml/{num}.mp3',readId:139},
      {nm:'ماجد العنزي',url:'https://server8.mp3quran.net/majd_onazi/{num}.mp3'},
      {nm:'صلاح الفوزان',url:'https://server10.mp3quran.net/fawzan/{num}.mp3'},
      {nm:'عادل الكلباني',url:'https://server8.mp3quran.net/a_klb/{num}.mp3'},
      {nm:'عادل ريان',url:'https://server8.mp3quran.net/ryan/{num}.mp3',readId:48},
      {nm:'عبدالمحسن القاسم',url:'https://server8.mp3quran.net/qasm/{num}.mp3',readId:67},
      {nm:'فهد الكندري',url:'https://server10.mp3quran.net/Abdullahk/{num}.mp3',readId:160},
      {nm:'عبدالباري الثبيتي',url:'https://server6.mp3quran.net/thubti/{num}.mp3',readId:49},
      {nm:'عبدالله المطرود',url:'https://server8.mp3quran.net/mtrod/{num}.mp3',readId:59},
      {nm:'علي جابر',url:'https://server11.mp3quran.net/a_jbr/{num}.mp3',readId:76},
      {nm:'عبدالله الغامدي',url:'https://server6.mp3quran.net/ghamdi/{num}.mp3'},
      {nm:'عبدالعزيز الزهراني',url:'https://server9.mp3quran.net/zahrani/{num}.mp3',readId:56},
      {nm:'الحصري (تجويد)',url:'https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/{num}.mp3',readId:119},
      {nm:'الحصري (حفص)',url:'https://server13.mp3quran.net/husr/{num}.mp3',readId:118},
      {nm:'الدوسري (مجود)',url:'https://server11.mp3quran.net/yasser/{num}.mp3',readId:92},
      {nm:'السديس',url:'https://server11.mp3quran.net/sds/{num}.mp3',readId:54},
      {nm:'محمد الشريم',url:'https://server7.mp3quran.net/shur/{num}.mp3',readId:31},
      {nm:'أحمد الحواشي',url:'https://server11.mp3quran.net/hawashi/{num}.mp3',readId:6},
      {nm:'نبيل الرفاعي',url:'https://server9.mp3quran.net/nabil/{num}.mp3',readId:87},
      {nm:'محمد صالح',url:'https://server12.mp3quran.net/shah/{num}.mp3',readId:110},
      {nm:'عبدالله الخلف',url:'https://server14.mp3quran.net/khalf/{num}.mp3',readId:244},
      {nm:'عبدالله الموسى',url:'https://server14.mp3quran.net/mousa/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:243},
      {nm:'منصور السالمي',url:'https://server14.mp3quran.net/mansor/{num}.mp3',readId:245},
      {nm:'ناصر العصفور',url:'https://server14.mp3quran.net/alosfor/{num}.mp3'},
      {nm:'محمد البخيت',url:'https://server14.mp3quran.net/bukheet/{num}.mp3',readId:250},
      {nm:'ناصر الماجد',url:'https://server14.mp3quran.net/nasser_almajed/{num}.mp3'},
      {nm:'إسلام صبحي',url:'https://server14.mp3quran.net/islam/Rewayat-Hafs-A-n-Assem/{num}.mp3'},
      {nm:'محمد رفعت',url:'https://server14.mp3quran.net/refat/{num}.mp3'},
      {nm:'خالد الجليل',url:'https://server10.mp3quran.net/jleel/{num}.mp3',readId:20},
      {nm:'ناصر القطامي',url:'https://server6.mp3quran.net/qtm/{num}.mp3',readId:86},
      {nm:'عبدالرحمن الماجد',url:'https://server10.mp3quran.net/a_majed/{num}.mp3',readId:236},
      {nm:'أحمد عامر',url:'https://server10.mp3quran.net/Aamer/{num}.mp3',readId:203},
      {nm:'الدوكالي محمد العالم',url:'https://server7.mp3quran.net/dokali/{num}.mp3',readId:208},
      {nm:'سعد الغامدي',url:'https://server7.mp3quran.net/s_gmd/{num}.mp3',readId:30},
      {nm:'خالد المهنا',url:'https://server11.mp3quran.net/mohna/{num}.mp3',readId:159},
      {nm:'شيرزاد عبدالرحمن طاهر',url:'https://server12.mp3quran.net/taher/{num}.mp3',readId:38},
      {nm:'خليفة الطنيجي',url:'https://server12.mp3quran.net/tnjy/{num}.mp3',readId:24},
      {nm:'عبدالله خياط',url:'https://server12.mp3quran.net/kyat/{num}.mp3',readId:61},
      {nm:'عبدالبارئ محمد',url:'https://server12.mp3quran.net/bari/{num}.mp3',readId:50},
      {nm:'عبدالباسط (مرتل)',url:'https://server7.mp3quran.net/basit/{num}.mp3',readId:53},
      {nm:'عبدالباسط (مجود)',url:'https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/{num}.mp3',readId:51},
      // === قراء جدد من mp3quran Timing API (توقيتات دقيقة ⏱️) ===
      {nm:'إبراهيم العسيري',url:'https://server6.mp3quran.net/3siri/{num}.mp3',readId:3},
      {nm:'أبو بكر الشاطري',url:'https://server11.mp3quran.net/shatri/{num}.mp3',readId:4},
      {nm:'أحمد العجمي',url:'https://server10.mp3quran.net/ajm/{num}.mp3',readId:5},
      {nm:'أحمد صابر',url:'https://server8.mp3quran.net/saber/{num}.mp3',readId:8},
      {nm:'أحمد نعينع',url:'https://server11.mp3quran.net/ahmad_nu/{num}.mp3',readId:9},
      {nm:'أكرم العلاقمي',url:'https://server9.mp3quran.net/akrm/{num}.mp3',readId:10},
      {nm:'إدريس أبكر',url:'https://server6.mp3quran.net/abkr/{num}.mp3',readId:12},
      {nm:'الزين محمد أحمد',url:'https://server9.mp3quran.net/alzain/{num}.mp3',readId:13},
      {nm:'القارئ ياسين (ورش)',url:'https://server11.mp3quran.net/qari/{num}.mp3',readId:14},
      {nm:'العيون الكوشي (ورش)',url:'https://server11.mp3quran.net/koshi/{num}.mp3',readId:16},
      {nm:'توفيق الصايغ',url:'https://server6.mp3quran.net/twfeeq/{num}.mp3',readId:17},
      {nm:'خالد عبدالكافي',url:'https://server11.mp3quran.net/kafi/{num}.mp3',readId:22},
      {nm:'داود حمزة',url:'https://server9.mp3quran.net/hamza/{num}.mp3',readId:25},
      {nm:'زكي داغستاني',url:'https://server9.mp3quran.net/zaki/{num}.mp3',readId:33},
      {nm:'صابر عبدالحكم',url:'https://server12.mp3quran.net/hkm/{num}.mp3',readId:39},
      {nm:'صالح الصاهود',url:'https://server8.mp3quran.net/sahood/{num}.mp3',readId:40},
      {nm:'صالح الهبدان',url:'https://server6.mp3quran.net/habdan/{num}.mp3',readId:42},
      {nm:'صلاح الهاشم',url:'https://server12.mp3quran.net/salah_hashim_m/{num}.mp3',readId:44},
      {nm:'صلاح بو خاطر',url:'https://server8.mp3quran.net/bu_khtr/{num}.mp3',readId:46},
      {nm:'عبدالعزيز الأحمد',url:'https://server11.mp3quran.net/a_ahmed/{num}.mp3',readId:55},
      {nm:'عبدالله البعيجان',url:'https://server8.mp3quran.net/buajan/{num}.mp3',readId:58},
      {nm:'عبدالله بصفر',url:'https://server6.mp3quran.net/bsfr/{num}.mp3',readId:60},
      {nm:'عبدالرشيد صوفي (سوسي)',url:'https://server16.mp3quran.net/soufi/Rewayat-Assosi-A-n-Abi-Amr/{num}.mp3',readId:65},
      {nm:'عبدالمحسن الحارثي',url:'https://server6.mp3quran.net/mohsin_harthi/{num}.mp3',readId:66},
      {nm:'عبدالمحسن العبيكان',url:'https://server12.mp3quran.net/obk/{num}.mp3',readId:69},
      {nm:'عبدالهادي كناكري',url:'https://server6.mp3quran.net/kanakeri/{num}.mp3',readId:70},
      {nm:'عبدالودود حنيف',url:'https://server8.mp3quran.net/wdod/{num}.mp3',readId:71},
      {nm:'عبدالولي الأركاني',url:'https://server6.mp3quran.net/arkani/{num}.mp3',readId:72},
      {nm:'الحذيفي (حفص)',url:'https://server9.mp3quran.net/hthfi/{num}.mp3',readId:74},
      {nm:'الحذيفي (شعبة)',url:'https://server9.mp3quran.net/hthfi/Rewayat-Sho-bah-A-n-Asim/{num}.mp3',readId:305},
      {nm:'علي حجاج السويسي',url:'https://server9.mp3quran.net/hajjaj/{num}.mp3',readId:77},
      {nm:'عماد زهير حافظ',url:'https://server6.mp3quran.net/hafz/{num}.mp3',readId:78},
      {nm:'عمر القزابري (ورش)',url:'https://server9.mp3quran.net/omar_warsh/{num}.mp3',readId:80},
      {nm:'نعمة الحسان',url:'https://server8.mp3quran.net/namh/{num}.mp3',readId:88},
      {nm:'محمد أيوب',url:'https://server8.mp3quran.net/ayyub/{num}.mp3',readId:109},
      {nm:'محمد عبدالكريم',url:'https://server12.mp3quran.net/m_krm/{num}.mp3',readId:115},
      {nm:'محمود البنا (مجود)',url:'https://server8.mp3quran.net/bna/Almusshaf-Al-Mojawwad/{num}.mp3',readId:122},
      {nm:'مشاري العفاسي (mp3quran)',url:'https://server8.mp3quran.net/afs/{num}.mp3',readId:123},
      {nm:'ماهر المعيقلي (مجود)',url:'https://server12.mp3quran.net/maher/Almusshaf-Al-Mojawwad/{num}.mp3',readId:133},
      {nm:'محمد سايد (ورش)',url:'https://server16.mp3quran.net/m_sayed/Rewayat-Warsh-A-n-Nafi/{num}.mp3',readId:134},
      {nm:'أحمد طالب بن حميد',url:'https://server16.mp3quran.net/a_binhameed/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:137},
      {nm:'جمعان العصيمي',url:'https://server6.mp3quran.net/jaman/{num}.mp3',readId:181},
      {nm:'يوسف بن نوح أحمد',url:'https://server8.mp3quran.net/noah/{num}.mp3',readId:193},
      {nm:'محمد رشاد الشريف',url:'https://server10.mp3quran.net/rashad/{num}.mp3',readId:198},
      {nm:'أحمد الطرابلسي',url:'https://server10.mp3quran.net/trabulsi/{num}.mp3',readId:201},
      {nm:'رعد محمد الكردي',url:'https://server6.mp3quran.net/kurdi/{num}.mp3',readId:221},
      {nm:'عبدالرحمن العوسي',url:'https://server6.mp3quran.net/aloosi/{num}.mp3',readId:225},
      {nm:'محمد خليل القارئ',url:'https://server8.mp3quran.net/m_qari/{num}.mp3',readId:229},
      {nm:'إبراهيم الدوسري',url:'https://server10.mp3quran.net/ibrahim_dosri/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:232},
      {nm:'عبدالرحمن السويّد',url:'https://server16.mp3quran.net/a_swaiyd/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:135},
      {nm:'أحمد النفيس (server16)',url:'https://server16.mp3quran.net/nufais/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:259},
      {nm:'أحمد ديبان',url:'https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:265},
      {nm:'بيشه وا قادر الكردي',url:'https://server16.mp3quran.net/peshawa/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:268},
      {nm:'الحصري (دوري)',url:'https://server13.mp3quran.net/husr/Rewayat-Aldori-A-n-Abi-Amr/{num}.mp3',readId:269},
      {nm:'الحصري (قالون)',url:'https://server13.mp3quran.net/husr/Rewayat-Qalon-A-n-Nafi/{num}.mp3',readId:270},
      {nm:'هيثم الدخين',url:'https://server16.mp3quran.net/h_dukhain/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:273},
      {nm:'عبدالعزيز التركي',url:'https://server16.mp3quran.net/a_turki/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:282},
      {nm:'مصطفى إسماعيل (مجود)',url:'https://server8.mp3quran.net/mustafa/Almusshaf-Al-Mojawwad/{num}.mp3',readId:288},
      {nm:'أحمد المعصراوي',url:'https://server16.mp3quran.net/a_maasaraawi/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:289},
      {nm:'سيد أحمد هاشمي',url:'https://server16.mp3quran.net/s_hashemi/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:294},
      {nm:'خالد كريم محمدي',url:'https://server16.mp3quran.net/kh_mohammadi/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:295},
      {nm:'عكاشة كميني (بزي)',url:'https://server16.mp3quran.net/okasha/Rewayat-Albizi-A-n-Ibn-Katheer/{num}.mp3',readId:296},
      {nm:'حسن صالح',url:'https://server16.mp3quran.net/h_saleh/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:299},
      {nm:'صالح الشمراني',url:'https://server16.mp3quran.net/shamrani/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:300},
      {nm:'عيسى عمر سناكو',url:'https://server16.mp3quran.net/i_sanankoua/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:303},
      {nm:'أنس العمادي',url:'https://server16.mp3quran.net/a_alemadi/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:314},
      {nm:'محمد برهجي',url:'https://server16.mp3quran.net/M_Burhaji/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:340},
      {nm:'أحمد خليل شاهين',url:'https://server16.mp3quran.net/shaheen/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:256},
      {nm:'عبدالرشيد صوفي (حفص)',url:'https://server16.mp3quran.net/soufi/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:258},
      {nm:'الحصري (ورش)',url:'https://server13.mp3quran.net/husr/Rewayat-Warsh-A-n-Nafi/{num}.mp3',readId:120},
      {nm:'الحذيفي (قالون)',url:'https://server9.mp3quran.net/huthifi_qalon/{num}.mp3',readId:75},
      {nm:'حسن الدغريري',url:'https://server16.mp3quran.net/H-Aldaghriri/Rewayat-Hafs-A-n-Assem/{num}.mp3',readId:10905}
    ];

    const DL_MAP={
      'ar.alafasy':'afasy','ar.abdulbasitmurattal':'abdulbasit','ar.abdulbasitmujawwad':'abdulbasit',
      'ar.husary':'husary','ar.husarymujawwad':'husary','ar.minshawimurattal':'minshawi','ar.minshawimujawwad':'minshawi',
      'ar.abdurrahmaansudais':'sudais','ar.maheralmuaiqly':'maher','ar.hudhaify':'hudhaify',
      'ar.ahmedajamy':'ajamy','ar.abdullahbasfar':'basfar','ar.ahmednaina':'naina',
      'ar.saaborali':'aboona','ar.maaborali':'maab','ar.yasserdosari':'yasser',
      'ar.khalidqhtani':'qhtani','ar.faresabbad':'fares','ar.misharyalafasy':'afasy',
      'ar.nasseralketbi':'ketbi','ar.bandarbalilah':'balilah','ar.mohammedaltablawi':'tablawi',
      'ar.hanirefaey':'hane','ar.ali_hajjajisoufi':'hajjaji','ar.sahl_yaseen':'sahl'
    };

    const BG=[
      'https://picsum.photos/seed/nature1/1920/1080',
      'https://picsum.photos/seed/ocean7/1920/1080',
      'https://picsum.photos/seed/forest3/1920/1080',
      'https://picsum.photos/seed/mountains5/1920/1080',
      'https://picsum.photos/seed/sunset22/1920/1080',
      'https://picsum.photos/seed/desert88/1920/1080',
      'https://picsum.photos/seed/lake44/1920/1080',
      'https://picsum.photos/seed/meadow19/1920/1080',
      'https://picsum.photos/seed/river66/1920/1080',
      'https://picsum.photos/seed/sky99/1920/1080',
      'https://picsum.photos/seed/garden33/1920/1080',
      'https://picsum.photos/seed/cliff77/1920/1080',
      'https://picsum.photos/seed/valley55/1920/1080',
      'https://picsum.photos/seed/aurora11/1920/1080',
      'https://picsum.photos/seed/canyon42/1920/1080',
      'https://picsum.photos/seed/rainforest8/1920/1080'
    ];

    // ===== quran.com mapped reciters (ID → chapter_recitations with segments) =====
    // Only IDs verified to have ACTUAL timestamps (not just 200 response)
    const QC_MAP:any={
      'ar.alafasy':7,'ar.abdulbasitmurattal':2,'ar.abdulbasitmujawwad':1,
      'ar.husary':6,'ar.husarymujawwad':12,'ar.minshawimurattal':9,'ar.minshawimujawwad':8,
      'ar.abdurrahmaansudais':3,'ar.abubakrshatri':4,'ar.maheralmuaiqly':159,
      'ar.ahmedajamy':19,'ar.abdullahbasfar':66,
      // Additional mapped reciters with timestamps
      'ar.saaborali':17,'ar.sahl_yaseen':17,
      'ar.faresabbad':14,'ar.salahbudair':43,'ar.azizalili':44,
      'ar.misharyalafasy':7,'ar.mohammedaltablawi':91,'ar.yasserdosari':97
    };
    // Also map by dl (download) identifiers for link-mode reciters
    // Only IDs with ACTUAL timestamps verified via API testing
    // Each entry maps dl-folder → quran.com ID where the SAME reciter exists
    const QC_DL_MAP:any={
      // === المقرئون المدمجون (مُتحقَّق منهم) ===
      'afasy':7,'afasy_tajweed':7,
      'abdulbasit':2,'abdulbasit_mujawwad':1,
      'husary':6,'husary_mujawwad':12,'husary_tajweed':6,'m_husary':6,
      'minshawi':9,'minshawi_mujawwad':8,'minshawi_kids':168,
      'sudais':3,'sudais_tajweed':3,
      'ajamy':19,'basfar':66,
      'shatri':4,'shur':10,'shur_tajweed':10,'m_shur':10,
      // === قراء إضافيون مُتحقَّق منهم ===
      'aboona':17,'sahl':17,
      'fares':14,'hane':14,
      'salah_budair':43,'hajjaji':44,'tablawi':91,
      'yasser':97,'yasser_mujawwad':97,'dossari':97,
      'ketbi':11,'balilah':44,
      // === قراء جدد مُتحقَّق منهم (مطابقة صحيحة) ===
      'qtm':104,           // ناصر القطامي
      'jleel':170,         // خالد الجليل
      'maher':159,         // ماهر المعيقلي (نسخة 1440)
      'juhany':162,        // عبدالله الجهني
      'juhany_tajweed':162,
      'jaber':158,         // علي جابر
      'naina':126,         // أحمد ناينع
      'kandari':160,       // فهد الكندري
      'hajjaji2':128,      // علي الحاجاجي
      'khalifi':161,       // عبدالله الخليفي
      'matroud':124,       // عبدالله مطرود
      'albana':129,        // محمود علي البنا
      'husary_iza3a':122,  // الحصري إذاعة
      'nasseralketbi':11,
      // === قراء إضافيون من فحص quran.com (44 معرف) ===
      'basit':53,'sds':3,'afs':7,
      'thubti':104,'husr':6,'husr_mujawwad':12,
      'bna':129,'mustafa':88,
      'akdr':17,'ajm':19,
      'akrm':127,'ahmad_nu':126,
      'bsfr':66,'3siri':95,'alzain':95,
      'a_majed':95
    };
    // Timestamps from quran.com API (ms per ayah: [timestamp_from, timestamp_to])
    let syncedTimestamps:{from:number,to:number,key:string}[]=[];
    // Verse timings in standard format: {verse_key, start_time, end_time}
    let verseTimings:{verse_key:string,start_time:number,end_time:number}[]=[];

    // ===== STATE =====
    let st={curS:0,curA:0,totV:0,playing:false,repeating:false,curR:null,sData:[],loading:false,dlMRun:false,dlAbort:false,linkMode:false,qcMode:false};
    let RC:any[]=[];
    let PR:any[]=[];
    let cachedEd:any=null;
    let ayahTimings:number[]=[];
    let lastAutoAyah:number=-1;
    // rAF-based zero-delay sync loop
    let rafId:number|null=null;

    // ===== دالة لجلب توقيتات سورة معينة لقارئ معين برابط مباشر =====
    async function getQuranTimestamps(reciterId:number, chapterNumber:number):Promise<{verse_key:string,start_time:number,end_time:number}[]>{
      try {
        const response = await fetch('/api/quran-sync?reciter=' + reciterId + '&chapter=' + chapterNumber);
        const data = await response.json();
        if(!data || !data.audio_file) return [];
        // مصفوفة تحتوي على وقت بداية ونهاية كل آية بالملي ثانية
        const verse_timings: {verse_key:string,start_time:number,end_time:number}[] = (data.audio_file.verse_timings || data.audio_file.timestamps || []).map(function(t:any){
          return {
            verse_key: t.verse_key || '',
            start_time: t.start_time || t.timestamp_from || 0,
            end_time: t.end_time || t.timestamp_to || 0
          };
        });
        return verse_timings;
      } catch(e) {
        return [];
      }
    }

    // ===== عرض الآيات (scroll mode) =====
    let allViewMode=false; // false=آية واحدة, true=كل الآيات
    let arabicDigits=['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    function toArNum(n:number){return String(n).split('').map(function(d){return arabicDigits[Number(d)]}).join('')}
    function toggleViewMode(){
      allViewMode=!allViewMode;
      if(allViewMode){
        E.aVr.style.display='none';
        E.surahBox.style.display='block';
        E.viewToggleBtn.innerHTML='<i class="fas fa-align-justify"></i> عرض آية واحدة';
        // تحديث التمييز
        highlightActiveAyah(lastAutoAyah>=1?lastAutoAyah:st.curA);
      }else{
        E.aVr.style.display='block';
        E.surahBox.style.display='none';
        E.viewToggleBtn.innerHTML='<i class="fas fa-list"></i> عرض كل الآيات';
      }
    }
    (window as any).toggleViewMode=toggleViewMode;
    function renderAllAyahs(ayahs:any[]){
      if(!ayahs||!ayahs.length)return;
      E.surahBox.innerHTML='';
      for(let i=0;i<ayahs.length;i++){
        let span=document.createElement('span');
        span.className='ayah-span';
        span.id='ayah-'+(i+1);
        span.textContent=ayahs[i].text+' ﴿'+toArNum(i+1)+'﴾ ';
        (function(ayahIdx:number){
          span.addEventListener('click',function(){
            seekToAyah(ayahIdx+1);
          });
        })(i);
        E.surahBox.appendChild(span);
      }
      E.surahBox.style.display=allViewMode?'block':'none';
      E.viewToggleBtn.style.display='inline-block';
      E.aVr.style.display=allViewMode?'none':'block';
    }
    function highlightActiveAyah(ayahNum:number){
      if(!allViewMode||ayahNum<1)return;
      document.querySelectorAll('.ayah-span').forEach(function(el){el.classList.remove('active')});
      let target=document.getElementById('ayah-'+ayahNum);
      if(target){
        target.classList.add('active');
        target.scrollIntoView({behavior:'smooth',block:'center'});
      }
    }
    function seekToAyah(num:number){
      if(ayahTimings.length>=num){E.aud.currentTime=ayahTimings[num-1];st.curA=num;lastAutoAyah=num;showAyah();highlightActiveAyah(num)}
      else if(syncedTimestamps.length>=num){E.aud.currentTime=syncedTimestamps[num-1].from/1000;st.curA=num;lastAutoAyah=num;showAyah();highlightActiveAyah(num)}
    }

    // ===== HELPERS =====
    function $(id:string){return document.getElementById(id)}
    let E:any={
      aud:$('aud'),ppB:$('ppB'),prvB:$('prvB'),nxtB:$('nxtB'),repB:$('repB'),
      pBar:$('pBar'),cT:$('cT'),dur:$('dur'),aVr:$('aVr'),sNm:$('sNm'),
      aCn:$('aCn'),tTx:$('tTx'),trTx:$('trTx'),rcG:$('rcG'),ld:$('ld'),
      wh:$('wh'),vd:$('vd'),linkTag:$('linkTag'),
      surahBox:$('surahBox'),viewToggleBtn:$('viewToggleBtn')
    };

    function gFav(){try{return JSON.parse(localStorage.getItem('fv_r'))||[]}catch(e){return[]}}
    function sFav(l:any[]){try{localStorage.setItem('fv_r',JSON.stringify(l))}catch(e){}}
    function isFav(d:string){return gFav().indexOf(d)!==-1}
    function togFav(d:string){let l=gFav(),i=l.indexOf(d);if(i===-1){l.push(d);toast('تمت الإضافة إلى المفضلات')}else{l.splice(i,1);toast('تمت الإزالة من المفضلات')}sFav(l);updFavUI()}
    function sLastR(d:string){try{localStorage.setItem('lr',d)}catch(e){}}
    function gLastR(){try{return localStorage.getItem('lr')}catch(e){return null}}
    function gCustom(){try{return JSON.parse(localStorage.getItem('cust_r'))||[]}catch(e){return[]}}
    function sCustom(l:any[]){try{localStorage.setItem('cust_r',JSON.stringify(l))}catch(e){}}
    function gAdded(){try{return JSON.parse(localStorage.getItem('added_new'))||[]}catch(e){return[]}}
    function sAdded(l:any[]){try{localStorage.setItem('added_new',JSON.stringify(l))}catch(e){}}
    function gSkipped(){try{return JSON.parse(localStorage.getItem('skipped_new'))||[]}catch(e){return[]}}
    function sSkipped(l:string[]){try{localStorage.setItem('skipped_new',JSON.stringify(l))}catch(e){}}
    function gHidden(){try{return JSON.parse(localStorage.getItem('hidden_r'))||[]}catch(e){return[]}}
    function sHidden(l:string[]){try{localStorage.setItem('hidden_r',JSON.stringify(l))}catch(e){}}

    function updFavUI(){
      let f=gFav(),b=$('favBdg');
      if(f.length>0){b.textContent=f.length;b.classList.add('on')}else b.classList.remove('on');
      document.querySelectorAll('.rc-c').forEach(function(c:any){let d=c.getAttribute('data-d');if(d&&isFav(d))c.classList.add('fav');else c.classList.remove('fav')});
    }

    function buildReciters(){
      let hidden=gHidden();
      let seenDl:any={};
      RC=[];
      BUILTIN.forEach(function(b:any){if(hidden.indexOf(b.dl)===-1&&!seenDl[b.dl]){seenDl[b.dl]=true;RC.push(b)}});
      gCustom().forEach(function(c:any){if(hidden.indexOf(c.dl)===-1&&!seenDl[c.dl]){seenDl[c.dl]=true;RC.push(c)}});
      gAdded().forEach(function(c:any){if(hidden.indexOf(c.dl)===-1&&!seenDl[c.dl]){seenDl[c.dl]=true;RC.push(c)}});
      RC.forEach(function(r:any){if(!r.url&&r.dl&&!r.id){r.url='https://server11.mp3quran.net/'+r.dl+'/{num}.mp3'}});
      PR=RC.filter(function(r:any){return r.id!==null});
      if(!st.curR&&PR.length)st.curR=PR[0];
    }

    // خريطة المجلدات → السيرفر الصحيح (من mp3quran.net API v3)
    const DL_SERVER:any={
      'afasy':'server8','afs':'server8','abdulbasit':'server7','abdulbasit_mujawwad':'server7','basit':'server7',
      'husary':'server13','husary_mujawwad':'server13','husary_tajweed':'server13','m_husary':'server13','husr':'server13',
      'minshawi':'server10','minshawi_mujawwad':'server10','minsh':'server10',
      'sudais':'server11','sudais_tajweed':'server11','sds':'server11',
      'ajamy':'server10','ajm':'server10','basfar':'server6','bsfr':'server6',
      'shatri':'server11','shur':'server7','shur_tajweed':'server7','m_shur':'server7',
      'maher':'server12','maher_mujawwad':'server12',
      'hudhaify':'server9','hthfi':'server9','nufais':'server16','abkr':'server6',
      'qtm':'server6','jleel':'server10','jaber':'server11','a_jbr':'server11',
      'yasser':'server11','yasser_mujawwad':'server11',
      'kandari':'server10','Abdullahk':'server10','thubti':'server6','makhloof':'server8',
      'qasim':'server8','fawzan':'server10','kalbani':'server8','a_klb':'server8',
      'ghamdi':'server6','jaber':'server16','zahran':'server9','zahrani':'server9',
      'maali':'server10','hawashi':'server11','nabil':'server9',
      'hamid':'server10','qarni':'server9','a_majed':'server10',
      'tablawi':'server12','tblawi':'server12','minshawi_mujawwad2':'server10',
      'ketbi':'server6','balilah':'server6',
      'fares':'server8','frs_a':'server8','hane':'server8','hani':'server8',
      'salah_budair':'server6','s_bud':'server6','hajjaji':'server9','hajjaj':'server9',
      'aboona':'server6','sahl':'server6','shl':'server6',
      'juhany':'server13','juhany_tajweed':'server13','jhn':'server13',
      'naina':'server11','shatri2':'server11',
      // قراء إضافيون من mp3quran timing API
      'akdr':'server6','3siri':'server6','qari':'server11','koshi':'server11',
      'twfeeq':'server6','qht':'server10','kafi':'server11','tnjy':'server12',
      'hamza':'server9','s_gmd':'server7','saber':'server8','alzain':'server9',
      'zaki':'server9','taher':'server12','hkm':'server12','sahood':'server8',
      'habdan':'server6','salah_hashim_m':'server12','bu_khtr':'server8','ryan':'server8',
      'mtrod':'server8','kyat':'server12','bari':'server12','a_ahmed':'server11',
      'buajan':'server8','mohsin_harthi':'server6','obk':'server12','kanakeri':'server6',
      'wdod':'server8','arkani':'server6','hafz':'server6','omar_warsh':'server9',
      'namh':'server8','shah':'server12','m_krm':'server12','ayyub':'server8',
      'bna':'server8','noah':'server8','rashad':'server10','trabulsi':'server10',
      'Aamer':'server10','dokali':'server7','wdee3':'server6','kurdi':'server6',
      'aloosi':'server6','m_qari':'server8','ibrahim_dosri':'server10',
      'a_swaiyd':'server16','a_binhameed':'server16','zaml':'server9',
      'mohna':'server11','jaman':'server6','a_turki':'server16',
      'mustafa':'server8','a_maasaraawi':'server16','s_hashemi':'server16',
      'kh_mohammadi':'server16','okasha':'server16','h_saleh':'server16',
      'shamrani':'server16','i_sanankoua':'server16','a_alemadi':'server16',
      'M_Burhaji':'server16','H-Aldaghriri':'server16','deban':'server16',
      'peshawa':'server16','shaheen':'server16',
      // القراء المضافة حديثاً من server14
      'refat':'server14','islam':'server14','mousa':'server14','khalf':'server14',
      'mansor':'server14','alosfor':'server14','bukheet':'server14',
      'nasser_almajed':'server14','muftah_sultany':'server14',
      'mrifai':'server11','hatem':'server11','jormy':'server11','bilal':'server11',
      'salamah':'server12','tareq':'server10','a_abdl':'server16'
    };
    function dlUrl(dlId:string,num:number){
      let s=String(num);while(s.length<3)s='0'+s;
      let srv=DL_SERVER[dlId]||'server8';
      return 'https://'+srv+'.mp3quran.net/'+dlId+'/'+s+'.mp3';
    }
    function dlFn(num:number){return S[num-1].nm+'.mp3'}
    function getRUrl(r:any,num:number){
      if(r.url){let s=String(num);while(s.length<3)s='0'+s;return r.url.replace('{num}',s)}
      if(r.dl)return dlUrl(r.dl,num);
      return null;
    }

    let dtbT:any=null;
    function showDTB(fn:string){let b=$('dtb');$('dtbFn').textContent=fn;b.classList.add('on');if(dtbT)clearTimeout(dtbT);dtbT=setTimeout(function(){b.classList.remove('on')},2800)}
    function dlSurah(reciterId:string,surahNum:number,fn:string,qcId?:number|null,directUrl?:string|null){
      showDTB(fn);
      let params='/api/download?reciter='+encodeURIComponent(reciterId)+'&surah='+surahNum;
      if(qcId)params+='&qcId='+qcId;
      if(directUrl)params+='&url='+encodeURIComponent(directUrl);
      let a=document.createElement('a');
      a.href=params;
      a.download=fn;
      document.body.appendChild(a);a.click();
      setTimeout(function(){if(a.parentNode)a.parentNode.removeChild(a)},2000);
    }
    function getReciterId(r:any):string|null{
      if(r.id)return r.id;
      let map:any={
        'nufais':'ar.nufais','shur':'ar.ahmedali','yasser':'ar.yasserdosari',
        'qtm':'ar.nasseralketbi','jleel':'ar.khalidjleel','abkr':'ar.idrisabkr',
        'shatri':'ar.abubakrshatri'
      };
      return map[r.dl]||null;
    }
    function getQCIdForReciter(r:any):number|null{
      // 3-tier: QC_MAP → QC_DL_MAP → dynamic qcId
      let qcId:number|null=null;
      if(r.id)qcId=QC_MAP[r.id]||null;
      if(!qcId&&r.dl)qcId=QC_DL_MAP[r.dl]||null;
      if(!qcId&&r.qcId)qcId=r.qcId;
      return qcId;
    }
    function dlFile(r:any,idx:number){
      let fn=dlFn(idx);
      let rid=getReciterId(r);
      let qcId=getQCIdForReciter(r);
      let directUrl=r.url||null;
      // Priority: quran.com full MP3 → alquran.cloud merge → direct URL redirect
      if(qcId){
        dlSurah(rid||'ar.alafasy',idx,fn,qcId,null);
        return;
      }
      if(rid){
        dlSurah(rid,idx,fn,null,directUrl);
        return;
      }
      if(directUrl){
        dlSurah('ar.alafasy',idx,fn,null,directUrl);
        return;
      }
      toast('رابط التحميل غير متاح لهذا القارئ')
    }

    // ===== QR =====
    const APK_URL='https://my-project-ramy1.vercel.app/quran-app.apk';
    function initQR(){
      let u=W.location.href;
      let q='https://api.qrserver.com/v1/create-qr-code/?size=300x300&data='+encodeURIComponent(u)+'&color=1a2a3a&bgcolor=ffffff&format=png';
      let qs='https://api.qrserver.com/v1/create-qr-code/?size=600x600&data='+encodeURIComponent(u)+'&color=1a2a3a&bgcolor=ffffff&format=png';
      let qrFi=$('qrFi'),qrBig=$('qrBig');if(qrFi)qrFi.src=q;if(qrBig)qrBig.src=qs;
    }
    function openQRSide(){$('qrSide').classList.add('open');$('qrOverlay').classList.add('open')}
    function closeQRSide(){$('qrSide').classList.remove('open');$('qrOverlay').classList.remove('open')}
    function copyLink(){
      navigator.clipboard.writeText(W.location.href).then(function(){toast('تم نسخ الرابط بنجاح')}).catch(function(){
        let ta=document.createElement('textarea');ta.value=W.location.href;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);toast('تم نسخ الرابط بنجاح');
      });
    }
    function shareLink(){
      if(navigator.share){navigator.share({title:'قرآن في كل زمان ومكان',url:W.location.href}).catch(function(){})}else{copyLink()}
    }

    // ===== واتساب =====
    function openWhatsApp(){
      let phone='972595061313';
      let msg=encodeURIComponent('السلام عليكم، أتواصل معكم بخصوص موقع قرآن في كل زمان ومكان');
      W.open('https://wa.me/'+phone+'?text='+msg,'_blank');
    }

    // ===== المفضلات =====
    function toggleFavM(){let o=$('favOv');if(o.classList.contains('on'))o.classList.remove('on');else{o.classList.add('on');rndFavL()}}
    function rndFavL(){
      let f=gFav(),c=$('favL');c.innerHTML='';
      if(!f.length){c.innerHTML='<div class="fv-empty"><i class="fas fa-heart-crack"></i><p>لا يوجد قراء مفضلون بعد</p><p style="font-size:.76rem;color:rgba(255,255,255,.18);margin-top:5px">انقر مرتين على بطاقة القارئ لإضافته</p></div>';return}
      f.forEach(function(d:string){
        let r=RC.find(function(x:any){return x.dl===d});if(!r)return;
        let it=document.createElement('div');it.className='fv-i';
        if(r.im){
          let img=document.createElement('img');img.src=r.im;img.alt=r.nm;img.className='fv-img';it.appendChild(img);
        }else{
          let av=document.createElement('div');av.className='fv-img';av.style.cssText='background:linear-gradient(135deg,rgba(231,76,60,.2),rgba(231,76,60,.08));border:2px solid rgba(231,76,60,.4);display:flex;align-items:center;justify-content:center;font-family:Amiri,serif;font-size:1.2rem;color:#e74c3c;border-radius:50%;width:45px;height:45px;flex-shrink:0';av.textContent=r.nm.charAt(0);it.appendChild(av);
        }
        let inf=document.createElement('div');inf.className='fv-info';
        let nm=document.createElement('div');nm.className='fv-nm';nm.textContent=r.nm;
        let mt=document.createElement('div');mt.className='fv-mt';mt.textContent=r.id?'متاح للتلاوة آية بآية':r.url?'متاح للتلاوة والتحميل':'متاح للتحميل فقط';
        inf.appendChild(nm);inf.appendChild(mt);
        let rb=document.createElement('button');rb.className='fv-rm';rb.innerHTML='<i class="fas fa-trash"></i>';rb.title='إزالة';
        (function(dd:string){rb.onclick=function(e:any){e.stopPropagation();togFav(dd);rndFavL()}})(d);
        if(r.id)(function(rec:any){it.onclick=function(){let i=PR.indexOf(rec);if(i!==-1)selR(i);toggleFavM()}})(r);
        else if(r.url)(function(rec:any){it.onclick=function(){selLinkR(rec);toggleFavM()}})(r);
        it.appendChild(inf);it.appendChild(rb);c.appendChild(it);
      });
    }

    function selLinkR(r:any){
      document.querySelectorAll('.rc-c').forEach(function(c:any){c.classList.remove('act')});
      let cards=document.querySelectorAll('.rc-c');
      cards.forEach(function(c:any){if(c.getAttribute('data-d')===r.dl)c.classList.add('act')});
      st.curR=r;if(r.dl)sLastR(r.dl);
      toast('تم اختيار: '+r.nm);scrollToSurBtn();showSurArrow();
      if(st.curS>0)startRd(st.curS);
    }

    // ===== التاريخ =====
    let dtI:any=null;
    function updDT(){
      let now=new Date();
      let t12=now.toLocaleTimeString('ar-EG',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true});
      let ap=now.getHours()<12?'صباحاً':'مساءً';
      let h=new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(now);
      let g=new Intl.DateTimeFormat('ar-EG',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(now);
      let ht=$('hTime'),hd=$('hDate'),mt=$('mTime'),mp=$('mPer'),mh=$('mHij'),mg=$('mGre');
      if(ht)ht.textContent=t12;if(hd)hd.textContent=h.split('،')[0];
      if(mt)mt.textContent=t12;if(mp)mp.textContent=ap;
      if(mh)mh.innerHTML=h.replace(/(\d+)/g,'<span>$1</span>');
      if(mg)mg.innerHTML=g.replace(/(\d+)/g,'<span>$1</span>');
    }
    function toggleDtM(){let m=$('dtOv');if(m.classList.contains('on')){m.classList.remove('on');if(dtI){clearInterval(dtI);dtI=null}}else{updDT();m.classList.add('on');dtI=setInterval(updDT,1000)}}

    // ===== Toast =====
    let tT:any=null;
    function toast(m:string){let t=$('toast');if(tT)clearTimeout(tT);t.textContent=m;t.classList.add('on');tT=setTimeout(function(){t.classList.remove('on')},2500)}

    // ===== إشعار القارئ =====
    let recNotifT:any=null;
    let recNotifI:any=null;
    function clearRecNotif(){if(recNotifT){clearTimeout(recNotifT);recNotifT=null}if(recNotifI){clearInterval(recNotifI);recNotifI=null}let el=$('recNotif');if(el)el.classList.remove('on')}
    function showReciterNotif(reciterName:string, surahName:string){
      let el=$('recNotif');let info=$('recNotifInfo');
      if(!el||!info)return;
      clearRecNotif();
      info.textContent=reciterName+' - '+surahName;
      el.classList.add('on');
      recNotifT=setTimeout(function(){el.classList.remove('on')},10000);
      if(recNotifI)clearInterval(recNotifI);
      recNotifI=setInterval(function(){if(st.playing){info.textContent=reciterName+' - '+surahName;el.classList.add('on');if(recNotifT)clearTimeout(recNotifT);recNotifT=setTimeout(function(){el.classList.remove('on')},10000)}else{clearInterval(recNotifI);recNotifI=null}},300000);
    }

    // ===== تحميل =====
    function buildSel(){}

    // ===== إضافة قارئ =====
    let webSearchTimer:any=null;
    function openAddR(){
      $('addROv').classList.add('on');$('addRQ').value='';let list=$('addRL');
      list.innerHTML='<div style="text-align:center;padding:30px 15px;color:rgba(255,255,255,.25)"><i class="fas fa-globe" style="font-size:2rem;display:block;margin-bottom:10px"></i>اكتب اسم القارئ للبحث في الإنترنت<br><span style="font-size:.72rem">مثال: محمد رفعت، عبدالباسط، العفاسي</span></div>';
      $('addRCnt').textContent='';
      setTimeout(function(){$('addRQ').focus()},150);
    }
    function closeAddR(){$('addROv').classList.remove('on');if(webSearchTimer){clearTimeout(webSearchTimer);webSearchTimer=null}}
    function onSearchInput(e:any){
      let q=(e.target.value||'').trim();
      if(webSearchTimer){clearTimeout(webSearchTimer);webSearchTimer=null}
      if(!q){let list=$('addRL');list.innerHTML='<div style="text-align:center;padding:30px 15px;color:rgba(255,255,255,.25)"><i class="fas fa-globe" style="font-size:2rem;display:block;margin-bottom:10px"></i>اكتب اسم القارئ للبحث في الإنترنت<br><span style="font-size:.72rem">مثال: محمد رفعت، عبدالباسط، العفاسي</span></div>';$('addRCnt').textContent='';return}
      $('addRCnt').textContent='جارٍ البحث...';
      webSearchTimer=setTimeout(function(){searchRecitersWeb(q)},600);
    }
    function searchRecitersWeb(q:string){
      let list=$('addRL');list.innerHTML='<div style="text-align:center;padding:20px"><div class="ar-loading"><div></div></div><span style="color:rgba(255,255,255,.3);font-size:.8rem;margin-top:8px;display:block">جارٍ البحث عن "'+q+'" في الإنترنت...</span></div>';
      fetch('/api/search-reciters?q='+encodeURIComponent(q)).then(function(r){return r.json()}).then(function(d:any){
        renderWebResults(d.results||[],q);
      }).catch(function(){
        list.innerHTML='<div class="ar-error"><i class="fas fa-exclamation-triangle"></i>تعذر البحث<br><span style="font-size:.76rem;color:rgba(255,255,255,.2)">تحقق من اتصالك بالإنترنت</span></div>';
      });
    }
    function renderWebResults(results:any[],q:string){
      let list=$('addRL'),cnt=$('addRCnt');list.innerHTML='';
      let existingDls=RC.map(function(r:any){return r.dl});
      let seen:any={};
      let unique:any[]=[];
      results.forEach(function(r:any){if(!seen[r.folder]){seen[r.folder]=true;unique.push(r)}});
      cnt.textContent='نتائج البحث: '+unique.length+' قارئ';
      if(!unique.length){list.innerHTML='<div class="no-r"><i class="fas fa-search"></i>لم يتم العثور على نتائج لـ "'+q+'"<br><span style="font-size:.72rem;color:rgba(255,255,255,.2);display:block;margin-top:5px">جرب كتابة الاسم بشكل مختلف</span></div>';return}
      unique.forEach(function(r:any){
        let isAdded=existingDls.indexOf(r.folder)!==-1;
        let it=document.createElement('div');it.className='er-i'+(isAdded?' added':'');
        let av=document.createElement('div');av.className='er-av';av.style.cssText='border:2px solid var(--teal)';
        let img=document.createElement('img');img.src=r.image||'https://picsum.photos/seed/'+r.folder+'/100/100';img.alt=r.name;img.style.cssText='width:100%;height:100%;object-fit:cover;border-radius:50%';img.onerror=function(){img.style.display='none';av.textContent=r.name.charAt(0)};
        av.appendChild(img);
        let inf=document.createElement('div');inf.className='er-info';
        let nm=document.createElement('div');nm.className='er-nm';nm.textContent=r.name;
        let detail=r.rewaya||'';
        if(r.surahCount&&r.surahCount<114){detail+=(detail?' - ':'')+' '+r.surahCount+' سورة'}
        let en=document.createElement('div');en.className='er-en';en.textContent=detail||'تلاوة كاملة 114 سورة';
        let tags=document.createElement('div');tags.style.marginTop='2px';
        let tg=document.createElement('span');tg.className='er-dl-tag';tg.textContent='تلاوة + تحميل';tags.appendChild(tg);
        inf.appendChild(nm);inf.appendChild(en);inf.appendChild(tags);
        let btn=document.createElement('button');
        if(isAdded){btn.className='er-btn done';btn.innerHTML='<i class="fas fa-check"></i> مضاف';btn.disabled=true}
        else{btn.className='er-btn add';btn.innerHTML='<i class="fas fa-plus"></i> إضافة';
          (function(rec:any){btn.onclick=function(){addWebReciter(rec);it.classList.add('added');btn.className='er-btn done';btn.innerHTML='<i class="fas fa-check"></i> مضاف';btn.disabled=true}})(r)}
        it.appendChild(av);it.appendChild(inf);it.appendChild(btn);list.appendChild(it);
      });
    }
    // ذاكرة مؤقتة لمعرفات quran.com المُكتشفة ديناميكياً
    let dynamicQCMap:any={};
    function gDynamicQC(){try{return JSON.parse(localStorage.getItem('dyn_qc')||'{}')}catch(e){return{}}}
    function sDynamicQC(m:any){try{localStorage.setItem('dyn_qc',JSON.stringify(m))}catch(e){}}
    dynamicQCMap=gDynamicQC();

    // التحقق من رابط الصوت + اكتشاف quran.com ID عند إضافة قارئ جديد
    async function discoverAndVerify(recName:string, dlFolder:string, audioUrl:string):Promise<{qcId:number|null,audioOk:boolean,qcSource:string}>{
      let result={qcId:null as number|null,audioOk:true,qcSource:''};
      // 1) التحقق من رابط الصوت (بسورة الفاتحة 001.mp3)
      if(audioUrl){
        try{
          let testUrl=audioUrl.replace('{num}','001');
          let vRes=await fetch('/api/verify-audio?url='+encodeURIComponent(testUrl));
          let vData=await vRes.json();
          result.audioOk=vData.ok===true;
        }catch(e){result.audioOk=true} // لا نمنع الإضافة عند فشل التحقق
      }
      // 2) البحث عن معرف quran.com (أولاً من الذاكرة المؤقتة)
      if(dynamicQCMap[dlFolder]){result.qcId=dynamicQCMap[dlFolder];result.qcSource='cached';return result}
      // 3) البحث عبر API
      try{
        let dRes=await fetch('/api/find-quran-reciter?name='+encodeURIComponent(recName)+'&dl='+encodeURIComponent(dlFolder));
        let dData=await dRes.json();
        if(dData.found&&dData.reciterId){
          result.qcId=dData.reciterId;result.qcSource=dData.source||'quran_api';
          dynamicQCMap[dlFolder]=dData.reciterId;sDynamicQC(dynamicQCMap);
          // إضافته أيضاً لـ QC_DL_MAP الديناميكي لاستخدامه فوراً
          QC_DL_MAP[dlFolder]=dData.reciterId;
        }
      }catch(e){}
      return result;
    }

    function addWebReciter(rec:any){
      if(RC.find(function(r:any){return r.dl===rec.folder})){toast('هذا القارئ مضاف بالفعل');return}
      let newR={id:null,dl:rec.folder,nm:rec.name,url:rec.url,im:rec.image||'https://picsum.photos/seed/'+rec.folder+'/100/100',builtin:false,isNew:true,qcId:null as number|null};
      let added=gAdded();added.push(newR);sAdded(added);
      buildReciters();rndRC();buildSel();
      toast('تمت الإضافة: '+rec.name);
      // التحقق من الصوت واكتشاف التوقيتات في الخلفية
      discoverAndVerify(rec.name,rec.folder,rec.url).then(function(r){
        if(!r.audioOk){toast('⚠️ رابط الصوت قد لا يعمل لهذا القارئ')}
        if(r.qcId){
          newR.qcId=r.qcId;
          let allAdded=gAdded();let idx=allAdded.findIndex(function(a:any){return a.dl===rec.folder});
          if(idx!==-1){allAdded[idx].qcId=r.qcId;sAdded(allAdded)}
          if(r.qcSource==='quran_api'){toast('✅ تزامن آية بآية متاح: '+rec.name)}
        }else{toast('ℹ️ سيستخدم تقدير التوقيتات')}
      });
      let foundR=RC.find(function(r:any){return r.dl===rec.folder});
      if(foundR){selLinkR(foundR);closeAddR();openSurM()}
    }
    function removeCustomReciter(dlId:string){
      let custom=gCustom();let found=custom.findIndex(function(r:any){return r.dl===dlId});
      if(found!==-1){custom.splice(found,1);sCustom(custom)}
      let added=gAdded();let found2=added.findIndex(function(r:any){return r.dl===dlId});
      if(found2!==-1){added.splice(found2,1);sAdded(added)}
      if(st.curR&&st.curR.dl===dlId){st.curR=PR.length?PR[0]:null;if(st.curS>0){E.aud.pause();E.aud.src='';st.playing=false;updPP();E.vd.style.display='none';E.wh.style.display='block';st.curS=0}}
      buildReciters();rndRC();buildSel();toast('تمت إزالة القارئ');
    }
    function removeAnyReciter(dlId:string){
      let reciter=RC.find(function(r:any){return r.dl===dlId});
      if(!reciter)return;
      if(reciter.builtin){
        let hidden=gHidden();if(hidden.indexOf(dlId)===-1){hidden.push(dlId);sHidden(hidden)}
      } else if(reciter.isNew){
        let added=gAdded();let idx=added.findIndex(function(r:any){return r.dl===dlId});
        if(idx!==-1){added.splice(idx,1);sAdded(added)}
      } else {
        let custom=gCustom();let idx=custom.findIndex(function(r:any){return r.dl===dlId});
        if(idx!==-1){custom.splice(idx,1);sCustom(custom)}
      }
      if(st.curR&&st.curR.dl===dlId){st.curR=PR.length?PR[0]:null;if(st.curS>0){E.aud.pause();E.aud.src='';st.playing=false;updPP();E.vd.style.display='none';E.wh.style.display='block';st.curS=0}}
      buildReciters();rndRC();buildSel();updFavUI();toast('تم حذف القارئ: '+reciter.nm);
    }

    // ===== مكتبة 115 قارئ =====
    let libReciters:any[]=[];
    let libLoaded=false;
    let libSearchTimer:any=null;
    function openLibM(){
      let o=$('libOv');if(o.classList.contains('on')){o.classList.remove('on');return}
      o.classList.add('on');$('libQ').value='';
      if(!libLoaded){loadLibrary();}
      else{renderLibList(libReciters);}
      setTimeout(function(){$('libQ').focus()},150);
    }
    function closeLibM(){$('libOv').classList.remove('on')}
    function onLibSearchInput(e:any){
      let q=(e.target.value||'').trim();
      if(libSearchTimer){clearTimeout(libSearchTimer);libSearchTimer=null}
      if(!q){renderLibList(libReciters);$('libCnt').textContent='';return}
      $('libCnt').textContent='جارٍ البحث...';
      libSearchTimer=setTimeout(function(){
        let filtered=libReciters.filter(function(r:any){
          return r.name.includes(q)||r.rewaya.includes(q)||String(r.id)===q;
        });
        renderLibList(filtered);
        $('libCnt').textContent=filtered.length+' من '+libReciters.length;
      },200);
    }
    async function loadLibrary(){
      let list=$('libL');
      list.innerHTML='<div style="text-align:center;padding:40px 15px;color:rgba(255,255,255,.3)"><div class="ar-loading"><div></div></div><span style="font-size:.8rem;margin-top:10px;display:block">جارٍ تحميل مكتبة 115 قارئ...</span></div>';
      try{
        let res=await fetch('/api/all-reciters');
        let data=await res.json();
        libReciters=data.reciters||[];
        libLoaded=true;
        renderLibList(libReciters);
        $('libCnt').textContent=libReciters.length+' قارئ ('+data.withTiming+' بتوقيت دقيق)';
      }catch(e){
        list.innerHTML='<div class="ar-error"><i class="fas fa-exclamation-triangle"></i>تعذر تحميل القائمة<br><span style="font-size:.76rem;color:rgba(255,255,255,.2)">تحقق من اتصالك بالإنترنت</span></div>';
      }
    }
    function renderLibList(reciters:any[]){
      let list=$('libL');list.innerHTML='';
      if(!reciters.length){list.innerHTML='<div class="no-r"><i class="fas fa-search"></i>لا يوجد نتائج</div>';return}
      let existingDls=RC.map(function(r:any){return r.dl});
      // Stats bar
      let stats=document.createElement('div');stats.className='lib-stats';
      let timingCount=reciters.filter(function(r:any){return r.hasTiming}).length;
      stats.innerHTML='<span><i class="fas fa-clock"></i> '+timingCount+' بتوقيت دقيق</span><span><i class="fas fa-headphones"></i> '+reciters.length+' قارئ</span>';
      list.appendChild(stats);
      // Sort: with timing first
      let sorted=reciters.slice().sort(function(a:any,b:any){return (b.hasTiming?1:0)-(a.hasTiming?1:0)});
      sorted.forEach(function(r:any){
        let isAdded=existingDls.indexOf(r.folder)!==-1;
        let it=document.createElement('div');it.className='lib-i'+(isAdded?' added':'');
        // Avatar
        let av=document.createElement('div');av.className='lib-av';
        av.textContent=r.name.charAt(0);
        if(r.hasTiming){let badge=document.createElement('span');badge.className='lib-timing-badge';badge.innerHTML='<i class="fas fa-clock"></i>';av.appendChild(badge);}
        // Info
        let inf=document.createElement('div');inf.className='lib-info';
        let nm=document.createElement('div');nm.className='lib-nm';nm.textContent=r.name;
        let meta=document.createElement('div');meta.className='lib-meta';
        let tags='';
        if(r.hasTiming)tags+='<span class="lib-tag timing"><i class="fas fa-clock"></i> توقيت دقيق</span>';
        tags+='<span class="lib-tag rewaya">'+r.rewaya+'</span>';
        meta.innerHTML=tags;
        inf.appendChild(nm);inf.appendChild(meta);
        // Button
        let btn=document.createElement('button');
        if(isAdded){btn.className='lib-btn done';btn.innerHTML='<i class="fas fa-check"></i> مضاف';btn.disabled=true}
        else{btn.className='lib-btn add';btn.innerHTML='<i class="fas fa-plus"></i> إضافة';
          (function(rec:any){
            btn.onclick=function(e:any){
              e.stopPropagation();
              addLibraryReciter(rec);
              it.classList.add('added');btn.className='lib-btn done';btn.innerHTML='<i class="fas fa-check"></i> مضاف';btn.disabled=true;
            };
          })(r);
        }
        it.appendChild(av);it.appendChild(inf);it.appendChild(btn);list.appendChild(it);
      });
    }
    function addLibraryReciter(rec:any){
      if(RC.find(function(r:any){return r.dl===rec.folder})){toast('هذا القارئ مضاف بالفعل');return}
      let newR={id:null,dl:rec.folder,nm:rec.name,url:rec.url,im:'https://picsum.photos/seed/'+rec.folder+'/100/100',builtin:false,isNew:true,qcId:null as number|null,mp3qReadId:rec.readId||null};
      let added=gAdded();added.push(newR);sAdded(added);
      buildReciters();rndRC();buildSel();
      toast('تمت الإضافة: '+rec.name);
      // Discover timing
      discoverAndVerify(rec.name,rec.folder,rec.url).then(function(r2:any){
        if(r2.qcId){newR.qcId=r2.qcId;let all=gAdded();let idx=all.findIndex(function(a:any){return a.dl===rec.folder});if(idx!==-1){all[idx].qcId=r2.qcId;sAdded(all)}}
      });
      let foundR=RC.find(function(r:any){return r.dl===rec.folder});
      if(foundR){selLinkR(foundR);closeLibM();openSurM();}
    }
    // Also keep the old update mechanism for compatibility
    function getAvailableNew(){let addedNms=gAdded().map(function(r:any){return r.nm});let skipped=gSkipped();return NEW_POOL.filter(function(r:any){return addedNms.indexOf(r.nm)===-1&&skipped.indexOf(r.nm)===-1})}
    function getDailyNew(){
      let avail=getAvailableNew();if(!avail.length)return[];
      let dayIdx=Math.floor(Date.now()/86400000);let perDay=4,start=(dayIdx*perDay)%Math.max(avail.length,1);
      let res:any[]=[],seen:any={};for(let i=0;i<avail.length&&res.length<perDay;i++){let idx=(start+i)%avail.length;if(!seen[avail[idx].nm]){seen[avail[idx].nm]=true;res.push(avail[idx])}}return res;
    }
    function resetSkipped(){sSkipped([]);cachedEd=null;toast('تم تحديث قائمة القراء');renderUpdL();updUpdBdg()}
    function updUpdBdg(){let bdg=$('updBdg');if(!bdg)return;let cnt=getAvailableNew().length;if(cnt>0){bdg.textContent=cnt;bdg.classList.add('on')}else bdg.classList.remove('on')}
    function toggleUpdM(){let o=$('updOv');if(o.classList.contains('on'))o.classList.remove('on');else{o.classList.add('on');renderUpdL()}}
    function renderUpdL(){
      let list=$('updL');list.innerHTML='';let daily=getDailyNew();let availCnt=getAvailableNew().length;
      if(!availCnt){list.innerHTML='<div class="up-empty"><i class="fas fa-check-double"></i><p>تمت إضافة جميع القراء المتاحين</p><p class="hint">سيتم إضافة المزيد قريباً بإذن الله</p></div>';return}
      let sec=document.createElement('div');sec.className='up-sec';sec.innerHTML='<i class="fas fa-star"></i> مقترح اليوم ('+daily.length+' من '+availCnt+')';list.appendChild(sec);
      daily.forEach(function(item:any){renderUpdItem(list,item)});
      let sec2=document.createElement('div');sec2.className='up-sec';sec2.style.marginTop='8px';sec2.innerHTML='<i class="fas fa-list"></i> جميع القراء المتاحين ('+availCnt+')';list.appendChild(sec2);
      getAvailableNew().forEach(function(item:any){renderUpdItem(list,item)});
    }
    function renderUpdItem(container:any,item:any){
      let addedNms=gAdded().map(function(r:any){return r.nm});let isAdded=addedNms.indexOf(item.nm)!==-1;
      let it=document.createElement('div');it.className='up-item'+(isAdded?' done':'');
      let av=document.createElement('div');av.className='up-av';av.textContent=item.nm.charAt(0);
      let inf=document.createElement('div');inf.className='up-info';
      let nm=document.createElement('div');nm.className='up-nm';nm.textContent=item.nm;
      let url=document.createElement('div');url.className='up-url';url.textContent=item.url;
      inf.appendChild(nm);inf.appendChild(url);
      let btns=document.createElement('div');btns.className='up-btns';
      if(isAdded){let d=document.createElement('button');d.className='up-btn done';d.innerHTML='<i class="fas fa-check"></i> تمت الإضافة';btns.appendChild(d)}
      else{
        let skipBtn=document.createElement('button');skipBtn.className='up-btn skip';skipBtn.innerHTML='<i class="fas fa-forward"></i>';skipBtn.title='تخطي';
        (function(n:string){skipBtn.onclick=function(e:any){e.stopPropagation();let sk=gSkipped();sk.push(n);sSkipped(sk);it.remove();renderUpdL();updUpdBdg()}})(item.nm);
        let addBtn=document.createElement('button');addBtn.className='up-btn add';addBtn.innerHTML='<i class="fas fa-plus"></i> إضافة';
        (function(it2:any){addBtn.onclick=function(e:any){e.stopPropagation();let newR=addNewReciter(it2);it.classList.add('done');addBtn.className='up-btn done';addBtn.innerHTML='<i class="fas fa-check"></i> تم';skipBtn.style.display='none';renderUpdL();updUpdBdg();toggleUpdM();selLinkR(newR);openSurM()}})(item);
        btns.appendChild(skipBtn);btns.appendChild(addBtn);
      }
      it.appendChild(av);it.appendChild(inf);it.appendChild(btns);container.appendChild(it);
    }
    function extractDlId(url:string):string{
      let m=url.match(/https:\/\/server\d+\.mp3quran\.net\/([^\/]+)/);
      if(m)return m[1];
      // Handle URLs with deeper paths
      let parts=url.replace('https://','').split('/');
      return parts[1]||'custom';
    }
    function addNewReciter(item:any){
      let dlId=item.dl||extractDlId(item.url);
      let newR={id:null,dl:dlId,nm:item.nm,url:item.url,im:'https://picsum.photos/seed/'+dlId+'/100/100',builtin:false,isNew:true,qcId:null as number|null,mp3qReadId:item.readId||null};
      let added=gAdded();added.push(newR);sAdded(added);buildReciters();rndRC();buildSel();
      // التحقق من الصوت واكتشاف التوقيتات في الخلفية
      discoverAndVerify(item.nm,dlId,item.url).then(function(r){
        if(!r.audioOk){toast('⚠️ رابط الصوت قد لا يعمل: '+item.nm)}
        if(r.qcId){
          newR.qcId=r.qcId;
          let allAdded=gAdded();let idx=allAdded.findIndex(function(a:any){return a.dl===dlId});
          if(idx!==-1){allAdded[idx].qcId=r.qcId;sAdded(allAdded)}
          if(r.qcSource==='quran_api'){toast('✅ تزامن آية بآية: '+item.nm)}
        }
      });
      return newR;
    }

    // ===== نافذة التحميل =====
    let dlSelectedR:any=null;
    function toggleDlM(){let o=$('dlOv');if(o.classList.contains('on'))o.classList.remove('on');else{dlSelectedR=null;o.classList.add('on');renderDlReciters()}}
    function renderDlReciters(){
      let list=$('dlMBody');let header=$('dlMH2');
      header.innerHTML='<i class="fas fa-cloud-arrow-down"></i> تحميل السور';
      list.innerHTML='';
      let allR=RC.filter(function(r:any){return r.dl||r.url});
      allR.forEach(function(r:any){
        let it=document.createElement('div');it.className='dl-ri';
        let av=document.createElement('div');av.className='dl-ri-av';
        if(r.im){let img=document.createElement('img');img.src=r.im;img.alt=r.nm;av.appendChild(img)}
        else{av.textContent=r.nm.charAt(0)}
        let inf=document.createElement('div');inf.className='dl-ri-info';
        let nm=document.createElement('div');nm.className='dl-ri-nm';nm.textContent=r.nm;
        let mt=document.createElement('div');mt.className='dl-ri-mt';mt.textContent=r.url?'متاح للتلاوة والتحميل':'متاح للتحميل';
        inf.appendChild(nm);inf.appendChild(mt);
        let arr=document.createElement('i');arr.className='fas fa-chevron-left dl-ri-arr';
        it.appendChild(av);it.appendChild(inf);it.appendChild(arr);
        (function(rec:any){it.onclick=function(){dlSelectedR=rec;renderDlSurahs(rec)}})(r);
        list.appendChild(it);
      });
    }
    function renderDlSurahs(r:any){
      let list=$('dlMBody');let header=$('dlMH2');
      header.innerHTML='<i class="fas fa-arrow-right" style="cursor:pointer;margin-left:8px;font-size:.85rem" id="dlMBack"></i> <span>'+r.nm+'</span>';
      $('dlMBack').onclick=function(){renderDlReciters()};
      list.innerHTML='';
      let ctrl=document.createElement('div');ctrl.className='dl-ctrl';
      let allBtn=document.createElement('button');allBtn.className='dl-ab';allBtn.innerHTML='<i class="fas fa-cloud-arrow-down"></i> تحميل الكل';
      allBtn.id='dlMAllBtn';
      allBtn.onclick=function(){dlMAllR(r)};
      ctrl.appendChild(allBtn);list.appendChild(ctrl);
      let prog=document.createElement('div');prog.className='dl-pw';prog.id='dlMProg';
      prog.innerHTML='<div class="dl-pb"><div class="dl-pf" id="dlMPf"></div></div><div class="dl-pt" id="dlMPt"></div>';
      list.appendChild(prog);
      let hint=document.createElement('div');hint.className='dl-hint';hint.innerHTML='<i class="fas fa-info-circle"></i> اضغط على زر التحميل لتنزيل السورة مباشرة';
      list.appendChild(hint);
      for(let i=1;i<=114;i++){(function(idx:number){
        let fn=dlFn(idx);
        let it=document.createElement('div');it.className='dl-si';
        let sp=document.createElement('span');sp.innerHTML='<strong>'+idx+'</strong> - '+S[idx-1].nm;
        let bt=document.createElement('button');bt.className='dl-ib';bt.innerHTML='<i class="fas fa-download"></i> تحميل';
        bt.onclick=function(){dlFile(r,idx);bt.className='dl-ib done';bt.innerHTML='<i class="fas fa-check"></i> تم'};
        it.appendChild(sp);it.appendChild(bt);list.appendChild(it);
      })(i)}
    }
    function dlMAllR(r:any){
      if(st.dlMRun){st.dlAbort=true;return}
      st.dlMRun=true;st.dlAbort=false;
      let btn=$('dlMAllBtn');if(!btn)return;btn.innerHTML='<i class="fas fa-stop"></i> إيقاف';btn.classList.add('stop');
      let pr=$('dlMProg'),pf=$('dlMPf'),pt=$('dlMPt');if(pr)pr.classList.add('on');
      let cur=0,tot=114;
      function nxt(){
        if(st.dlAbort||cur>=tot){
          if(st.dlAbort&&pt)pt.textContent='تم الإيقاف عند السورة '+cur;else{if(pf)pf.style.width='100%';if(pt)pt.textContent='تم تحميل جميع السور بنجاح';toast('تم الانتهاء')}
          if(btn){btn.innerHTML='<i class="fas fa-cloud-arrow-down"></i> تحميل الكل';btn.classList.remove('stop')}
          st.dlMRun=false;st.dlAbort=false;if(pr)setTimeout(function(){pr.classList.remove('on')},4000);return;
        }
        cur++;let fn=dlFn(cur),pct=Math.round(cur/tot*100);if(pf)pf.style.width=pct+'%';
        if(pt)pt.textContent='جارٍ تحميل '+cur+' من '+tot+' ('+pct+'%) - '+S[cur-1].nm;dlFile(r,cur);setTimeout(nxt,1500);
      }nxt();
    }

    // ===== بطاقات القراء =====
    function rndRC(){
      E.rcG.innerHTML='';let last=gLastR();
      PR.forEach(function(r:any,i:number){
        if(last&&r.dl===last)st.curR=r;
        let c=document.createElement('div');c.className='rc-c';c.setAttribute('data-d',r.dl);c.setAttribute('data-i',i);
        if(!r.builtin)c.classList.add('custom');c.onclick=function(){selR(i)};
        if(isFav(r.dl))c.classList.add('fav');
        let nm=document.createElement('div');nm.className='rc-nm';nm.textContent=r.nm;c.appendChild(nm);
        if(r.im){let img=document.createElement('img');img.src=r.im;img.alt=r.nm;img.className='rc-img';c.appendChild(img)}
        else{let av=document.createElement('div');av.className='rc-avatar';av.textContent=r.nm.charAt(0);c.appendChild(av)}
        {let fav=document.createElement('button');fav.className='rc-fav';fav.innerHTML='<i class="fas fa-heart"></i>';fav.title='المفضلة';(function(d:string,card:any){fav.onclick=function(e:any){e.stopPropagation();togFav(d);card.classList.toggle('fav');if(isFav(d)){fav.classList.add('fav-on');setTimeout(function(){fav.classList.remove('fav-on')},350)}}})(r.dl,c);c.appendChild(fav)}
        {let del=document.createElement('button');del.className='rc-del';del.innerHTML='<i class="fas fa-times"></i>';del.title='حذف القارئ';(function(d:string){del.onclick=function(e:any){e.stopPropagation();removeAnyReciter(d)}})(r.dl);c.appendChild(del)}
        E.rcG.appendChild(c);
      });
      let linkR=RC.filter(function(r:any){return !r.id && r.url});
      linkR.forEach(function(r:any){
        if(last&&r.dl===last)st.curR=r;
        let c=document.createElement('div');c.className='rc-c custom';c.setAttribute('data-d',r.dl);
        c.onclick=function(){selLinkR(r)};
        if(r.dl&&isFav(r.dl))c.classList.add('fav');
        let nm=document.createElement('div');nm.className='rc-nm';nm.textContent=r.nm;c.appendChild(nm);
        if(r.im){let img=document.createElement('img');img.src=r.im;img.alt=r.nm;img.className='rc-img';c.appendChild(img)}
        else{let av=document.createElement('div');av.className='rc-avatar';av.textContent=r.nm.charAt(0);c.appendChild(av)}
        {let fav=document.createElement('button');fav.className='rc-fav';fav.innerHTML='<i class="fas fa-heart"></i>';fav.title='المفضلة';(function(d:string,card:any){fav.onclick=function(e:any){e.stopPropagation();if(d){togFav(d);card.classList.toggle('fav');if(isFav(d)){fav.classList.add('fav-on');setTimeout(function(){fav.classList.remove('fav-on')},350)}}}})(r.dl,c);c.appendChild(fav)}
        {let del=document.createElement('button');del.className='rc-del';del.innerHTML='<i class="fas fa-times"></i>';del.title='حذف القارئ';(function(d:string){del.onclick=function(e:any){e.stopPropagation();removeAnyReciter(d)}})(r.dl);c.appendChild(del)}
        if(r.isNew){let tag=document.createElement('div');tag.className='rc-new-tag';tag.textContent='جديد';c.appendChild(tag)}
        E.rcG.appendChild(c);
      });
      let ai=PR.indexOf(st.curR);
      if(ai>=0){let ac=E.rcG.querySelector('[data-i="'+ai+'"]');if(ac)ac.classList.add('act')}
      else if(st.curR){let allC=E.rcG.querySelectorAll('.rc-c');allC.forEach(function(c:any){if(c.getAttribute('data-d')===st.curR.dl)c.classList.add('act')})}
      updFavUI();
    }

    function selR(i:number){
      let cs=document.querySelectorAll('.rc-c');for(let j=0;j<cs.length;j++)cs[j].classList.remove('act');
      cs[i].classList.add('act');st.curR=PR[i];sLastR(PR[i].dl);
      toast('تم اختيار: '+PR[i].nm);scrollToSurBtn();showSurArrow();if(st.curS>0)startRd(st.curS);
    }

    // ===== التلاوة =====
    function estimateAyahTimings(ayahs:any[], totalDuration:number, surahNum?:number){
      ayahTimings=[];
      if(!ayahs||!ayahs.length)return;
      let istiaadha='أعوذ بالله من الشيطان الرجيم';
      let basmala='بسم الله الرحمن الرحيم';
      let extraChars=0;
      if(surahNum===undefined||surahNum!==9){
        extraChars+=istiaadha.replace(/[\s\u064B-\u065F\u0670]/g,'').length;
      }
      if(surahNum!==1&&surahNum!==9){
        extraChars+=basmala.replace(/[\s\u064B-\u065F\u0670]/g,'').length;
      }
      let charCounts:number[]=[];let totalChars=0;
      for(let i=0;i<ayahs.length;i++){
        let t=(ayahs[i].text||'').replace(/[\s\u064B-\u065F\u0670]/g,'');
        charCounts[i]=t.length;totalChars+=t.length;
      }
      let totalAudioChars=extraChars+totalChars;
      if(totalAudioChars===0)return;
      let charRate=totalDuration/totalAudioChars;
      let preambleTime=extraChars*charRate;
      let ayahDuration=totalDuration-preambleTime;
      let cumulative=preambleTime;
      for(let i=0;i<ayahs.length;i++){
        ayahTimings[i]=cumulative;
        let proportion=totalChars>0?charCounts[i]/totalChars:1/ayahs.length;
        cumulative+=proportion*ayahDuration;
      }
    }

    function getCurrentAyahByTime(currentTime:number){
      // Use precise timestamps from quran.com API if available
      if(syncedTimestamps.length>0){
        let timeMs=currentTime*1000;
        for(let i=syncedTimestamps.length-1;i>=0;i--){
          if(timeMs>=syncedTimestamps[i].from)return i+1;
        }
        return 1;
      }
      // Fallback to estimated timings
      if(!ayahTimings.length)return 1;
      for(let i=ayahTimings.length-1;i>=0;i--){
        if(currentTime>=ayahTimings[i])return i+1;
      }
      return 1;
    }

    function startSyncedPlay(qcRecId:number,num:number,reciter:any){
      // Fetch segmented audio data from quran.com API
      fetch('/api/quran-sync?reciter='+qcRecId+'&chapter='+num).then(function(r){return r.json()}).then(function(d:any){
        let af=d.audio_file;if(!af||!af.audio_url)throw new Error('no audio');
        // Support both timestamps (quran.com) and verse_timings (standard format)
        let timestamps=af.timestamps||af.verse_timings||[];
        if(!timestamps.length)throw new Error('no timestamps');
        let inf=S.find(function(s:any){return s.n===num});
        E.sNm.innerText='سورة '+(inf?inf.nm:'');
        E.aCn.innerText=inf?inf.ay+' آية':'';
        st.totV=timestamps.length;st.curA=1;
        st.linkMode=true;st.qcMode=true; // linkMode enables rAF ayah detection
        // Store precise timestamps in both formats for maximum compatibility
        syncedTimestamps=timestamps.map(function(t:any){
          return{
            from: t.timestamp_from || t.start_time || 0,
            to: t.timestamp_to || t.end_time || 0,
            key: t.verse_key || ''
          };
        });
        verseTimings=timestamps.map(function(t:any){
          return{
            verse_key: t.verse_key || '',
            start_time: t.timestamp_from || t.start_time || 0,
            end_time: t.timestamp_to || t.end_time || 0
          };
        });
        ayahTimings=syncedTimestamps.map(function(t:any){return t.from/1000});
        lastAutoAyah=-1;stopRAFSync();
        // Fetch Arabic Quran text + tafsir + translation from alquran
        fetch('https://api.alquran.cloud/v1/surah/'+num+'/editions/ar.alafasy,ar.muyassar,en.sahih').then(function(r2){return r2.json()}).then(function(d2:any){
          if(d2.code===200&&d2.data){
            st.sData=[{numberOfAyahs:verseTimings.length,ayahs:verseTimings.map(function(a:any,i:number){return{number:i+1,numberInSurah:i+1,audio:'',text:d2.data[0]&&d2.data[0].ayahs&&d2.data[0].ayahs[i]?d2.data[0].ayahs[i].text:''}})},{numberOfAyahs:verseTimings.length,ayahs:d2.data.length>1&&d2.data[1]?d2.data[1].ayahs:verseTimings.map(function(){return{text:'--'}})},{numberOfAyahs:verseTimings.length,ayahs:d2.data.length>2&&d2.data[2]?d2.data[2].ayahs:verseTimings.map(function(){return{text:''}})}];
          }else{
            st.sData=[{numberOfAyahs:verseTimings.length,ayahs:verseTimings.map(function(a:any,i:number){return{number:i+1,numberInSurah:i+1,audio:'',text:''}})},{numberOfAyahs:verseTimings.length,ayahs:verseTimings.map(function(){return{text:'--'}})},{numberOfAyahs:verseTimings.length,ayahs:verseTimings.map(function(){return{text:''}})}];
          }
          // Play the full surah audio as single file
          E.vd.style.display='block';E.ld.style.display='none';st.loading=false;
          showAyah();
          E.aud.src=af.audio_url;E.aud.load();
          E.aud.play().then(function(){st.playing=true;updPP();startRAFSync();showReciterNotif(reciter.nm,inf?inf.nm:'')}).catch(function(){st.playing=false;updPP();toast('تعذر تشغيل الصوت')});
        }).catch(function(){
          st.sData=[{numberOfAyahs:verseTimings.length,ayahs:verseTimings.map(function(a:any,i:number){return{number:i+1,numberInSurah:i+1,audio:'',text:''}})},{numberOfAyahs:verseTimings.length,ayahs:verseTimings.map(function(){return{text:'--'}})},{numberOfAyahs:verseTimings.length,ayahs:verseTimings.map(function(){return{text:''}})}];
          E.vd.style.display='block';E.ld.style.display='none';st.loading=false;
          showAyah();
          E.aud.src=af.audio_url;E.aud.load();
          E.aud.play().then(function(){st.playing=true;updPP();startRAFSync();showReciterNotif(reciter.nm,inf?inf.nm:'')}).catch(function(){st.playing=false;updPP();toast('تعذر تشغيل الصوت')});
        });
      }).catch(function(err){
        // quran.com sync failed — fall back to link mode with estimated timings + rAF sync
        console.warn('quran.com sync failed for reciter, using estimated timings:', err);
        doLinkMode(num);
      });
    }

    // mp3quran timing read_id → folder name mapping (from mp3quran Timing API)
    const MP3Q_READ_MAP:any={};
    // Will be populated dynamically from API
    let mp3qReadsPopulated=false;
    async function populateMp3qReads(){
      if(mp3qReadsPopulated)return;
      try{
        let res=await fetch('/api/mp3quran-timing');
        let data=await res.json();
        if(data.reads){
          for(let r of data.reads){
            let folder=r.folder_url.replace('https://','').split('/')[1]||'';
            MP3Q_READ_MAP[folder]=r.id;
            // Also map by full path prefix
            MP3Q_READ_MAP[r.id]=folder;
          }
        }
        mp3qReadsPopulated=true;
      }catch(e){mp3qReadsPopulated=true}
    }
    // Get mp3quran timing read ID for a reciter
    function getMp3qReadId(r:any):number|null{
      if(r.mp3qReadId)return r.mp3qReadId;
      if(!r.url&&!(r.dl&&DL_SERVER[r.dl]))return null;
      // Check by dl folder name
      if(r.dl&&MP3Q_READ_MAP[r.dl])return MP3Q_READ_MAP[r.dl];
      // Check by URL
      if(r.url){
        for(let folder in MP3Q_READ_MAP){
          if(typeof MP3Q_READ_MAP[folder]==='number'&&r.url.includes('/'+folder+'/'))return MP3Q_READ_MAP[folder];
        }
      }
      return null;
    }
    // Fetch mp3quran timing data for a surah
    async function fetchMp3qTiming(readId:number,suraNum:number):Promise<any[]>{
      try{
        let res=await fetch('/api/mp3quran-timing?sura='+suraNum+'&read='+readId);
        let data=await res.json();
        if(data.verse_timings&&data.verse_timings.length>0)return data.verse_timings;
      }catch(e){}
      return[];
    }
    // Try to find mp3quran read ID by audio URL pattern matching
    function findMp3qReadByUrl(audioUrl:string):number|null{
      for(let folder in MP3Q_READ_MAP){
        if(typeof MP3Q_READ_MAP[folder]==='number'){
          if(audioUrl.includes('/'+folder+'/'))return MP3Q_READ_MAP[folder];
        }
      }
      return null;
    }

    function doLinkMode(num:number){
      st.linkMode=true;let u=getRUrl(st.curR,num);
      if(!u){E.ld.style.display='none';E.wh.style.display='block';st.loading=false;toast('رابط غير متاح');return}
      let inf=S.find(function(s:any){return s.n===num});E.sNm.innerText='سورة '+(inf?inf.nm:'');E.linkTag.style.display='inline-block';E.aCn.innerText=inf?inf.ay+' آية':'';
      E.vd.style.display='block';E.ld.style.display='none';st.loading=false;
      fetch('https://api.alquran.cloud/v1/surah/'+num+'/editions/ar.alafasy,ar.muyassar,en.sahih').then(function(r){return r.json()}).then(function(d:any){
        if(d.code===200&&d.data&&d.data.length>=1){st.sData=d.data;st.totV=d.data[0].numberOfAyahs;st.curA=1;
          showAyah();
          // Try mp3quran timing first (precise), then fall back to estimated
          let mp3qReadId=getMp3qReadId(st.curR);
          if(mp3qReadId){
            fetchMp3qTiming(mp3qReadId,num).then(function(timings:any[]){
              if(timings.length>0){
                // Use precise mp3quran timings
                ayahTimings=timings.map(function(t:any){return t.start_time/1000});
                syncedTimestamps=timings.map(function(t:any){return{from:t.start_time,to:t.end_time,key:''}});
                verseTimings=timings.map(function(t:any){return{verse_key:'',start_time:t.start_time,end_time:t.end_time}});
                lastAutoAyah=-1;startRAFSync();
                toast('⏱️ تزامن دقيق من mp3quran ('+timings.length+' آية)');
              }else{
                // Fallback to estimated timings
                function tryEstimate(){let dur=E.aud.duration;if(dur&&isFinite(dur)&&dur>0){estimateAyahTimings(st.sData[0].ayahs,dur,num);lastAutoAyah=-1;startRAFSync()}else{setTimeout(tryEstimate,800)}}
                tryEstimate();
              }
            });
          }else{
            // Also try async mp3quran lookup if map not yet populated
            populateMp3qReads().then(function(){
              let newReadId=getMp3qReadId(st.curR);
              if(newReadId){
                fetchMp3qTiming(newReadId,num).then(function(timings:any[]){
                  if(timings.length>0){
                    ayahTimings=timings.map(function(t:any){return t.start_time/1000});
                    syncedTimestamps=timings.map(function(t:any){return{from:t.start_time,to:t.end_time,key:''}});
                    verseTimings=timings.map(function(t:any){return{verse_key:'',start_time:t.start_time,end_time:t.end_time}});
                    lastAutoAyah=-1;startRAFSync();
                    toast('⏱️ تزامن دقيق من mp3quran ('+timings.length+' آية)');
                    return;
                  }
                });
              }
              // If no mp3quran timing, try async URL-based lookup
              if(!newReadId&&st.curR.url){
                findMp3qReadByUrl(st.curR.url.replace('{num}','001'));
              }
              // Final fallback: estimated timings
              function tryEstimate(){let dur=E.aud.duration;if(dur&&isFinite(dur)&&dur>0){estimateAyahTimings(st.sData[0].ayahs,dur,num);lastAutoAyah=-1;startRAFSync()}else{setTimeout(tryEstimate,800)}}
              tryEstimate();
            });
          }
        }else{E.aVr.innerText='بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ';E.tTx.innerText='تلاوة كاملة بالرابط المباشر';E.trTx.innerText=''}
      }).catch(function(){E.aVr.innerText='بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ';E.tTx.innerText='تلاوة كاملة بالرابط المباشر';E.trTx.innerText=''});
      E.aud.src=u;E.aud.load();E.aud.play().then(function(){st.playing=true;updPP();showReciterNotif(st.curR.nm,inf?inf.nm:'')}).catch(function(){st.playing=false;updPP();toast('تعذر تشغيل الصوت')});
    }

    function doAlquranApi(num:number){
      let apiId=st.curR.id;let url='https://api.alquran.cloud/v1/surah/'+num+'/editions/'+apiId+',ar.muyassar,en.sahih';
      fetch(url).then(function(r){return r.json()}).then(function(d:any){
        if(d.code===200&&d.data&&d.data.length>=1){st.sData=d.data;st.totV=d.data[0].numberOfAyahs;st.curA=1;let inf=S.find(function(s:any){return s.n===num});E.sNm.innerText='سورة '+(inf?inf.nm:'');E.vd.style.display='block';E.ld.style.display='none';st.loading=false;showAyah();playAyah();showReciterNotif(st.curR.nm,inf?inf.nm:'')}else throw new Error('err');
      }).catch(function(){
        fetch('https://api.alquran.cloud/v1/surah/'+num+'/'+apiId).then(function(r){return r.json()}).then(function(d:any){
          if(d.code===200&&d.data&&d.data.ayahs){let ad=d.data;st.sData=[ad,{numberOfAyahs:ad.numberOfAyahs,ayahs:ad.ayahs.map(function(a:any){return{text:'--'}})},{numberOfAyahs:ad.numberOfAyahs,ayahs:ad.ayahs.map(function(a:any){return{text:'--'}})}];st.totV=ad.numberOfAyahs;st.curA=1;let inf=S.find(function(s:any){return s.n===num});E.sNm.innerText='سورة '+(inf?inf.nm:'');E.vd.style.display='block';E.ld.style.display='none';st.loading=false;showAyah();playAyah();showReciterNotif(st.curR.nm,inf?inf.nm:'')}else throw new Error('err2');
        }).catch(function(){E.ld.style.display='none';E.wh.style.display='block';st.loading=false;toast('تحقق من الاتصال بالإنترنت')});
      });
    }

    function startRd(num:number){
      if(st.loading)return;E.aud.pause();E.aud.src='';st.playing=false;updPP();stopRAFSync();
      st.curS=num;st.curA=1;st.loading=true;E.ld.style.display='block';E.wh.style.display='none';E.vd.style.display='none';E.linkTag.style.display='none';st.linkMode=false;st.qcMode=false;
      syncedTimestamps=[];ayahTimings=[];verseTimings=[];lastAutoAyah=-1;hideSurArrow();clearRecNotif();
      // Reset view mode for new surah
      allViewMode=false;E.surahBox.innerHTML='';E.surahBox.style.display='none';E.viewToggleBtn.style.display='none';E.aVr.style.display='block';

      // Determine quran.com reciter ID (3-tier: static QC_MAP → static QC_DL_MAP → dynamic qcId)
      let qcRecId:number|null=null;
      if(st.curR.id){qcRecId=QC_MAP[st.curR.id]||null}
      if(!qcRecId&&st.curR.dl){qcRecId=QC_DL_MAP[st.curR.dl]||null}
      // Tier 3: dynamically discovered qcId stored on the reciter object
      if(!qcRecId&&st.curR.qcId){qcRecId=st.curR.qcId}

      // Use synced playback if quran.com reciter ID is available
      if(qcRecId){
        startSyncedPlay(qcRecId,num,st.curR);
        return;
      }

      // No quran.com mapping — try async discovery then fallback
      if(!st.curR.id&&st.curR.url){
        // Try to discover quran.com ID asynchronously before falling back
        if(st.curR.dl&&!dynamicQCMap[st.curR.dl]){
          let discoverNum=num; // capture surah number
          discoverAndVerify(st.curR.nm,st.curR.dl,st.curR.url).then(function(r){
            if(r.qcId&&st.curS===discoverNum&&st.curR){
              st.curR.qcId=r.qcId;
              toast('✅ تم اكتشاف تزامن آية بآية!');
              // Stop current playback and restart with synced mode
              E.aud.pause();E.aud.src='';stopRAFSync();
              st.playing=false;st.loading=true;E.ld.style.display='block';
              startSyncedPlay(r.qcId,discoverNum,st.curR);
            }
          });
        }
        doLinkMode(num);return;
      }
      doAlquranApi(num);
    }

    function showAyah(){
      if(st.sData.length<1)return;let i=st.curA-1;E.aVr.classList.remove('scroll-mode');E.aVr.classList.add('chg');
      setTimeout(function(){
        if(i>=0&&i<st.sData[0].ayahs.length){
          E.aVr.innerText=st.sData[0].ayahs[i].text;
          if(st.sData.length>1&&st.sData[1].ayahs[i]){let t=st.sData[1].ayahs[i].text;E.tTx.innerText=(t&&t!=='--')?t:'التفسير الميسر غير متاح'}
          else E.tTx.innerText='التفسير غير متاح';
          if(st.sData.length>2&&st.sData[2].ayahs[i]){E.trTx.innerText=st.sData[2].ayahs[i].text||''}
          else E.trTx.innerText='';
          // عرض كل الآيات عند أول تحميل
          if(E.surahBox.children.length===0)renderAllAyahs(st.sData[0].ayahs);
        }
        E.aCn.innerText='الآية '+st.curA+' من '+st.totV;E.aVr.classList.remove('chg');
        // تمييز الآية النشطة في وضع العرض الكامل
        highlightActiveAyah(st.curA);
      },300);
    }

    function playAyah(){if(!st.sData.length)return;let u=st.sData[0].ayahs[st.curA-1].audio;E.aud.src=u;E.aud.load();E.aud.play().then(function(){st.playing=true;updPP()}).catch(function(){st.playing=false;updPP();toast('تعذر تشغيل الصوت')})}

    function nxtA(){
      if(st.linkMode){
        if(st.curA<st.totV){st.curA++;lastAutoAyah=st.curA;showAyah();if(ayahTimings.length>st.curA-1)E.aud.currentTime=ayahTimings[st.curA-1]}
        else{st.playing=false;updPP();toast('انتهت السورة')}
        return;
      }
      if(st.curA<st.totV){st.curA++;showAyah();playAyah()}else{st.playing=false;updPP();toast('انتهت السورة')}
    }
    function prvA(){
      if(st.linkMode){
        if(st.curA>1){st.curA--;lastAutoAyah=st.curA;showAyah();if(ayahTimings.length>st.curA-1)E.aud.currentTime=ayahTimings[st.curA-1]}
        return;
      }
      if(st.curA>1){st.curA--;showAyah();playAyah()}
    }
    function togPlay(){
      if(!st.curS){toast('اختر سورة أولاً');return}
      if(st.playing){E.aud.pause();st.playing=false;updPP()}
      else{
        if(st.linkMode){E.aud.play().then(function(){st.playing=true;updPP()}).catch(function(){})}
        else playAyah()
      }
    }
    function updPP(){E.ppB.innerHTML=st.playing?'<i class="fas fa-pause"></i>':'<i class="fas fa-play"></i>'}

    // ===== Zero-delay sync via requestAnimationFrame (60fps instead of timeupdate 4Hz) =====
    function startRAFSync(){
      stopRAFSync();
      function tick(){
        if(!st.playing||!st.linkMode)return;
        let c=E.aud.currentTime,d=E.aud.duration;
        if(d&&d>0&&isFinite(d)){
          E.pBar.value=c/d*100;
          let f=function(t:number){let m=Math.floor(t/60),s=Math.floor(t%60);return m+':'+(s<10?'0':'')+s};
          E.cT.innerText=f(c);E.dur.innerText=f(d);
          if(ayahTimings.length>0){
            let detected=getCurrentAyahByTime(c);
            if(detected!==lastAutoAyah&&detected>=1&&detected<=st.totV){
              lastAutoAyah=detected;st.curA=detected;showAyah();
            }
          }
        }
        rafId=requestAnimationFrame(tick);
      }
      rafId=requestAnimationFrame(tick);
    }
    function stopRAFSync(){if(rafId!==null){cancelAnimationFrame(rafId);rafId=null}}

    // Fallback timeupdate for non-link mode (API ayah-by-ayah playback)
    E.aud.addEventListener('timeupdate',function(){
      if(st.linkMode)return; // rAF handles linkMode
      let c=E.aud.currentTime,d=E.aud.duration;
      if(d&&d>0&&isFinite(d)){
        E.pBar.value=c/d*100;
        let f=function(t:number){let m=Math.floor(t/60),s=Math.floor(t%60);return m+':'+(s<10?'0':'')+s};
        E.cT.innerText=f(c);E.dur.innerText=f(d);
      }
    });
    E.aud.addEventListener('ended',function(){
      stopRAFSync();
      if(st.linkMode){st.playing=false;updPP();toast('انتهت السورة');st.curA=st.totV;showAyah()}
      else{if(st.repeating)playAyah();else nxtA()}
    });
    E.aud.addEventListener('play',function(){st.playing=true;updPP();if(st.linkMode)startRAFSync()});
    E.aud.addEventListener('pause',function(){st.playing=false;updPP();stopRAFSync()});
    E.aud.addEventListener('error',function(){st.playing=false;updPP();stopRAFSync()});

    E.ppB.addEventListener('click',togPlay);
    E.nxtB.addEventListener('click',function(){if(st.curS>0)nxtA()});
    E.prvB.addEventListener('click',function(){if(st.curS>0)prvA()});
    E.repB.addEventListener('click',function(){st.repeating=!st.repeating;E.repB.style.color=st.repeating?'var(--primary)':'#fff';toast(st.repeating?'تكرار الآية: مفعل':'تكرار الآية: معطل')});
    E.pBar.addEventListener('input',function(e:any){if(E.aud.duration&&isFinite(E.aud.duration))E.aud.currentTime=E.aud.duration/100*e.target.value});

    // Volume controls
    E.volUpB=$('volUpB');E.volDownB=$('volDownB');
    E.volUpB.addEventListener('click',function(){let v=Math.min(1,E.aud.volume+0.1);E.aud.volume=v;toast('مستوى الصوت: '+Math.round(v*100)+'%')});
    E.volDownB.addEventListener('click',function(){let v=Math.max(0,E.aud.volume-0.1);E.aud.volume=v;toast('مستوى الصوت: '+Math.round(v*100)+'%')});

    // ===== سور =====
    function openSurM(){$('surOv').classList.add('on');$('surQ').value='';rndSurL();setTimeout(function(){$('surQ').focus()},100);hideSurArrow()}
    function closeSurM(){$('surOv').classList.remove('on')}
    function rndSurL(q?:string){
      let l=$('surL');l.innerHTML='';if(!q)q='';
      let fl=S.filter(function(s:any){if(!q)return true;return s.nm.indexOf(q)!==-1||s.n.toString()===q});
      if(!fl.length){l.innerHTML='<div class="no-r"><i class="fas fa-search"></i>لم يتم العثور على سورة</div>';return}
      fl.forEach(function(s:any){
        let it=document.createElement('div');it.className='si'+(st.curS===s.n?' act':'');
        let nd=document.createElement('div');nd.className='si-n';nd.textContent=s.n;
        let inf=document.createElement('div');inf.className='si-info';
        let nm=document.createElement('div');nm.className='si-nm';nm.textContent='سورة '+s.nm;
        let mt=document.createElement('div');mt.className='si-mt';mt.innerHTML='<span><i class="fas fa-paragraph"></i> '+s.ay+' آية</span>';
        inf.appendChild(nm);inf.appendChild(mt);
        let tp=document.createElement('div');tp.className='si-tp';tp.textContent=s.tp;
        it.appendChild(nd);it.appendChild(inf);it.appendChild(tp);
        it.addEventListener('click',function(){closeSurM();startRd(s.n)});l.appendChild(it);
      });
    }

    E.ppB.style.cursor='pointer'
    E.prvB.style.cursor='pointer'
    E.nxtB.style.cursor='pointer'
    E.repB.style.cursor='pointer'
    E.pBar.style.cursor='pointer'

    // ===== Background =====
    function startBG(){
      let bgC=$('bgC');if(!bgC)return;
      let ci=0;BG.forEach(function(u:string,i:number){let d=document.createElement('div');d.className='bg-s'+(i===0?' on':'');d.style.backgroundImage="url('"+u+"')";bgC.appendChild(d)});
      setInterval(function(){let sl=document.querySelectorAll('.bg-s');if(!sl.length)return;sl[ci].classList.remove('on');ci=(ci+1)%sl.length;sl[ci].classList.add('on')},12000);
    }

    // ===== Expose functions to window for inline onclick =====
    W.openQRSide = openQRSide
    W.closeQRSide = closeQRSide
    W.copyLink = copyLink
    W.shareLink = shareLink
    W.toggleDlM = toggleDlM
    W.toggleFavM = toggleFavM
    W.toggleUpdM = toggleUpdM
    W.openAddR = openAddR
    W.closeAddR = closeAddR
    W.resetSkipped = resetSkipped
    W.closeSurM = closeSurM
    W.openLibM = openLibM
    W.closeLibM = closeLibM
    W.openWhatsApp = openWhatsApp
    W.toggleDtM = toggleDtM

    function scrollToSurBtn(){
      let btn=$('surBtn');
      if(btn)btn.scrollIntoView({behavior:'smooth',block:'nearest'});
    }

    function showSurArrow(){
      let a=$('surArrow');if(a)a.classList.add('on');
    }
    function hideSurArrow(){
      let a=$('surArrow');if(a)a.classList.remove('on');
    }

    // ===== Event listeners =====
    $('surBtn').addEventListener('click',openSurM);
    $('viewToggleBtn').addEventListener('click',toggleViewMode);
    $('surQ').addEventListener('input',function(e:any){rndSurL(e.target.value.trim())});
    $('addRQ').addEventListener('input',onSearchInput);
    $('libQ').addEventListener('input',onLibSearchInput);

    $('surOv').addEventListener('click',function(e:any){if(e.target===this)closeSurM()});
    $('dlOv').addEventListener('click',function(e:any){if(e.target===this)toggleDlM()});
    $('favOv').addEventListener('click',function(e:any){if(e.target===this)toggleFavM()});
    $('dtOv').addEventListener('click',function(e:any){if(e.target===this)toggleDtM()});
    $('addROv').addEventListener('click',function(e:any){if(e.target===this)closeAddR()});
    $('updOv').addEventListener('click',function(e:any){if(e.target===this)toggleUpdM()});
    $('libOv').addEventListener('click',function(e:any){if(e.target===this)closeLibM()});
    $('qrOverlay').addEventListener('click',function(){closeQRSide()});

    document.addEventListener('keydown',function(e:any){
      if(e.key==='Escape'){closeSurM();$('dlOv').classList.remove('on');$('favOv').classList.remove('on');$('dtOv').classList.remove('on');closeAddR();$('updOv').classList.remove('on');$('libOv').classList.remove('on');closeQRSide();if(dtI){clearInterval(dtI);dtI=null}}
      if(e.key===' '&&e.target.tagName!=='INPUT'){e.preventDefault();togPlay()}
    });

    setInterval(updDT,1000);

    // ===== PWA Install =====
    let deferredPrompt:any=null;
    W.addEventListener('beforeinstallprompt',function(e:any){
      e.preventDefault();deferredPrompt=e;
      let dismissed=localStorage.getItem('pwa_dismissed');
      if(!dismissed){let b=$('pwaBanner');if(b)b.classList.add('on')}
    });
    W.addEventListener('appinstalled',function(){deferredPrompt=null;let b=$('pwaBanner');if(b)b.classList.remove('on');localStorage.setItem('pwa_dismissed','1')});
    W.dismissPWA=function(){let b=$('pwaBanner');if(b)b.classList.remove('on');localStorage.setItem('pwa_dismissed','1')};
    W.installPWA=function(){
      if(!deferredPrompt){
        if(navigator.standalone||window.matchMedia('(display-mode: standalone)').matches){
          toast('التطبيق مثبّت بالفعل');
        } else {
          toast('اضغط على زر المشاركة في المتصفح ثم "إضافة إلى الشاشة الرئيسية"');
        }
        let b=$('pwaBanner');if(b)b.classList.remove('on');localStorage.setItem('pwa_dismissed','1');return;
      }
      deferredPrompt.prompt();deferredPrompt.userChoice.then(function(){deferredPrompt=null;let b=$('pwaBanner');if(b)b.classList.remove('on');localStorage.setItem('pwa_dismissed','1');toast('جارٍ تثبيت التطبيق...')}).catch(function(){});
    };
    // أظهر شريط التثبيت دائماً ما لم يكن مستخدماً
    setTimeout(function(){if(!localStorage.getItem('pwa_dismissed')){let b=$('pwaBanner');if(b)b.classList.add('on')}},2000);

    // ===== Init =====
    function init(){
      buildReciters();rndRC();buildSel();startBG();initQR();updDT();updFavUI();updUpdBdg();showSurArrow();
      // Pre-populate mp3quran timing reads map for fast lookup
      populateMp3qReads();
    }

    init()

    return () => {}
  }, [])

  return (
    <>
      <div className="bg-c" id="bgC"></div>
      <div className="toast" id="toast"></div>
      <div className="dtb" id="dtb"><i className="fas fa-circle-check"></i><span>جارٍ تحميل: <span className="fn" id="dtbFn">--</span></span></div>

      {/* إشعار القارئ */}
      <div className="rec-notif" id="recNotif">
        <div className="rec-notif-inner">
          <i className="fas fa-star-and-crescent rec-notif-icon"></i>
          <div className="rec-notif-text">
            <div className="rec-notif-title">قراءة عطرة بصوت القارئ</div>
            <div className="rec-notif-info" id="recNotifInfo"></div>
          </div>
        </div>
      </div>

      {/* QR العائم */}
      <div className="qr-f" onClick={() => (window as any).openQRSide?.()}>
        <div className="qr-fi"><img id="qrFi" alt="QR" /></div>
        <span className="qr-fl">امسح QR</span>
      </div>

      {/* صفحة QR الجانبية */}
      <div className="qr-side-overlay" id="qrOverlay"></div>
      <div className="qr-side" id="qrSide">
        <div className="qr-side-header">
          <h3><i className="fas fa-qrcode"></i> مشاركة التطبيق</h3>
          <button className="mx" onClick={() => (window as any).closeQRSide?.()}><i className="fas fa-times"></i></button>
        </div>
        <div className="qr-side-body">
          <div className="qr-big-wrap"><img className="qr-big" id="qrBig" alt="QR Code" /></div>
          <div className="qr-side-info">امسح الكود بالكاميرا لفتح الموقع<br /><strong>قرآن في كل زمان ومكان</strong></div>
          <a href="/quran-app.apk" download className="qr-copy-btn" style={{textDecoration:'none',background:'rgba(16,185,129,.15)',borderColor:'rgba(16,185,129,.4)',display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',cursor:'pointer'}}><i className="fas fa-download"></i> تحميل APK مباشرة</a>
          <button className="qr-copy-btn" onClick={() => (window as any).copyLink?.()}><i className="fas fa-copy"></i> نسخ الرابط</button>
          <button className="qr-share-btn" onClick={() => {if(typeof window!=='undefined'){(window as any).shareLink?.()}}}><i className="fas fa-share-nodes"></i> مشاركة مباشرة</button>
        </div>
        <div className="qr-side-footer">شارك القرآن الكريم مع الجميع</div>
      </div>

      {/* نافذة المفضلات */}
      <div className="ov" id="favOv">
        <div className="mb fv-b" style={{maxWidth:440}}>
          <div className="mh">
            <h2><i className="fas fa-heart"></i> القراء المفضلون</h2>
            <button className="mx" onClick={() => (window as any).toggleFavM?.()}><i className="fas fa-times"></i></button>
          </div>
          <div className="ml" id="favL" style={{padding:'10px 14px 18px'}}></div>
        </div>
      </div>

      {/* نافذة التحميل */}
      <div className="ov" id="dlOv">
        <div className="mb dl-b">
          <div className="mh">
            <h2 id="dlMH2"><i className="fas fa-cloud-arrow-down"></i> تحميل السور</h2>
            <button className="mx" onClick={() => (window as any).toggleDlM?.()}><i className="fas fa-times"></i></button>
          </div>
          <div className="ml" id="dlMBody" style={{maxHeight:'70vh'}}></div>
        </div>
      </div>

      {/* نافذة إضافة قارئ */}
      <div className="ov" id="addROv">
        <div className="mb ar-b" style={{maxWidth:480}}>
          <div className="mh">
            <h2><i className="fas fa-globe"></i> البحث عن قارئ</h2>
            <button className="mx" onClick={() => (window as any).closeAddR?.()}><i className="fas fa-times"></i></button>
          </div>
          <div className="ms"><input type="text" id="addRQ" placeholder="اكتب اسم القارئ... مثال: محمد رفعت" /></div>
          <div className="ar-count" id="addRCnt"></div>
          <div className="ml" id="addRL"></div>
        </div>
      </div>

      {/* نافذة قراء جدد */}
      <div className="ov" id="updOv">
        <div className="mb up-b" style={{maxWidth:520}}>
          <div className="mh">
            <h2><i className="fas fa-wand-magic-sparkles"></i> قراء جدد متاحون</h2>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <button className="up-reset-btn" onClick={() => (window as any).resetSkipped?.()} title="تحديث القائمة"><i className="fas fa-rotate"></i> تحديث</button>
              <button className="mx" onClick={() => (window as any).toggleUpdM?.()}><i className="fas fa-times"></i></button>
            </div>
          </div>
          <div className="ml" id="updL"></div>
        </div>
      </div>

      {/* مكتبة 115 قارئ */}
      <div className="ov" id="libOv">
        <div className="mb lib-b" style={{maxWidth:520}}>
          <div className="mh">
            <h2><i className="fas fa-mosque"></i> مكتبة القراء</h2>
            <button className="mx" onClick={() => (window as any).closeLibM?.()}><i className="fas fa-times"></i></button>
          </div>
          <div className="ms"><input type="text" id="libQ" placeholder="ابحث عن قارئ بالاسم أو الرواية..." /></div>
          <div className="lib-count" id="libCnt"></div>
          <div className="ml" id="libL" style={{maxHeight:'65vh',overflowY:'auto'}}></div>
        </div>
      </div>

      {/* نافذة السور */}
      <div className="ov" id="surOv">
        <div className="mb">
          <div className="mh">
            <h2><i className="fas fa-book-quran"></i> سور القرآن الكريم</h2>
            <button className="mx" onClick={() => (window as any).closeSurM?.()}><i className="fas fa-times"></i></button>
          </div>
          <div className="ms"><input type="text" id="surQ" placeholder="ابحث عن سورة بالاسم أو الرقم..." /></div>
          <div className="ml" id="surL"></div>
        </div>
      </div>

      {/* نافذة التاريخ */}
      <div className="ov" id="dtOv">
        <div className="mb dt-b">
          <button className="mx" style={{position:'absolute',top:11,left:11}} onClick={() => (window as any).toggleDtM?.()}><i className="fas fa-times"></i></button>
          <i className="fas fa-mosque dt-i"></i>
          <div className="dt-t" id="mTime">--:--:--</div>
          <div className="dt-p" id="mPer">--</div>
          <div className="dt-d"></div>
          <div className="dt-s">
            <div className="dt-sl"><i className="fas fa-moon"></i> التاريخ الهجري</div>
            <div className="dt-sv" id="mHij">--</div>
          </div>
          <div className="dt-s" style={{margin:0}}>
            <div className="dt-sl"><i className="fas fa-calendar"></i> التاريخ الميلادي</div>
            <div className="dt-sv" id="mGre">--</div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header>
        <button className="h-btn" onClick={() => (window as any).toggleDtM?.()}>
          <i className="fas fa-clock"></i>
          <span id="hTime">--:--</span>
          <span className="sub" id="hDate"></span>
        </button>
        <div className="h-center">
          <div className="logo-wrap">
            <div className="logo-glow"></div>
            <span className="logo">ق</span>
          </div>
          <div className="app-t">قرآن في كل زمان ومكان</div>
        </div>
        <button className="h-btn red" onClick={() => (window as any).toggleFavM?.()}>
          <i className="fas fa-heart"></i>
          <span>المفضلات</span>
          <span className="badge" id="favBdg">0</span>
        </button>
      </header>

      {/* Main */}
      <main>
        <section className="rc-s">
          <div className="sec-t">
            <i className="fas fa-microphone-alt"></i> اختر القارئ
            <div style={{display:'flex',gap:'6px'}}>
              <button className="lib-open-btn" onClick={() => (window as any).openLibM?.()} title="مكتبة 115 قارئ"><i className="fas fa-mosque"></i> <span>115 قارئ</span></button>
              <button className="add-r-btn" onClick={() => (window as any).openAddR?.()} title="إضافة قارئ جديد"><i className="fas fa-plus"></i></button>
            </div>
          </div>
          <div className="rc-g-wrap" id="rcGWrap">
            <div className="rc-g" id="rcG"></div>
          </div>
        </section>

        <div className="pc">
          <div id="ld" className="ld"></div>
          <div className="wh" id="wh">
            <i className="fas fa-book-quran"></i>
            اختر قارئاً ثم اضغط على "اختر سورة" لبدء التلاوة
          </div>
          <div className="vd" id="vd" style={{display:'none'}}>
            <span className="link-mode-tag" id="linkTag" style={{display:'none'}}><i className="fas fa-microphone-alt"></i> تلاوة بتزامن الآيات</span>
            <span className="sn" id="sNm"></span>
            <span className="ac" id="aCn"></span>
            {/* عرض الآية الحالية (الوضع القديم) */}
            <div className="av" id="aVr" style={{display:'none'}}></div>
            {/* صندوق عرض كل الآيات مع التمييز */}
            <div className="surah-box" id="surahBox" style={{display:'none'}}></div>
            {/* أزرار تبديل العرض */}
            <button className="view-toggle-btn" id="viewToggleBtn" style={{display:'none'}}>
              <i className="fas fa-list"></i> عرض كل الآيات
            </button>
            <div className="tt" id="tTx"></div>
            <div className="tr" id="trTx"></div>
          </div>
          <div className="ctrls">
            <div className="pr-c">
              <span className="td" id="cT">0:00</span>
              <input type="range" className="pr-b" id="pBar" defaultValue={0} min={0} step={1} />
              <span className="td" id="dur">0:00</span>
            </div>
            <div className="br">
              <button className="bt" id="prvB" title="الآية السابقة"><i className="fas fa-step-forward"></i></button>
              <button className="bt" id="repB" title="تكرار الآية"><i className="fas fa-redo"></i></button>
              <button className="bp" id="ppB" title="تشغيل / إيقاف"><i className="fas fa-play"></i></button>
              <button className="bt" id="nxtB" title="الآية التالية"><i className="fas fa-step-backward"></i></button>
              <button className="bt vol-btn" id="volDownB" title="خفض الصوت"><i className="fas fa-volume-down"></i></button>
              <button className="bt vol-btn" id="volUpB" title="رفع الصوت"><i className="fas fa-volume-up"></i></button>
              <div style={{position:'relative',display:'inline-flex'}}>
                <div className="sur-arrow-wrap" id="surArrow">
                  <span className="sur-arrow-label">اختر سورة الآن</span>
                  <i className="fas fa-caret-down sur-arrow-icon"></i>
                </div>
                <button className="sur-circle-btn" id="surBtn" title="اختر سورة"><i className="fas fa-book-quran"></i> اختر سورة</button>
              </div>
              <button className="dl-circle-btn" onClick={() => (window as any).toggleDlM?.()} title="تحميل السور"><i className="fas fa-cloud-arrow-down"></i> حمل السورة</button>
            </div>
          </div>
        </div>

        <div className="el">
          <a href="/download.html" className="be" style={{borderColor:'rgba(16,185,129,.5)',background:'rgba(16,185,129,.12)',display:'inline-flex',alignItems:'center',gap:'8px',animation:'whatsappBounce 2s ease-in-out infinite'}}>
            <i className="fas fa-download" style={{color:'#10b981',fontSize:'1.15rem'}}></i>
            <span style={{color:'#10b981',fontWeight:600}}>تحميل التطبيق APK</span>
          </a>
          <a href="https://www.mp3quran.net/ar" target="_blank" rel="noopener noreferrer" className="be">
            <i className="fas fa-external-link-alt"></i> زيارة موقع MP3 Quran
          </a>
          <a className="be footer-email-link" onClick={() => (window as any).openWhatsApp?.()} style={{borderColor:'rgba(37,211,102,.3)',background:'rgba(37,211,102,.06)'}}>
            <i className="fab fa-whatsapp"></i>
            <span>ramyghaly535@gmail.com</span>
          </a>
        </div>
      </main>

      {/* شريط تثبيت التطبيق */}
      <div className="pwa-banner" id="pwaBanner">
        <div className="pwa-banner-icon"><i className="fas fa-mobile-screen-button"></i></div>
        <div className="pwa-banner-text">
          <strong>ثبّت التطبيق على جهازك</strong>
          <span>استمع للقرآن بدون إنترنت في أي وقت</span>
        </div>
        <button className="pwa-banner-install" onClick={() => (window as any).installPWA?.()}><i className="fas fa-download"></i> تثبيت</button>
        <button className="pwa-banner-close" onClick={() => (window as any).dismissPWA?.()}><i className="fas fa-times"></i></button>
      </div>

      <footer>
        <div className="ci">
          <i className="fas fa-phone"></i>{' '}
          <a className="footer-link" onClick={() => (window as any).openWhatsApp?.()}>
            00972595061313
          </a>
        </div>
      </footer>

      <audio id="aud" preload="auto"></audio>
    </>
  )
}
