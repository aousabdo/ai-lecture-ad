import React from 'react';

const AdCard = ({ title, subtitle, speaker, speakerTitle, speakerDetails, lectureTopics, date, time, venue, isArabic }) => (
  <div className={`bg-gradient-to-br from-purple-600 to-blue-500 text-white w-full mx-auto p-8 rounded-lg mb-8 ${isArabic ? 'text-right' : 'text-left'}`}>
    <div className="max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className="text-6xl font-bold mb-4">{title}</h1>
        <h2 className="text-4xl">{subtitle}</h2>
      </div>
      <div className="bg-white/20 p-8 rounded-lg mb-8 shadow-lg flex flex-col md:flex-row items-center">
        <img 
          src="/Aous_Abdo_headshot.jpeg" 
          alt={speaker} 
          className="w-64 h-64 rounded-full object-cover mb-6 md:mb-0 md:mr-8"
        />
        <div>
          <h3 className="font-semibold text-4xl mb-3">{speaker}</h3>
          <p className="text-3xl mb-5">{speakerTitle}</p>
          <div className="text-xl">
            <h4 className="font-semibold mb-3 text-2xl">
              {isArabic ? 'عن المتحدث:' : 'About the Speaker:'}
            </h4>
            <ul className={`list-disc ${isArabic ? 'list-inside' : 'list-outside pl-5'} space-y-2`}>
              {speakerDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white/20 p-8 rounded-lg mb-8 shadow-lg">
        <h4 className="text-3xl font-semibold mb-6 text-center">
          {isArabic ? 'أبرز محاور المحاضرة:' : 'Lecture Highlights:'}
        </h4>
        <ul className="space-y-6">
          {lectureTopics.map((topic, index) => (
            <li key={index} className={`flex items-start ${isArabic ? 'flex-row-reverse' : ''}`}>
              <span className={`text-5xl ${isArabic ? 'ml-4' : 'mr-4'}`}>{topic.icon}</span>
              <span className="text-2xl flex-1">{topic.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white/20 p-8 rounded-lg shadow-lg text-center">
        <p className="text-2xl mb-2"><strong>{isArabic ? 'التاريخ:' : 'Date:'}</strong> {date}</p>
        <p className="text-2xl mb-2"><strong>{isArabic ? 'الوقت:' : 'Time:'}</strong> {time}</p>
        <p className="text-2xl"><strong>{isArabic ? 'المكان:' : 'Venue:'}</strong> {venue}</p>
      </div>
    </div>
  </div>
);

const AILectureAd = () => {
  const content = {
    en: {
      title: "The AI Revolution: From Science Fiction to Reality",
      subtitle: "Transforming Industries, Boosting Profits, and Reshaping Our World: The Unstoppable Rise of AI",
      speaker: "Dr. Aous Ahmad Abdo",
      speakerTitle: "AI Visionary, Global Innovator, & Former NASA Scientist",
      speakerDetails: [
        "Founder & CEO of Analytica Data Science Solutions",
        "Fellow of the US National Academy of Sciences",
        "Strategic advisor to US Federal agencies and Fortune 500 companies",
        "Former lead scientist at NASA and Naval Research Laboratory",
        "Author of 3 groundbreaking books on Machine Learning and AI",
        "24+ publications in prestigious journals including Nature and Science"
      ],
      lectureTopics: [
        { icon: "🏭", text: "Industry Transformation: How AI is revolutionizing manufacturing, healthcare, finance, and more" },
        { icon: "💰", text: "Profit Boost: Leveraging AI for increased efficiency, cost reduction, and revenue growth" },
        { icon: "🌐", text: "Global Impact: AI's role in solving world challenges and creating new opportunities" },
        { icon: "🚀", text: "Innovation Acceleration: From concept to market - how AI is speeding up product development" },
        { icon: "🤝", text: "Human-AI Collaboration: Enhancing human capabilities and creating new job opportunities" },
        { icon: "🔮", text: "Future Trends: Emerging AI technologies and their potential to reshape our world" }
      ],
      date: "Wednesday, October 9, 2024",
      time: "6:00 PM - 8:00 PM",
      venue: "To be announced",
    },
    ar: {
      title: "ثورة الذكاء الاصطناعي: من الخيال العلمي إلى الواقع",
      subtitle: "تحويل الصناعات، زيادة الأرباح، وإعادة تشكيل عالمنا: الصعود الذي لا يمكن إيقافه للذكاء الاصطناعي",
      speaker: "د. أوس أحمد عبده",
      speakerTitle: "رائد الذكاء الاصطناعي، مبتكر عالمي، وعالم سابق في ناسا",
      speakerDetails: [
        "مؤسس والرئيس التنفيذي لشركة Analytica Data Science Solutions",
        "زميل الأكاديمية الوطنية للعلوم الأمريكية",
        "مستشار استراتيجي للوكالات الفيدرالية الأمريكية وشركات فورتشن 500",
        "عالم رئيسي سابق في ناسا ومختبر البحوث البحرية",
        "مؤلف 3 كتب رائدة في التعلم الآلي والذكاء الاصطناعي",
        "أكثر من 24 منشورًا في مجلات مرموقة بما في ذلك Nature و Science"
      ],
      lectureTopics: [
        { icon: "🏭", text: "تحول الصناعة: كيف يعيد الذكاء الاصطناعي تشكيل الصناعة والرعاية الصحية والتمويل والمزيد" },
        { icon: "💰", text: "زيادة الأرباح: الاستفادة من الذكاء الاصطناعي لزيادة الكفاءة وخفض التكاليف ونمو الإيرادات" },
        { icon: "🌐", text: "التأثير العالمي: دور الذكاء الاصطناعي في حل التحديات العالمية وخلق فرص جديدة" },
        { icon: "🚀", text: "تسريع الابتكار: من المفهوم إلى السوق - كيف يسرع الذكاء الاصطناعي تطوير المنتجات" },
        { icon: "🤝", text: "التعاون بين الإنسان والذكاء الاصطناعي: تعزيز القدرات البشرية وخلق فرص عمل جديدة" },
        { icon: "🔮", text: "اتجاهات المستقبل: تقنيات الذكاء الاصطناعي الناشئة وإمكاناتها في إعادة تشكيل عالمنا" }
      ],
      date: "الأربعاء، 9 أكتوبر 2024",
      time: "6:00 مساءً - 8:00 مساءً",
      venue: "سيتم الإعلان عنه لاحقاً",
    }
  };

  return (
    <div className="font-sans p-2 max-w-[1600px] mx-auto">
      <AdCard {...content.en} isArabic={false} />
      <AdCard {...content.ar} isArabic={true} />
    </div>
  );
};

export default AILectureAd;