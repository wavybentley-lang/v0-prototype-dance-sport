import {
  Calendar,
  CalendarRange,
  Crown,
  Flame,
  Star,
  Tag,
  Ticket,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react"

export type NavLink = {
  href: string
  label: string
}

export type Course = {
  title: string
  age: string
  description: string
  image: string
  Icon: LucideIcon
}

export type CourseCategory = {
  label: string
  courses: Course[]
}

export type ScheduleDay = {
  day: string
  classes: {
    time: string
    name: string
  }[]
}

export type TeamMember = {
  photo: string
  name: string
  role: string
  bio: string
}

export const brand = {
  name: "A.S.D. Dancesport Studio",
  shortName: "Dancesport Studio",
  tagline: "Scuola di ballo diretta da Jessica Pellegrino",
  logo: "",
  phone: "+39 344 298 9263",
  phoneHref: "tel:+393442989263",
  whatsappHref: "https://wa.me/393442989263",
  email: "asd.dancesportstudio@libero.it",
  emailHref: "mailto:asd.dancesportstudio@libero.it",
  instagramHref: "https://www.instagram.com/dancesport_studio",
  facebookHref: "https://www.facebook.com/a.s.dDancesportStudio/",
  mapsHref: "https://maps.google.com/?q=Corso+Italia+40+84098+Pontecagnano+Faiano+SA+Italy",
  primaryLocation: "Corso Italia, 40",
  secondaryLocation: "84098 Pontecagnano Faiano SA",
  cityLine: "Italy",
  hours: "",
  copyright: " 2026 A.S.D. Dancesport Studio",
}

export const navLinks: NavLink[] = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#corsi", label: "Corsi" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contatti", label: "Contatti" },
]

export const stats = [
  { number: "BALLI", label: "DI COPPIA E SPORTIVI" },
  { number: "TUTTI", label: "I LIVELLI" },
  { number: "PROVA", label: "SU RICHIESTA" },
  { number: "INFO", label: "E ISCRIZIONI" },
]

export const courseCategories: CourseCategory[] = [
  {
    label: "Dancesport Studio",
    courses: [
      {
        title: "Ballo di Coppia",
        age: "Tutti i livelli",
        description: "Percorsi dedicati alla tecnica, alla sintonia di coppia e al piacere di ballare insieme.",
        image: "/sunriseforever-bounce-5277075.jpg",
        Icon: Flame,
      },
      {
        title: "Danze Standard",
        age: "Tutti i livelli",
        description: "Studio del movimento, della postura e dell'eleganza nelle danze sportive di tradizione.",
        image: "/newgeneration/pilates.jpg",
        Icon: Wind,
      },
      {
        title: "Danze Latino Americane",
        age: "Tutti i livelli",
        description: "Lezioni dinamiche per ritmo, coordinazione, tecnica e interpretazione.",
        image: "/karenbond-ballet-1409894.jpg",
        Icon: Star,
      },
    ],
  },
]

export const featuredGalleryPhotos: { src: string; alt: string }[] = [
  { src: "/dancesport/nostrimomenti.jpg", alt: "A.S.D. Dancesport Studio momento 1" },
  { src: "/dancesport/nostrimomenti2.jpg", alt: "A.S.D. Dancesport Studio momento 2" },
  { src: "/dancesport/nostrimomenti3.jpg", alt: "A.S.D. Dancesport Studio momento 3" },
]

export const allGalleryPhotos = [
  "/group_outside_.jpg", "/inside_school_children_lesson.jpg", "/male_female_duo.jpg",
  "/outside_event_students.jpg", "/solo_female_air_dance.jpg", "/student_green_dress.jpg",
  "/air_dance_student.jpg", "/collage_children_group.jpg", "/group_male_female_stuends_stage.jpg",
  "/IMG_8356.JPG.webp", "/IMG_8357.JPG.webp", "/IMG_8359.JPG.webp", "/IMG_8360.JPG.webp",
  "/IMG_8363.JPG.webp", "/IMG_8364.JPG.webp", "/IMG_8367.JPG.webp", "/IMG_8368.JPG.webp",
  "/IMG_8369.JPG.webp", "/IMG_8370.JPG.webp", "/IMG_8371.JPG.webp", "/IMG_8373.JPG.webp",
  "/IMG_8377.JPG.webp", "/IMG_8378.JPG.webp", "/IMG_8379.JPG.webp", "/IMG_8380.JPG.webp",
  "/IMG_8382.JPG.webp", "/IMG_8383.JPG.webp", "/IMG_8385.JPG.webp", "/IMG_8387.JPG.webp",
  "/IMG_8390.JPG.webp", "/IMG_8396.JPG.webp", "/IMG_8402.JPG.webp", "/IMG_8413.webp",
  "/additional/saggio-ateneo-agropoli-1.webp", "/additional/saggio-ateneo-agropoli-2.webp",
  "/additional/performance-ateneo-agropoli.webp", "/additional/spettacolo-fine-anno-ateneo-1.webp",
  "/additional/spettacolo-fine-anno-ateneo-3.webp", "/additional/spettacolo-fine-anno-ateneo.webp",
  "/additional/danza-femminile-sedia-agropoli.webp", "/additional/female-perform-sitting-chair.webp",
  "/additional/female-solo.webp", "/additional/females-group-perform.webp",
  "/additional/females-perform-stage.webp", "/additional/females-performs3.webp",
  "/additional/group-performance-4.webp", "/additional/group-performance-all-black.webp",
  "/additional/groupd-perform-1.webp", "/additional/kid-perform-solo.webp",
  "/additional/kid-solo-performance.webp", "/additional/kids-group-performance.webp",
  "/additional/kids-performance.webp", "/additional/kids-performance1.webp",
  "/additional/m-f-performa1.webp", "/additional/male-dancer.webp",
  "/additional/male-fdemale-performance4.webp", "/additional/male-female-ballet-1.webp",
  "/additional/coppia-balletto-ateneo-agropoli.webp",
  "/additional/coppia-balletto-ateneo-agropoli-3.webp",
  "/additional/duo-danza-ateneo-agropoli.webp", "/additional/gruppo-misto-performance-ateneo.webp",
  "/additional/coppia-performance-ateneo-cilento.webp",
  "/additional/coppia-danza-moderna-agropoli.webp",
  "/additional/coppia-danza-moderna-agropoli-1.webp",
  "/additional/coppia-danza-moderna-agropoli-2.webp",
  "/additional/coppia-danza-moderna-agropoli-4.webp",
  "/additional/coppia-performance-palcoscenico-1.webp",
  "/additional/coppia-performance-palcoscenico-2.webp",
  "/additional/coppia-performance-palcoscenico-3.webp",
  "/additional/coppia-danza-ateneo.webp", "/additional/gruppo-misto-danza-ateneo-3.webp",
  "/additional/danzatore-performance-agropoli-2.webp",
  "/additional/danzatore-solo-ateneo-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli-1.webp",
  "/additional/duo-misto-performance-ateneo.webp",
  "/additional/uomo-danza-performance-agropoli.webp",
  "/additional/performance-danza-ateneo-agropoli.webp",
  "/additional/due-ragazze-palcoscenico-ateneo.webp",
  "/additional/donna-danza-performance-agropoli-3.webp",
  "/additional/donna-danza-rosso-ateneo-agropoli.webp",
  "/additional/donne-performance-ateneo-agropoli-2.webp",
]

export const salaArmoniaSchedule: ScheduleDay[] = []

export const salaRitmoSchedule = salaArmoniaSchedule

export const scheduleBookingServices = []

export const scheduleContactInfo = {
  address: "Corso Italia, 40, 84098 Pontecagnano Faiano SA, Italy",
  phone: "+39 344 298 9263",
}

export const pricingCards = [
  { Icon: Ticket, title: "Lezione Singola", description: "Ideale per provare un corso prima di iscriverti. Nessun impegno, massima flessibilità." },
  { Icon: Calendar, title: "Abbonamento Mensile", description: "Una formula pratica per allenarsi con continuità durante il mese." },
  { Icon: CalendarRange, title: "Abbonamento Semestrale", description: "Una soluzione dedicata a chi vuole dare stabilità al proprio percorso." },
  { Icon: Crown, title: "Abbonamento Annuale", description: "La scelta per chi desidera continuità e crescita durante tutta la stagione." },
]

export const pricingHighlights = [
  { Icon: Tag, title: "Informazioni Personalizzate", description: "Contattaci per conoscere corsi disponibili, modalità di iscrizione e lezioni di prova." },
  { Icon: Users, title: "Percorsi per Tutti", description: "La scuola propone attività per bambini, ragazzi e adulti con diversi livelli di esperienza." },
]
