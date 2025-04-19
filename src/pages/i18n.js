// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "Exclusive Deals to Southeast Asia": "Exclusive Deals to Southeast Asia",
      "promoDescription": "We have special fares with <1>Korean Air</1>, <3>China Airlines</3>, <5>EVA Air</5>, and <7>Cathay Pacific</7>.",
      "Visit The Most": "Visit The Most",
      "Beautiful Places": "Beautiful Places",
      "In The World": "In The World",
      "Plan and book your perfect trip with expert advice, travel tips, destination information, and inspiration from us.": "Plan and book your perfect trip with expert advice, travel tips, destination information, and inspiration from us.",
      "Happy Travelers": "Happy Travelers",
      "200+": "200+", 
      "Your Destinations": "Your Destinations",
      "We are your personal experts for your travel": "We are your personal experts for your travel",

      // Newly Added
      "Whether it’s our own travel project or additions to your existing programmes, the creative possibilities are endless.": "Whether it’s our own travel project or additions to your existing programmes, the creative possibilities are endless.",
      "We specialise in group travel, theme trips, individual travel and on land segment for river cruises.": "We specialise in group travel, theme trips, individual travel and on land segment for river cruises.",
      "We offer you innovative and comprehensive ideas for your travel routes.": "We offer you innovative and comprehensive ideas for your travel routes.",
      "We provide personal and professional support on-site so that you can sit back and relax.": "We provide personal and professional support on-site so that you can sit back and relax.",
      "We guarantee outstanding service and reliability at all times.": "We guarantee outstanding service and reliability at all times.",
      "Book Air Tickets": "Book Air Tickets",
      "International and Domestic Flights at the best price.": "International and Domestic Flights at the best price.",
      "Package": "Package",
      "Mexico, Cuba, USA, Bahamas, Caribbean": "Mexico, Cuba, USA, Bahamas, Caribbean",
      "Hotels & Cars": "Hotels & Cars",
      "Best deals on hotels and car rentals.": "Best deals on hotels and car rentals.",
      "Travel Insurance": "Travel Insurance",
      "Protect your trip with travel insurance.": "Protect your trip with travel insurance.",
      "Renew Documents": "Renew Documents",
      "PR Card & Apply for Canadian Citizenship & Apply USA Visa": "PR Card & Apply for Canadian Citizenship & Apply USA Visa",
      "Legalization": "Legalization",
      "Vietnamese Visa Application, Visa Exemption, Vietnamese Passport, Power of Atttorney": "Vietnamese Visa Application, Visa Exemption, Vietnamese Passport, Power of Atttorney",
      "Our Story": "Our Story",
      "about": {
    "description1": "With 18 years of experience in the travel industry, we proudly help thousands of travelers create unforgettable experiences across the globe. Our mission is to make every journey seamless, enjoyable, and truly life-changing"
  },
      "Why Choose Us?": "Why Choose Us?",
      "Expert Guidance": "Expert Guidance",
      "We provide curated travel experiences tailored to your preferences.": "We provide curated travel experiences tailored to your preferences.",
      "Personalized Service": "Personalized Service",
      "We treat every traveler like family, ensuring your trip is stress-free.": "We treat every traveler like family, ensuring your trip is stress-free.",
      "Top-Rated Destinations": "Top-Rated Destinations",
      "We partner with the best hotels and tour operators worldwide.": "We partner with the best hotels and tour operators worldwide.",
      "Global Reach": "Global Reach",
      "Ready to Start Your Next Adventure? ": "Ready to Start Your Next Adventure? ",
      "Let us plan your dream vacation today.": "Let us plan your dream vacation today.",
      "Contact us at 403-604-9794": "Contact us at 403-604-9794",
      "Call": "Call",
      "Cancel" : "Cancel",
      "Call 403-604-9794?": "Call 403-604-9794?",
      "Your Name": "Your Name",
      "Your Email": "Your Email",
      "Your Message": "Your Message",
      "Send": "Send",
      "Services": "Services",
    }
  },
  vi: {
    translation: {
      "Exclusive Deals to Southeast Asia": "Ưu đãi độc quyền đến Đông Nam Á",
      "promoDescription": "Chúng tôi có giá vé đặc biệt với <1>Korean Air</1>, <3>China Airlines</3>, <5>EVA Air</5>, và <7>Cathay Pacific</7>.",
      "Visit The Most": "Khám phá những",
      "Beautiful Places": "địa điểm đẹp nhất",
      "In The World": "trên thế giới",
      "Plan and book your perfect trip with expert advice, travel tips, destination information, and inspiration from us.": "Lên kế hoạch và đặt chuyến đi hoàn hảo của bạn với lời khuyên từ chuyên gia, mẹo du lịch, thông tin điểm đến và cảm hứng từ chúng tôi.",
      "Happy Travelers": "Khách du lịch hài lòng",
      "200+": "Hơn 200",
      "Your Destinations": "Điểm đến của bạn",
      "We are your personal experts for your travel": "Chúng tôi là chuyên gia cho những chuyến đi của bạn",

      // Newly Added
      "Whether it’s our own travel project or additions to your existing programmes, the creative possibilities are endless.": "Dù là chương trình du lịch do chúng tôi tổ chức hay được bổ sung vào kế hoạch sẵn có của bạn, khả năng sáng tạo là vô tận.",
      "We specialise in group travel, theme trips, individual travel and on land segment for river cruises.": "Chúng tôi chuyên tổ chức tour theo đoàn, tour theo chủ đề, tour cá nhân và các chặng tham quan trên bờ cho du thuyền.",
      "We offer you innovative and comprehensive ideas for your travel routes.": "Chúng tôi mang đến cho bạn những ý tưởng hành trình sáng tạo và toàn diện.",
      "We provide personal and professional support on-site so that you can sit back and relax.": "Chúng tôi hỗ trợ tận nơi một cách chuyên nghiệp và tận tâm, để bạn có thể yên tâm tận hưởng chuyến đi.",
      "We guarantee outstanding service and reliability at all times.": "Chúng tôi cam kết mang đến dịch vụ xuất sắc và đáng tin cậy mọi lúc, mọi nơi.",
      "Book Air Tickets": "Đặt vé máy bay",
      "International and Domestic Flights at the best price.": "Các chuyến bay quốc tế và nội địa với giá tốt nhất.",
      "Package": "Gói du lịch trọn gói",
      "Mexico, Cuba, USA, Bahamas, Caribbean": "Mexico, Cuba, Hoa Kỳ, Bahamas, Caribe",
      "Hotels & Cars": "Khách sạn & Xe thuê",
      "Best deals on hotels and car rentals.": "Ưu đãi tốt nhất cho khách sạn và dịch vụ thuê xe.",
      "Travel Insurance": "Bảo hiểm du lịch",
      "Protect your trip with travel insurance.": "Bảo vệ chuyến đi của bạn với bảo hiểm du lịch.",
      "Renew Documents": "Gia hạn giấy tờ",
      "PR Card & Apply for Canadian Citizenship & Apply USA Visa": "Thẻ thường trú nhân, đăng ký quốc tịch Canada, xin visa Hoa Kỳ",
      "Legalization": "Hợp pháp hóa giấy tờ",
      "Vietnamese Visa Application, Visa Exemption, Vietnamese Passport, Power of Atttorney": "Xin visa Việt Nam, miễn thị thực, hộ chiếu Việt Nam, giấy ủy quyền",
      "Our Story": "Câu chuyện của chúng tôi",
    "about": {
    "description1": "Với 18 năm kinh nghiệm trong ngành du lịch, chúng tôi tự hào giúp hàng nghìn du khách tạo ra những trải nghiệm khó quên trên toàn thế giới. Sứ mệnh của chúng tôi là làm cho mỗi chuyến đi trở nên suôn sẻ, thú vị và thực sự thay đổi cuộc sống"
  },
      "Why Choose Us?": "Vì sao chọn chúng tôi?",
      "Expert Guidance": "Hướng dẫn chuyên nghiệp",
      "We provide curated travel experiences tailored to your preferences.": "Chúng tôi thiết kế hành trình phù hợp với nhu cầu và sở thích riêng của bạn.",
      "Personalized Service": "Dịch vụ cá nhân hóa",
      "We treat every traveler like family, ensuring your trip is stress-free.": "Chúng tôi coi mỗi khách hàng như người thân, đảm bảo chuyến đi của bạn luôn thoải mái và không lo lắng.",
      "Top-Rated Destinations": "Những điểm đến hàng đầu",
      "We partner with the best hotels and tour operators worldwide.": "Chúng tôi hợp tác với các khách sạn và công ty du lịch uy tín trên toàn thế giới.",
      "Global Reach": "Mạng lưới toàn cầu",
      "We help you explore destinations across every continent.": "Chúng tôi giúp bạn khám phá những điểm đến trên khắp các châu lục.",
      "Ready to Start Your Next Adventure?": " Sẵn sàng cho chuyến đi tiếp theo của bạn chưa?",
      "Let us plan your dream vacation today.": " Hãy để chúng tôi lên kế hoạch cho kỳ nghỉ mơ ước của bạn ngay hôm nay.",
      "Contact us at 403-604-9794": "Liên hệ với chúng tôi tại 403-604-9794",
      "Call": "Gọi",
      "Cancel": "Hủy",
      "Call 403-604-9794?": "Gọi 403-604-9794?",
      "Your Name": "Tên của bạn",
      "Your Email": "Email của bạn",
      "Your Message": "Tin nhắn của bạn",
      "Send": "Gửi",
      "Services": "Dịch vụ của chúng tôi",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
