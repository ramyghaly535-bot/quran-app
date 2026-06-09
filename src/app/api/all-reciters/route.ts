import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const maxDuration = 60

// mp3quran.net reciters with timing data - 115 verified reciters
const RECITER_LIBRARY = [
  { id: 1, name: 'إبراهيم الأخضر', folder: 'akdr', server: 'server6', readId: 1, url: 'https://server6.mp3quran.net/akdr/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 2, name: 'وديع اليمني', folder: 'wdee3', server: 'server6', readId: 219, url: 'https://server6.mp3quran.net/wdee3/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 3, name: 'إبراهيم العسيري', folder: '3siri', server: 'server6', readId: 3, url: 'https://server6.mp3quran.net/3siri/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 4, name: 'أبو بكر الشاطري', folder: 'shatri', server: 'server11', readId: 4, url: 'https://server11.mp3quran.net/shatri/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 5, name: 'أحمد العجمي', folder: 'ajm', server: 'server10', readId: 5, url: 'https://server10.mp3quran.net/ajm/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 6, name: 'أحمد الحواشي', folder: 'hawashi', server: 'server11', readId: 6, url: 'https://server11.mp3quran.net/hawashi/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 7, name: 'مشاري العفاسي', folder: 'afs', server: 'server8', readId: 123, url: 'https://server8.mp3quran.net/afs/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 8, name: 'أحمد صابر', folder: 'saber', server: 'server8', readId: 8, url: 'https://server8.mp3quran.net/saber/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 9, name: 'أحمد نعينع', folder: 'ahmad_nu', server: 'server11', readId: 9, url: 'https://server11.mp3quran.net/ahmad_nu/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 10, name: 'أكرم العلاقمي', folder: 'akrm', server: 'server9', readId: 10, url: 'https://server9.mp3quran.net/akrm/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 11, name: 'إبراهيم الجبرين', folder: 'jbreen', server: 'server6', readId: null, url: 'https://server6.mp3quran.net/jbreen/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: false },
  { id: 12, name: 'إدريس أبكر', folder: 'abkr', server: 'server6', readId: 12, url: 'https://server6.mp3quran.net/abkr/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 13, name: 'الزين محمد أحمد', folder: 'alzain', server: 'server9', readId: 13, url: 'https://server9.mp3quran.net/alzain/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 14, name: 'فارس عباد', folder: 'frs_a', server: 'server8', readId: 81, url: 'https://server8.mp3quran.net/frs_a/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 15, name: 'عبدالرحمن السديس', folder: 'sds', server: 'server11', readId: 54, url: 'https://server11.mp3quran.net/sds/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 16, name: 'القارئ ياسين (ورش)', folder: 'qari', server: 'server11', readId: 14, url: 'https://server11.mp3quran.net/qari/{num}.mp3', rewaya: 'ورش عن نافع', hasTiming: true },
  { id: 17, name: 'العيون الكوشي (ورش)', folder: 'koshi', server: 'server11', readId: 16, url: 'https://server11.mp3quran.net/koshi/{num}.mp3', rewaya: 'ورش عن نافع', hasTiming: true },
  { id: 18, name: 'توفيق الصايغ', folder: 'twfeeq', server: 'server6', readId: 17, url: 'https://server6.mp3quran.net/twfeeq/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 19, name: 'محمد جبريل', folder: 'jbrl', server: 'server8', readId: null, url: 'https://server8.mp3quran.net/jbrl/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: false },
  { id: 20, name: 'خالد الجليل', folder: 'jleel', server: 'server10', readId: 20, url: 'https://server10.mp3quran.net/jleel/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 21, name: 'خالد القحطاني', folder: 'qht', server: 'server10', readId: 21, url: 'https://server10.mp3quran.net/qht/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 22, name: 'خالد عبدالكافي', folder: 'kafi', server: 'server11', readId: 22, url: 'https://server11.mp3quran.net/kafi/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 23, name: 'خليفة الطنيجي', folder: 'tnjy', server: 'server12', readId: 24, url: 'https://server12.mp3quran.net/tnjy/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 24, name: 'داود حمزة', folder: 'hamza', server: 'server9', readId: 25, url: 'https://server9.mp3quran.net/hamza/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 25, name: 'عبدالباسط عبدالصمد (مرتل)', folder: 'basit', server: 'server7', readId: 53, url: 'https://server7.mp3quran.net/basit/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 26, name: 'عبدالباسط (مجود)', folder: 'basit_mjwd', server: 'server7', readId: 51, url: 'https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/{num}.mp3', rewaya: 'مجود', hasTiming: true },
  { id: 27, name: 'ساهل ياسين', folder: 'shl', server: 'server6', readId: 32, url: 'https://server6.mp3quran.net/shl/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 28, name: 'سعد الغامدي', folder: 's_gmd', server: 'server7', readId: 30, url: 'https://server7.mp3quran.net/s_gmd/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 29, name: 'صابر عبدالحكم', folder: 'hkm', server: 'server12', readId: 39, url: 'https://server12.mp3quran.net/hkm/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 30, name: 'صالح الصاهود', folder: 'sahood', server: 'server8', readId: 40, url: 'https://server8.mp3quran.net/sahood/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 31, name: 'محمد الشريم', folder: 'shur', server: 'server7', readId: 31, url: 'https://server7.mp3quran.net/shur/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 32, name: 'صلاح البدير', folder: 's_bud', server: 'server6', readId: 43, url: 'https://server6.mp3quran.net/s_bud/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 33, name: 'زكي داغستاني', folder: 'zaki', server: 'server9', readId: 33, url: 'https://server9.mp3quran.net/zaki/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 34, name: 'صلاح الهاشم', folder: 'salah_hashim_m', server: 'server12', readId: 44, url: 'https://server12.mp3quran.net/salah_hashim_m/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 35, name: 'صلاح بو خاطر', folder: 'bu_khtr', server: 'server8', readId: 46, url: 'https://server8.mp3quran.net/bu_khtr/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 36, name: 'محمود الرفاعي', folder: 'mrifai', server: 'server11', readId: null, url: 'https://server11.mp3quran.net/mrifai/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: false },
  { id: 37, name: 'شيرزاد عبدالرحمن طاهر', folder: 'taher', server: 'server12', readId: 38, url: 'https://server12.mp3quran.net/taher/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 38, name: 'عادل ريان', folder: 'ryan', server: 'server8', readId: 48, url: 'https://server8.mp3quran.net/ryan/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 39, name: 'عبدالباري الثبيتي', folder: 'thubti', server: 'server6', readId: 49, url: 'https://server6.mp3quran.net/thubti/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 40, name: 'عبدالبارئ محمد', folder: 'bari', server: 'server12', readId: 50, url: 'https://server12.mp3quran.net/bari/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 41, name: 'عبدالله خياط', folder: 'kyat', server: 'server12', readId: 61, url: 'https://server12.mp3quran.net/kyat/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 42, name: 'عبدالله بصفر', folder: 'bsfr', server: 'server6', readId: 60, url: 'https://server6.mp3quran.net/bsfr/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 43, name: 'عبدالله البعيجان', folder: 'buajan', server: 'server8', readId: 58, url: 'https://server8.mp3quran.net/buajan/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 44, name: 'عبدالعزيز الأحمد', folder: 'a_ahmed', server: 'server11', readId: 55, url: 'https://server11.mp3quran.net/a_ahmed/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 45, name: 'عبدالعزيز الزهراني', folder: 'zahrani', server: 'server9', readId: 56, url: 'https://server9.mp3quran.net/zahrani/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 46, name: 'عبدالمحسن القاسم', folder: 'qasm', server: 'server8', readId: 67, url: 'https://server8.mp3quran.net/qasm/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 47, name: 'عبدالمحسن الحارثي', folder: 'mohsin_harthi', server: 'server6', readId: 66, url: 'https://server6.mp3quran.net/mohsin_harthi/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 48, name: 'عبدالمحسن العبيكان', folder: 'obk', server: 'server12', readId: 69, url: 'https://server12.mp3quran.net/obk/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 49, name: 'عبدالهادي كناكري', folder: 'kanakeri', server: 'server6', readId: 70, url: 'https://server6.mp3quran.net/kanakeri/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 50, name: 'عبدالرشيد صوفي (سوسي)', folder: 'soufi_sosi', server: 'server16', readId: 65, url: 'https://server16.mp3quran.net/soufi/Rewayat-Assosi-A-n-Abi-Amr/{num}.mp3', rewaya: 'الأصم عن أبي عمرو', hasTiming: true },
  { id: 51, name: 'عبدالرشيد صوفي (حفص)', folder: 'soufi_hafs', server: 'server16', readId: 258, url: 'https://server16.mp3quran.net/soufi/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 52, name: 'عبدالودود حنيف', folder: 'wdod', server: 'server8', readId: 71, url: 'https://server8.mp3quran.net/wdod/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 53, name: 'عبدالولي الأركاني', folder: 'arkani', server: 'server6', readId: 72, url: 'https://server6.mp3quran.net/arkani/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 54, name: 'الحذيفي (حفص)', folder: 'hthfi', server: 'server9', readId: 74, url: 'https://server9.mp3quran.net/hthfi/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 55, name: 'الحذيفي (شعبة)', folder: 'hthfi_shb', server: 'server9', readId: 305, url: 'https://server9.mp3quran.net/hthfi/Rewayat-Sho-bah-A-n-Asim/{num}.mp3', rewaya: 'شعبة عن عاصم', hasTiming: true },
  { id: 56, name: 'الحذيفي (قالون)', folder: 'huthifi_qalon', server: 'server9', readId: 75, url: 'https://server9.mp3quran.net/huthifi_qalon/{num}.mp3', rewaya: 'قالون عن نافع', hasTiming: true },
  { id: 57, name: 'علي حجاج السويسي', folder: 'hajjaj', server: 'server9', readId: 77, url: 'https://server9.mp3quran.net/hajjaj/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 58, name: 'عماد زهير حافظ', folder: 'hafz', server: 'server6', readId: 78, url: 'https://server6.mp3quran.net/hafz/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 59, name: 'عبدالله الجهني', folder: 'jhn', server: 'server13', readId: 62, url: 'https://server13.mp3quran.net/jhn/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 60, name: 'عبدالله الغامدي', folder: 'ghamdi', server: 'server6', readId: null, url: 'https://server6.mp3quran.net/ghamdi/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: false },
  { id: 61, name: 'ناصر القطامي', folder: 'qtm', server: 'server6', readId: 86, url: 'https://server6.mp3quran.net/qtm/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 62, name: 'عمر القزابري (ورش)', folder: 'omar_warsh', server: 'server9', readId: 80, url: 'https://server9.mp3quran.net/omar_warsh/{num}.mp3', rewaya: 'ورش عن نافع', hasTiming: true },
  { id: 63, name: 'فهد الكندري', folder: 'Abdullahk', server: 'server10', readId: 160, url: 'https://server10.mp3quran.net/Abdullahk/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 64, name: 'صالح الهبدان', folder: 'habdan', server: 'server6', readId: 42, url: 'https://server6.mp3quran.net/habdan/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 65, name: 'هاني الرفاعي', folder: 'hani', server: 'server8', readId: 89, url: 'https://server8.mp3quran.net/hani/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 66, name: 'نبيل الرفاعي', folder: 'nabil', server: 'server9', readId: 87, url: 'https://server9.mp3quran.net/nabil/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 67, name: 'نعمة الحسان', folder: 'namh', server: 'server8', readId: 88, url: 'https://server8.mp3quran.net/namh/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 68, name: 'ماجد الزامل', folder: 'zaml', server: 'server9', readId: 139, url: 'https://server9.mp3quran.net/zaml/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 69, name: 'ماهر المعيقلي (مجود)', folder: 'maher_mjwd', server: 'server12', readId: 133, url: 'https://server12.mp3quran.net/maher/Almusshaf-Al-Mojawwad/{num}.mp3', rewaya: 'مجود', hasTiming: true },
  { id: 70, name: 'عبدالرحمن الماجد', folder: 'a_majed', server: 'server10', readId: 236, url: 'https://server10.mp3quran.net/a_majed/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 71, name: 'أحمد عامر', folder: 'Aamer', server: 'server10', readId: 203, url: 'https://server10.mp3quran.net/Aamer/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 72, name: 'محمد الطبلاوي', folder: 'tblawi', server: 'server12', readId: 106, url: 'https://server12.mp3quran.net/tblawi/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 73, name: 'محمد صالح', folder: 'shah', server: 'server12', readId: 110, url: 'https://server12.mp3quran.net/shah/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 74, name: 'محمد عبدالكريم', folder: 'm_krm', server: 'server12', readId: 115, url: 'https://server12.mp3quran.net/m_krm/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 75, name: 'محمد أيوب', folder: 'ayyub', server: 'server8', readId: 109, url: 'https://server8.mp3quran.net/ayyub/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 76, name: 'محمود البنا (مجود)', folder: 'bna_mjwd', server: 'server8', readId: 122, url: 'https://server8.mp3quran.net/bna/Almusshaf-Al-Mojawwad/{num}.mp3', rewaya: 'مجود', hasTiming: true },
  { id: 77, name: 'الحصري (تجويد)', folder: 'husr_mjwd', server: 'server13', readId: 119, url: 'https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/{num}.mp3', rewaya: 'مجود', hasTiming: true },
  { id: 78, name: 'الحصري (حفص)', folder: 'husr', server: 'server13', readId: 118, url: 'https://server13.mp3quran.net/husr/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 79, name: 'الحصري (ورش)', folder: 'husr_wrsh', server: 'server13', readId: 120, url: 'https://server13.mp3quran.net/husr/Rewayat-Warsh-A-n-Nafi/{num}.mp3', rewaya: 'ورش عن نافع', hasTiming: true },
  { id: 80, name: 'الحصري (دوري)', folder: 'husr_dori', server: 'server13', readId: 269, url: 'https://server13.mp3quran.net/husr/Rewayat-Aldori-A-n-Abi-Amr/{num}.mp3', rewaya: 'الدوري عن أبي عمرو', hasTiming: true },
  { id: 81, name: 'الحصري (قالون)', folder: 'husr_qalon', server: 'server13', readId: 270, url: 'https://server13.mp3quran.net/husr/Rewayat-Qalon-A-n-Nafi/{num}.mp3', rewaya: 'قالون عن نافع', hasTiming: true },
  { id: 82, name: 'ياسر الدوسري (مجود)', folder: 'yasser', server: 'server11', readId: 92, url: 'https://server11.mp3quran.net/yasser/{num}.mp3', rewaya: 'مجود', hasTiming: true },
  { id: 83, name: 'محمد سايد (ورش)', folder: 'm_sayed', server: 'server16', readId: 134, url: 'https://server16.mp3quran.net/m_sayed/Rewayat-Warsh-A-n-Nafi/{num}.mp3', rewaya: 'ورش عن نافع', hasTiming: true },
  { id: 84, name: 'أحمد طالب بن حميد', folder: 'a_binhameed', server: 'server16', readId: 137, url: 'https://server16.mp3quran.net/a_binhameed/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 85, name: 'عبدالله المطرود', folder: 'mtrod', server: 'server8', readId: 59, url: 'https://server8.mp3quran.net/mtrod/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 86, name: 'الفاتح محمد الزبير', folder: 'fateh', server: 'server6', readId: null, url: 'https://server6.mp3quran.net/fateh/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: false },
  { id: 87, name: 'جمعان العصيمي', folder: 'jaman', server: 'server6', readId: 181, url: 'https://server6.mp3quran.net/jaman/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 88, name: 'يوسف بن نوح أحمد', folder: 'noah', server: 'server8', readId: 193, url: 'https://server8.mp3quran.net/noah/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 89, name: 'محمد رشاد الشريف', folder: 'rashad', server: 'server10', readId: 198, url: 'https://server10.mp3quran.net/rashad/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 90, name: 'أحمد الطرابلسي', folder: 'trabulsi', server: 'server10', readId: 201, url: 'https://server10.mp3quran.net/trabulsi/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 91, name: 'الدوكالي محمد العالم', folder: 'dokali', server: 'server7', readId: 208, url: 'https://server7.mp3quran.net/dokali/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 92, name: 'بندر بليهه', folder: 'balilah', server: 'server6', readId: 217, url: 'https://server6.mp3quran.net/balilah/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 93, name: 'رعد محمد الكردي', folder: 'kurdi', server: 'server6', readId: 221, url: 'https://server6.mp3quran.net/kurdi/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 94, name: 'عبدالرحمن العوسي', folder: 'aloosi', server: 'server6', readId: 225, url: 'https://server6.mp3quran.net/aloosi/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 95, name: 'محمد خليل القارئ', folder: 'm_qari', server: 'server8', readId: 229, url: 'https://server8.mp3quran.net/m_qari/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 96, name: 'إبراهيم الدوسري', folder: 'ibrahim_dosri', server: 'server10', readId: 232, url: 'https://server10.mp3quran.net/ibrahim_dosri/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 97, name: 'أحمد النفيس (حفص)', folder: 'nufais_hafs', server: 'server16', readId: 259, url: 'https://server16.mp3quran.net/nufais/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 98, name: 'أحمد خليل شاهين', folder: 'shaheen', server: 'server16', readId: 256, url: 'https://server16.mp3quran.net/shaheen/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 99, name: 'أحمد ديبان', folder: 'deban', server: 'server16', readId: 265, url: 'https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 100, name: 'بيشه وا قادر الكردي', folder: 'peshawa', server: 'server16', readId: 268, url: 'https://server16.mp3quran.net/peshawa/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 101, name: 'عبدالعزيز التركي', folder: 'a_turki', server: 'server16', readId: 282, url: 'https://server16.mp3quran.net/a_turki/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 102, name: 'مصطفى إسماعيل (مجود)', folder: 'mustafa_mjwd', server: 'server8', readId: 288, url: 'https://server8.mp3quran.net/mustafa/Almusshaf-Al-Mojawwad/{num}.mp3', rewaya: 'مجود', hasTiming: true },
  { id: 103, name: 'أحمد المعصراوي', folder: 'a_maasaraawi', server: 'server16', readId: 289, url: 'https://server16.mp3quran.net/a_maasaraawi/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 104, name: 'سيد أحمد هاشمي', folder: 's_hashemi', server: 'server16', readId: 294, url: 'https://server16.mp3quran.net/s_hashemi/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 105, name: 'خالد كريم محمدي', folder: 'kh_mohammadi', server: 'server16', readId: 295, url: 'https://server16.mp3quran.net/kh_mohammadi/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 106, name: 'عكاشة كميني (بزي)', folder: 'okasha', server: 'server16', readId: 296, url: 'https://server16.mp3quran.net/okasha/Rewayat-Albizi-A-n-Ibn-Katheer/{num}.mp3', rewaya: 'البزي عن ابن كثير', hasTiming: true },
  { id: 107, name: 'حسن صالح', folder: 'h_saleh', server: 'server16', readId: 299, url: 'https://server16.mp3quran.net/h_saleh/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 108, name: 'صالح الشمراني', folder: 'shamrani', server: 'server16', readId: 300, url: 'https://server16.mp3quran.net/shamrani/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 109, name: 'عيسى عمر سناكو', folder: 'i_sanankoua', server: 'server16', readId: 303, url: 'https://server16.mp3quran.net/i_sanankoua/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 110, name: 'أنس العمادي', folder: 'a_alemadi', server: 'server16', readId: 314, url: 'https://server16.mp3quran.net/a_alemadi/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 111, name: 'محمد برهجي', folder: 'M_Burhaji', server: 'server16', readId: 340, url: 'https://server16.mp3quran.net/M_Burhaji/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 112, name: 'حسن الدغريري', folder: 'H-Aldaghriri', server: 'server16', readId: 10905, url: 'https://server16.mp3quran.net/H-Aldaghriri/Rewayat-Hafs-A-n-Assem/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 113, name: 'خالد المهنا', folder: 'mohna', server: 'server11', readId: 159, url: 'https://server11.mp3quran.net/mohna/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 114, name: 'علي جابر', folder: 'a_jbr', server: 'server11', readId: 76, url: 'https://server11.mp3quran.net/a_jbr/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: true },
  { id: 115, name: 'عادل الكلباني', folder: 'a_klb', server: 'server8', readId: null, url: 'https://server8.mp3quran.net/a_klb/{num}.mp3', rewaya: 'حفص عن عاصم', hasTiming: false },
]

let cachedData: { reciters: typeof RECITER_LIBRARY; timestamp: number } | null = null
const CACHE_TTL = 6 * 60 * 60 * 1000 // 6 hours

export async function GET() {
  const now = Date.now()
  if (cachedData && now - cachedData.timestamp < CACHE_TTL) {
    return NextResponse.json({ ...cachedData, cached: true })
  }

  // Try to fetch fresh data from mp3quran timing API to supplement
  let timingReads: Record<number, string> = {}
  try {
    const res = await fetch('https://www.mp3quran.net/api/v3/ayat_timing/reads', {
      headers: { 'Accept': 'application/json' },
      cache: 'no-store'
    })
    if (res.ok) {
      const reads: Array<{ id: number; name: string }> = await res.json()
      for (const r of reads) {
        timingReads[r.id] = r.name
      }
    }
  } catch {
    // Use cached/hardcoded data
  }

  // Enhance library with fresh timing info
  const enrichedReciters = RECITER_LIBRARY.map(r => {
    if (r.readId && timingReads[r.readId]) {
      return { ...r, hasTiming: true, confirmedName: timingReads[r.readId] }
    }
    return r
  })

  const result = {
    reciters: enrichedReciters,
    total: enrichedReciters.length,
    withTiming: enrichedReciters.filter(r => r.hasTiming).length
  }

  cachedData = { ...result, timestamp: now }
  return NextResponse.json(result)
}
