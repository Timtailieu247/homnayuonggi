import type { Drink } from './drinks';

export type Language = 'vi' | 'en';

export const copy = {
  vi: {
    tiers: ['QUỐC DÂN', 'HIẾM', 'CỰC PHẨM', 'TỐI MẬT', '★ ĐẶC BIỆT'],
    title: 'Mở hòm đồ uống', counterPrefix: 'Đã ghi nhận', counterSuffix: 'hòm',
    counterTitle: 'Lượt quay hoàn tất được ghi nhận trên website này', caseLabel: 'Mở hòm đồ uống',
    soundOn: 'Âm thanh bật', soundOff: 'Âm thanh tắt', turnSoundOff: 'Tắt âm thanh', turnSoundOn: 'Bật âm thanh',
    github: 'Mở mã nguồn trên GitHub', starsPending: 'chưa tải', language: 'Switch to English',
    spend: 'Mức chi thường ngày', custom: 'Tuỳ chỉnh', customSpend: 'Mức chi tuỳ chỉnh (nghìn đồng)',
    thousandPerMeal: 'nghìn / ly', spendError: 'Nhập từ 5 đến 100 nghìn.', caffeineFreePool: 'Pool hiện tại: trung bình',
    caffeineFreeOnly: 'Không caffeine', caffeineFree: 'Không caffeine', opening: 'ĐANG MỞ HÒM…', openAgain: 'MỞ LẠI', open: 'MỞ HÒM',
    newItem: 'VẬT PHẨM MỚI', referencePrice: 'Giá tham khảo', perPerson: '/ ly', find: 'TÌM QUÁN', continue: 'TIẾP TỤC', nearby: 'gần đây',
    whatsInside: 'TRONG HÒM CÓ GÌ?', items: 'Vật phẩm trong hòm', mystery: '★ ĐỒ UỐNG BÍ ẨN', mysteryAlt: 'Đồ uống bí ẩn hạng vàng',
    footer: 'Fan-made · SFX: Valve /', drinkDish: 'Đồ uống', caffeineFreeDish: 'Không caffeine',
  },
  en: {
    tiers: ['MIL-SPEC', 'RESTRICTED', 'CLASSIFIED', 'COVERT', '★ SPECIAL ITEM'],
    title: 'Open a drink case', counterPrefix: 'Recorded', counterSuffix: 'cases',
    counterTitle: 'Completed spins recorded on this website', caseLabel: 'Open a drink case',
    soundOn: 'Sound on', soundOff: 'Sound off', turnSoundOff: 'Mute sound', turnSoundOn: 'Enable sound',
    github: 'Open source on GitHub', starsPending: 'not loaded', language: 'Chuyển sang tiếng Việt',
    spend: 'Usual drink spend', custom: 'Custom', customSpend: 'Custom spend (thousand VND)',
    thousandPerMeal: 'thousand VND / cup', spendError: 'Enter 5–100 thousand VND.', caffeineFreePool: 'Current pool average',
    caffeineFreeOnly: 'Caffeine-free only', caffeineFree: 'Caffeine-free', opening: 'OPENING CASE…', openAgain: 'OPEN AGAIN', open: 'OPEN CASE',
    newItem: 'NEW ITEM', referencePrice: 'Typical price', perPerson: '/ cup', find: 'FIND NEARBY', continue: 'CONTINUE', nearby: 'near me',
    whatsInside: "WHAT'S IN THE CASE?", items: 'Items in this case', mystery: '★ MYSTERY DRINK', mysteryAlt: 'Gold-tier mystery drink',
    footer: 'Fan-made · SFX: Valve /', drinkDish: 'Drink', caffeineFreeDish: 'Caffeine-free',
  },
} as const;

const englishNames: Record<number, string> = {
  0:'Iced tea',1:'Sugarcane juice',2:'Lemon tea',3:'Iced black coffee',4:'Iced milk coffee',5:'Kumquat honey tea',6:'Peach oolong tea with orange & lemongrass',7:'Iced yogurt',8:'Soy milk',9:'Coconut water',10:'Bạc xỉu (light milk coffee)',11:'Ginger honey tea',12:'Khúc bạch dessert drink',13:'Coconut cream coffee',
  14:'Brown sugar boba milk tea',15:'Classic milk tea',16:'Cheese foam black tea',17:'Matcha milk tea',18:'Taro milk tea',19:'Oolong milk tea',20:'Lychee tea',21:'Pink guava tea',22:'Artichoke tea',
  23:'Orange juice',24:'Watermelon juice',25:'Carrot juice',26:'Apple juice',27:'Pineapple juice',28:'Passion fruit juice',
  29:'Avocado smoothie',30:'Mango smoothie',31:'Strawberry smoothie',32:'Blueberry smoothie',33:'Coconut smoothie',
  34:'Salted coffee',35:'Egg coffee',36:'Cold brew',37:'Espresso',38:'Iced americano',39:'Cappuccino',40:'Latte',
  41:'Matcha latte',42:'Green tea frappe',43:'Coffee frappe',44:'Chocolate frappe',
  45:'Passion fruit soda',46:'Blueberry soda',47:'Strawberry soda',48:'Kumquat soda',49:'Iced cacao',50:'Winter melon tea',51:'Herbal sâm drink',52:'Yakult frappe',53:'Oreo milk tea',54:'Salted lemonade',55:'Coconut coffee',
};

export function drinkName(drink: Drink, language: Language) {
  return language === 'en' ? englishNames[drink.image] ?? drink.name : drink.name;
}

export function drinkSubtitle(drink: Drink, language: Language) {
  if (language === 'vi') return drink.sub;
  return drink.decaf ? copy.en.caffeineFreeDish : copy.en.drinkDish;
}

export function priceLabel(thousands: number | string, language: Language, approximate = false) {
  const value = Number(thousands) * 1000;
  const formatted = language === 'en' ? `₫${new Intl.NumberFormat('en-US').format(value)}` : `${new Intl.NumberFormat('vi-VN').format(value)}đ`;
  return `${approximate ? '~' : ''}${formatted}`;
}
