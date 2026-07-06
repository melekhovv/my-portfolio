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
    id: "flavor-house",
    title: "Flavor House",
    category: "Ресторанный бизнес",
    description: "Премиальный сайт для сети ресторанов авторской кухни с системой онлайн-бронирования и интерактивным меню.",
    challenge: "Клиент терял до 40% потенциальных гостей из-за устаревшего сайта, который не отражал уровень заведений.",
    solution: "Разработал современный сайт с иммерсивным дизайном, системой бронирования столов и интерактивным меню с фильтрацией по аллергенам.",
    result: "Конверсия в бронирование выросла на 180%. Средний чек увеличился на 25% благодаря визуальной подаче блюд.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    status: "Завершен",
    url: "https://example.com",
    image: "/projects/project-1.jpg",
    gallery: ["/projects/project-1.jpg", "/projects/project-2.jpg"],
    year: "2024",
  },
  {
    id: "build-estate",
    title: "BuildEstate",
    category: "Недвижимость",
    description: "Платформа для премиального жилого комплекса с 3D-визуализацией планировок и интерактивной картой.",
    challenge: "Застройщику нужно было продать 200+ квартир в новом ЖК класса бизнес+ в условиях высокой конкуренции.",
    solution: "Создал сайт с интерактивным выбором квартир по этажам, 3D-турами, калькулятором ипотеки и CRM-интеграцией.",
    result: "68% всех заявок на покупку квартир пришли через сайт. Срок экспозиции сократился на 3 месяца.",
    stack: ["Next.js", "Three.js", "TypeScript", "PostgreSQL", "Prisma"],
    status: "Завершен",
    image: "/projects/project-2.jpg",
    gallery: ["/projects/project-2.jpg", "/projects/project-3.jpg"],
    year: "2024",
  },
  {
    id: "nova-clinic",
    title: "Nova Clinic",
    category: "Медицина",
    description: "Сайт для сети стоматологических клиник с онлайн-записью и личным кабинетом пациента.",
    challenge: "Три клиники в разных городах с устаревшими отдельными сайтами. Пациенты не могли записаться онлайн.",
    solution: "Единая платформа с онлайн-записью, интеграцией с МИС, калькулятором стоимости лечения и блогом.",
    result: "Количество онлайн-записей выросло с 0 до 340 в месяц. Нагрузка на колл-центр снизилась на 45%.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    status: "Поддержка",
    url: "https://example.com",
    image: "/projects/project-3.jpg",
    gallery: ["/projects/project-3.jpg", "/projects/project-4.jpg"],
    year: "2024",
  },
  {
    id: "peak-fitness",
    title: "Peak Fitness",
    category: "Фитнес",
    description: "Корпоративный сайт для сети фитнес-клубов с онлайн-покупкой абонементов и расписанием тренировок.",
    challenge: "Сеть из 5 клубов теряла клиентов из-за невозможности купить абонемент онлайн и неудобного расписания.",
    solution: "Разработал платформу с онлайн-оплатой, интерактивным расписанием, личным кабинетом и мобильной адаптацией.",
    result: "35% абонементов стали покупаться онлайн. Посещаемость групповых тренировок выросла на 50%.",
    stack: ["React", "Next.js", "Stripe", "TypeScript", "Tailwind CSS"],
    status: "Завершен",
    image: "/projects/project-4.jpg",
    gallery: ["/projects/project-4.jpg", "/projects/project-5.jpg"],
    year: "2023",
  },
  {
    id: "legal-pro",
    title: "Legal Pro",
    category: "Юридические услуги",
    description: "Сайт для юридической компании с системой онлайн-консультаций и базой знаний.",
    challenge: "Юридическая фирма не имела digital-присутствия и получала клиентов только через сарафанное радио.",
    solution: "Создал профессиональный сайт с описанием услуг, кейсами, онлайн-записью на консультацию и SEO-оптимизацией.",
    result: "Органический трафик вырос с 0 до 3000 посетителей/месяц. 48 новых клиентов за первые 2 месяца.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Contentful", "Vercel"],
    status: "Завершен",
    url: "https://example.com",
    image: "/projects/project-5.jpg",
    gallery: ["/projects/project-5.jpg", "/projects/project-6.jpg"],
    year: "2023",
  },
  {
    id: "craft-store",
    title: "CraftStore",
    category: "E-commerce",
    description: "Интернет-магазин авторских изделий ручной работы с уникальной системой кастомизации товаров.",
    challenge: "Мастерская авторских изделий продавала только через Instagram и теряла клиентов из-за неудобного процесса заказа.",
    solution: "Построил полноценный e-commerce с конфигуратором товаров, корзиной, оплатой и отслеживанием заказов.",
    result: "Средний чек вырос на 60%. Количество заказов увеличилось в 4 раза за первый квартал.",
    stack: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    status: "В разработке",
    image: "/projects/project-6.jpg",
    gallery: ["/projects/project-6.jpg", "/projects/project-1.jpg"],
    year: "2024",
  },
];