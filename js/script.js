// ===============================
// Alternância de tema
// ===============================
const themeToggle = document.getElementById("themeToggle");
const knob = document.getElementById("knob");

themeToggle?.addEventListener("click", () => {
  const currentTheme = document.body.dataset.theme;

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.body.dataset.theme = newTheme;

  // Altera o ícone do botão
  knob.textContent = newTheme === "dark" ? "☾" : "☼";
});

// ===============================
// Traduções
// ===============================

const translations = {
  en: {
    availability: "available for projects and internships",
    apresentation: "Hi, I'm Gabriela",
    role: "Software Engineering student building, learning and exploring the world of technology.",
    description:
      "Passionate about crafting elegant solutions, exploring data-driven insights, and building interfaces that matter. On a journey to become a skilled software engineer with a focus on front-end and data analysis, driven by international ambitions.",
    viewWork: "View my work",
    contactMe: "Contact me",
    aboutMe: "About Me",
    aboutMeSubtitle:
      "I am always seeking new challenges and opportunities to learn.",
    aboutMeParagraph1:
      "I am a Software Engineering student at the Federal University of Goiás, and I am building my career path by going beyond the classroom—participating in academic projects, a junior enterprise, teaching assistant roles, and undergraduate research.",
    aboutMeParagraph2:
      "I am currently seeking an IT internship opportunity to continue learning, contribute to real-world projects, and grow professionally.",
    currentlyDeepDivingInto: "Currently deep-diving into:",
    keyMilestones: "Key Milestones",
    teachingAssistantTitle:
      "Teaching Assistant for Data Analysis and Communication",
    teachingAssistantDesc:
      "Scholarship-holding teaching assistant for the Data Analysis and Communication module at the Federal University of Goiás.",
    level5Title: "Member of the Level5 project team",
    level5Desc:
      "Worked on the projects team at Level5, the junior enterprise of the Federal University of Goiás.",
    softwareEngineeringTitle: "Started Software Engineering degree",
    softwareEngineeringDesc:
      "Bachelor's degree in Software Engineering from the Federal University of Goiás (UFG)",
    EnglishCertificateTitle: "B1-level English certificate",
    EnglishCertificateDesc:
      "Intensive English Course at the Islington Centre of English in London",
    Skills: "Skills & Technologies",
    SkillsSubtitle:
      "A structured ecosystem of tools and technologies I use to build robust software systems.",
    Languages: "Languages",
    Data: "Data",
    ResponsibleDesign: "Responsible Design",
    DataVisualization: "Data Visualization",
    Tools: "Tools",
    Exploring: "Exploring",
    ExploringSubtitle:
      "Actively expanding my professional focus into next-gen software architectures.",
    Projects: "03 // Projects",
    FeaturedProjects: "Featured Projects",
    ProjectsSubtitle:
      "A showcase of systems, design architectures, and data analysis experiments built during my studies.",
    ProjectThumbSudoku: "Sudoku Game",
    ProjectSudokuDescription:
      "Interactive puzzle game with backtracking solver algorithm and multiple customizable difficulty levels.",
    ProjectSudokuAlgorithms: "Algorithms",
    ProjectSudokuRepository: "Repository",
    ProjectLevelLearnTitle: "Level Learn Internal Project",
    ProjectLevelLearnDescription:
      "A learning platform built for Level's junior enterprise, centralizing all internal courses for member training. Working on the front-end team.",
    ProjectGenderTechResearchTitle: "Gender Tech Research",
    ProjectGenderTechResearchDescription:
      "Undergraduate research analyzing CONPEEX/UFG scientific abstracts to map research trends, with a focus on women's participation across STEM fields.",
    ProjectPersonalPortfolioTitle: "Personal Portfolio",
    ProjectPersonalPortfolioDescription:
      "This responsive, minimalist and fast portfolio built to showcase my academic projects and milestones.",
    comingSoon:
      "✧ More exciting systems currently in development. Coming soon!",
  },

  pt: {
    availability: "disponível para projetos e estágios",
    apresentation: "Olá, eu sou Gabriela",
    role: "Estudante de Engenharia de Software construindo, aprendendo e explorando o mundo da tecnologia.",
    description:
      "Apaixonada por criar soluções elegantes, explorar insights baseados em dados e desenvolver interfaces que fazem a diferença. Construindo minha trajetória como engenheira de software, com foco em front-end e análise de dados, com ambições internacionais.",
    viewWork: "Ver meus projetos",
    contactMe: "Entre em contato",
    aboutMe: "Sobre mim",
    aboutMeSubtitle:
      "Estou sempre em busca de novos desafios e oportunidades para aprender.",
    aboutMeParagraph1:
      "Sou estudante de Engenharia de Software na Universidade Federal de Goiás, construindo minha trajetória profissional ao ir além da sala de aula — participando de projetos acadêmicos, empresa júnior, monitoria e projeto de Iniciação Científica.",
    aboutMeParagraph2:
      "Atualmente, estou em busca de uma oportunidade de estágio em TI para continuar aprendendo, contribuir com projetos reais e crescer profissionalmente.",
    currentlyDeepDivingInto: "Atualmente aprofundando meus conhecimentos em:",
    keyMilestones: "Minha trajetória",
    teachingAssistantTitle: "Monitoria para Análise de Dados e Comunicação",
    teachingAssistantDesc:
      "Monitoria com bolsa de estudos na disciplina de Análise de Dados e Comunicação na Universidade Federal de Goiás.",
    level5Title: "Membro da equipe de projetos da Level5",
    level5Desc:
      "Atuei na equipe de projetos da Level5, empresa júnior da Universidade Federal de Goiás.",
    softwareEngineeringTitle: "Início do curso de Engenharia de Software",
    softwareEngineeringDesc:
      "Graduação em Engenharia de Software pela Universidade Federal de Goiás (UFG)",
    EnglishCertificateTitle: "Certificado de inglês nível B1",
    EnglishCertificateDesc:
      "Curso intensivo de inglês no Inslington Centre of English em Londres",
    Skills: "Habilidades & Tecnologias",
    SkillsSubtitle:
      "Um ecossistema estruturado de ferramentas e tecnologias que utilizo para construir sistemas de software robustos.",
    Languages: "Linguagens",
    Data: "Dados",
    ResponsibleDesign: "Design Responsável",
    DataVisualization: "Visualização de Dados",
    Tools: "Ferramentas",
    Exploring: "Explorando",
    ExploringSubtitle:
      "Expandindo ativamente meu foco profissional para arquiteturas de software de próxima geração.",
    Projects: "03 // Projetos",
    FeaturedProjects: "Projetos em Destaque",
    ProjectsSubtitle:
      "Uma mostra de sistemas, arquiteturas de design e experimentos de análise de dados desenvolvidos durante meus estudos.",
    ProjectThumbSudoku: "Jogo Sudoku",
    ProjectSudokuDescription:
      "Jogo de quebra-cabeça interativo com algoritmo de resolução por backtracking e múltiplos níveis de dificuldade personalizáveis.",
    ProjectSudokuAlgorithms: "Algoritmos",
    ProjectSudokuRepository: "Repositório",
    ProjectLevelLearnTitle: "Projeto Interno Level Learn",
    ProjectLevelLearnDescription:
      "Uma plataforma de aprendizado desenvolvida para a empresa júnior da Level, centralizando todos os cursos internos para a capacitação dos membros. Atuação na equipe de front-end.",
    ProjectGenderTechResearchTitle: "Pesquisa de Gênero na Tecnologia",
    ProjectGenderTechResearchDescription:
      "Pesquisa de Iniciação Científica analisando resumos científicos do CONPEEX/UFG para mapear tendências de pesquisa, com foco na participação feminina em áreas STEM.",
    ProjectPersonalPortfolioTitle: "Portfólio Pessoal",
    ProjectPersonalPortfolioDescription:
      "Este portfólio responsivo, minimalista e rápido foi construído para exibir meus projetos acadêmicos e marcos da minha trajetória.",
    comingSoon:
      "✧ Mais sistemas empolgantes atualmente em desenvolvimento. Em breve!",
  },
};

// Conteúdo do botão de contato

const emailContent = {
  en: {
    subject: "Portfolio Inquiry",
    body: "Hi Gabriela,\n\nI found your portfolio and would like to get in touch regarding...",
  },

  pt: {
    subject: "Contato pelo Portfólio",
    body: "Olá Gabriela,\n\nEncontrei seu portfólio e gostaria de entrar em contato sobre...",
  },
};

// ===============================
// Funções
// ===============================

function changeLanguage(language) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[language][key];
  });

  updateContactLink(language);
  typingEffect();
}

function updateContactLink(language) {
  const contactLink = document.getElementById("contact-link");

  const subject = encodeURIComponent(emailContent[language].subject);
  const body = encodeURIComponent(emailContent[language].body);

  contactLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=ggabrielapassos.eng@gmail.com&subject=${subject}&body=${body}`;
}

function typingEffect() {
  const element = document.querySelector(".typing");

  if (!element) return;

  element.classList.remove("animate");

  void element.offsetWidth;

  element.classList.add("animate");
}

// ===============================
// Eventos
// ===============================

const enButton = document.getElementById("en-btn");
const ptButton = document.getElementById("pt-btn");

enButton?.addEventListener("click", () => {
  changeLanguage("en");
});

ptButton?.addEventListener("click", () => {
  changeLanguage("pt");
});

// ===============================
// Inicialização
// ===============================

changeLanguage("en");

typingEffect();

setInterval(() => {
  typingEffect();
}, 5000);

/* ==========================================================
   Efeito do texto aparecendo
========================================================== */
const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 90);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
);

items.forEach((item) => observer.observe(item));
