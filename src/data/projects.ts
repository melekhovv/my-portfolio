export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
  status: "Завершен" | "В разработке" | "Поддержка";
  url?: string;
  image: string;
  gallery: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: "medora",
    title: "Medora",
    category: "Медицинская клиника",
    description:
      "Сайт для клиники превентивной медицины с мягкой визуальной подачей, понятной навигацией по направлениям и быстрым переходом к записи.",
    challenge:
      "Клиника хотела уйти от ощущения типового медицинского сайта. Нужно было показать доверие, экспертность и заботу, но не перегрузить первый экран медицинскими терминами.",
    solution:
      "Собрал спокойный премиальный интерфейс: крупный эмоциональный hero, зеленую систему акцентов, блоки с подходом клиники, направлениями, программами и заметной кнопкой записи.",
    result:
      "Получился сайт, который выглядит как современный health-care бренд: пациент быстро понимает позиционирование клиники, видит маршрут записи и может перейти к консультации с первого экрана.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive UI"],
    status: "Завершен",
    url: "https://melekhovv-medora-medicine-website.layero.ru/",
    image: "/projects/medora-desktop.png",
    gallery: ["/projects/medora-desktop.png", "/projects/medora-mobile.png"],
    year: "2026",
  },
  {
    id: "aurora-fjord-lodge",
    title: "Aurora Fjord Lodge",
    category: "Boutique hospitality",
    description:
      "Имиджевый сайт для частного северного лоджа с атмосферной подачей, крупной типографикой и визуальным акцентом на природу, тишину и премиальный отдых.",
    challenge:
      "Заказчику нужен был сайт, который продает не номер, а состояние: север, приватность, ночное небо и редкий опыт проживания у фьорда.",
    solution:
      "Сделал cinematic landing с полноэкранным визуалом, выразительной serif-типографикой, минимальной навигацией и быстрыми сценариями Sanctuary / Journeys / Inquiry.",
    result:
      "Проект работает как digital-брошюра для дорогого lodge-направления: с первых секунд передает настроение места и ведет пользователя к запросу на бронирование.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Editorial UI"],
    status: "Завершен",
    url: "https://melekhovv-aurora-fjord-lodge.preview.layero.ru/",
    image: "/projects/aurora-fjord-lodge-desktop.png",
    gallery: [
      "/projects/aurora-fjord-lodge-desktop.png",
      "/projects/aurora-fjord-lodge-mobile.png",
    ],
    year: "2026",
  },
  {
    id: "civora-labs",
    title: "Civora Labs",
    category: "Climate tech / SaaS",
    description:
      "Лендинг для climate-tech платформы, которая помогает городским командам моделировать риски жары и заранее планировать инфраструктурные решения.",
    challenge:
      "Сложный B2B-продукт нужно было объяснить быстро: городские данные, климатические сигналы и симуляции должны выглядеть технологично, но не сухо.",
    solution:
      "Построил темную аналитическую подачу с крупным тезисом, data-визуалом, контрастными CTA, блоками сигналов и понятной историей продукта для пилотных городов.",
    result:
      "Сайт формирует образ серьезной технологической платформы и помогает перевести абстрактную климатическую аналитику в понятный запрос: смоделировать свой город.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Data UI", "Responsive UI"],
    status: "Завершен",
    url: "https://melekhovv-civora-labs-site.preview.layero.ru/",
    image: "/projects/civora-labs-desktop.png",
    gallery: ["/projects/civora-labs-desktop.png", "/projects/civora-labs-mobile.png"],
    year: "2026",
  },
];
