import { ArrowUpRight, Check, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react'

const keywordSections = [
  {
    title: 'Faro Casino — спокойный старт для новой игры',
    keyword: 'Faro Casino',
    text: 'Faro Casino — понятная онлайн-площадка для тех, кто хочет начать игру без лишних шагов. Здесь легко сориентироваться в разделах, выбрать подходящий формат и уделить внимание правилам до первого раунда.',
  },
  {
    title: 'Faro Casino зеркало: доступ без лишних поисков',
    keyword: 'Faro Casino зеркало',
    text: 'Faro Casino зеркало помогает открыть привычную страницу, когда основной адрес временно недоступен. Используйте только актуальные ссылки из проверенных источников и всегда проверяйте адресную строку перед входом.',
  },
  {
    title: 'Faro Casino играть — выбирайте свой темп',
    keyword: 'Faro Casino играть',
    text: 'Faro Casino играть удобно тем, кто ценит ясную навигацию и быстрый переход к любимым форматам. Начните с ознакомления с интерфейсом, установите личный лимит и играйте только на комфортную сумму.',
  },
  {
    title: 'Faro Casino официальный формат без обещаний',
    keyword: 'Faro Casino официальный',
    text: 'Faro Casino официальный ресурс должен открываться по защищённому соединению и содержать понятные правила. Перед регистрацией изучите условия бонусов, способы поддержки и требования к подтверждению аккаунта.',
  },
  {
    title: 'Faro Casino официальный сайт: всё важное рядом',
    keyword: 'Faro Casino официальный сайт',
    text: 'Faro Casino официальный сайт создан для удобного доступа с телефона и компьютера. В одном месте собраны игры, профиль, история операций и раздел помощи — без перегруженных экранов и непонятных переходов.',
  },
  {
    title: 'Faro казино для тех, кто любит понятные правила',
    keyword: 'Faro казино',
    text: 'Faro казино подойдёт игрокам, которые сначала хотят разобраться в механике, а уже потом выбирать стол. Читайте описание раунда, обращайте внимание на лимиты и не воспринимайте игру как способ заработка.',
  },
  {
    title: 'Фаро казино: короткая дорога к любимым разделам',
    keyword: 'фаро казино',
    text: 'Фаро казино удобно просматривать на мобильном экране: основные категории находятся на виду, а переходы не требуют долгого ожидания. Сохраните только официальный адрес и не вводите данные на случайных страницах.',
  },
  {
    title: 'Фаро казино зеркало и безопасный вход',
    keyword: 'фаро казино зеркало',
    text: 'Фаро казино зеркало может стать запасным входом при технических работах. Безопасность важнее скорости: проверяйте домен, наличие HTTPS и не передавайте пароль через сообщения или сторонние формы.',
  },
  {
    title: 'Фаро казино зеркало рабочее — как проверить ссылку',
    keyword: 'фаро казино зеркало рабочее',
    text: 'Фаро казино зеркало рабочее должно открываться стабильно, не перенаправлять на подозрительные страницы и сохранять знакомую структуру сайта. Если дизайн или адрес резко отличаются, закройте вкладку и найдите официальный источник.',
  },
  {
    title: 'Фаро казино играть с вниманием к деталям',
    keyword: 'фаро казино играть',
    text: 'Фаро казино играть лучше в спокойном режиме: заранее определите время сессии и сумму, которую готовы потратить. Делайте паузы, не пытайтесь отыгрываться и помните, что результат каждого раунда случаен.',
  },
  {
    title: 'Фаро казино онлайн — формат для мобильного дня',
    keyword: 'фаро казино онлайн',
    text: 'Фаро казино онлайн доступно там, где есть стабильное соединение. Адаптивный интерфейс помогает быстро открыть нужный раздел с телефона, но перед игрой всё равно стоит проверить возрастные ограничения и правила региона.',
  },
  {
    title: 'Фаро казино официальный: ориентир на прозрачность',
    keyword: 'фаро казино официальный',
    text: 'Фаро казино официальный источник рассказывает об условиях понятным языком: как создаётся аккаунт, где найти поддержку и какие документы могут понадобиться. Прозрачная информация помогает принимать решения без спешки.',
  },
  {
    title: 'Фаро казино официальный сайт — в закладки',
    keyword: 'фаро казино официальный сайт',
    text: 'Фаро казино официальный сайт стоит добавлять в закладки только после проверки адреса. Так вы быстрее вернётесь к нужной странице и снизите риск случайно открыть копию, которая собирает логины или платёжные данные.',
  },
]

export default function Page() {
  return (
    <main className="faro-shell">
      <header className="faro-header">
        <a className="faro-logo" href="#top" aria-label="Faro Casino — на главную">
          <span className="faro-logo-mark">F</span>
          <span>Faro <em>Casino</em></span>
        </a>
        <nav className="faro-nav" aria-label="Основная навигация">
          <a href="#guide">Обзор</a>
          <a href="#safety">Безопасность</a>
          <a className="faro-nav-cta" href="#keywords">Ключевые разделы <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="faro-hero" id="top" aria-labelledby="hero-title">
        <div className="faro-hero-copy">
          <p className="faro-eyebrow"><Sparkles size={15} /> Навигация для игроков</p>
          <h1 id="hero-title">Faro Casino: игра начинается с ясного выбора</h1>
          <p className="faro-hero-text">Разбираем, как найти официальный сайт, проверить зеркало и пользоваться мобильной версией без суеты. Только полезная информация, понятные правила и разумный подход к онлайн-игре.</p>
          <div className="faro-actions">
            <a className="faro-primary" href="#guide">Читать обзор <ChevronRight size={17} /></a>
            <a className="faro-secondary" href="#safety">Правила безопасности</a>
          </div>
        </div>
        <div className="faro-hero-art" role="img" aria-label="Рулетка и игральные карты на тёмном столе" />
      </section>

      <section className="faro-intro" id="guide" aria-labelledby="guide-title">
        <div>
          <p className="faro-kicker">Коротко о главном</p>
          <h2 id="guide-title">Как пользоваться Faro Casino без лишних шагов</h2>
        </div>
        <p>Хороший игровой сайт не заставляет разгадывать интерфейс. Проверьте адрес, откройте нужный раздел, прочитайте условия и только после этого принимайте решение. Для мобильных пользователей особенно важны скорость загрузки, крупные элементы и отсутствие навязчивых переходов.</p>
      </section>

      <section className="faro-trust" id="safety" aria-label="Преимущества безопасного подхода">
        <div className="faro-trust-item"><ShieldCheck size={21} /><div><strong>Проверяйте адрес</strong><span>HTTPS и знакомый домен — базовый ориентир.</span></div></div>
        <div className="faro-trust-item"><Check size={21} /><div><strong>Читайте условия</strong><span>Бонусы и лимиты должны быть видны заранее.</span></div></div>
        <div className="faro-trust-item"><Sparkles size={21} /><div><strong>Играйте осознанно</strong><span>Лимит времени важнее эмоций в моменте.</span></div></div>
      </section>

      <section className="faro-keywords" id="keywords" aria-labelledby="keywords-title">
        <div className="faro-section-heading"><p className="faro-kicker">Полезный словарь</p><h2 id="keywords-title">Все ключевые запросы — в одном понятном обзоре</h2></div>
        <div className="faro-article-grid">
          {keywordSections.map((section) => (
            <article className="faro-article" key={section.keyword + section.title}>
              <p className="faro-article-label">FARO / GUIDE</p>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="faro-footer">
        <div className="faro-footer-brand"><span className="faro-logo-mark">F</span><div><strong>Faro Casino</strong><span>Информационный гид для игроков</span></div></div>
        <div className="faro-tags" aria-label="Ключевые фразы сайта">{keywordSections.map((section) => <a href="#keywords" key={`tag-${section.keyword}`}>#{section.keyword.replaceAll(' ', '_')}</a>)}</div>
        <p className="faro-disclaimer">18+ Играйте ответственно. Материалы страницы носят информационный характер. Не используйте азартные игры как способ заработка.</p>
      </footer>
    </main>
  )
}

export const metadata = {
  title: 'Faro Casino — официальный сайт, зеркало и игра онлайн',
  description: 'Faro Casino: официальный сайт, рабочее зеркало и понятный гид по игре онлайн. Узнайте, как проверить ссылку, начать игру и соблюдать правила безопасности.',
}

export const dynamic = 'force-static'
