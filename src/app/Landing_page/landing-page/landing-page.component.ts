import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  // Modo oscuro
  isDarkMode = false;

  // Idioma seleccionado
  selectedLanguage: 'es' | 'en' = 'es';

  // Textos dinámicos de la página
  mainTitle: string = '';
  mainSubtitle: string = '';
  mainDescription: string = '';
  createAccount: string = '';
  forYou: string = '';
  resources: string = '';
  helpCenter: string = '';
  login: string = '';
  inputPlaceholder: string = '';
  servicesTitle: string = '';
  servicesSubtitle: string = '';
  paymentTitle: string = '';
  paymentSubtitle: string = '';
  stepsImageAlt: string = '';
  servicesImageAlt: string = '';
  whyUPayTitle: string = '';
  whyUPaySubtitle: string = '';
  whyUPayDescription: string = '';
  featureFreeTitle: string = '';
  featureFreeDescription: string = '';
  featureSafeTitle: string = '';
  featureSafeDescription: string = '';
  featureFastTitle: string = '';
  featureFastDescription: string = '';
  featureOnlineTitle: string = '';
  featureOnlineDescription: string = '';
  ourTeamTitle: string = '';
  faqTitle: string = '';
  faqSubtitle: string = '';
  faqDescription: string = '';
  faqButton: string = '';
  footerText: string = '';
  member1Alt: string = '';
  member1Name: string = '';
  member1Role: string = '';
  member2Alt: string = '';
  member2Name: string = '';
  member2Role: string = '';
  member3Alt: string = '';
  member3Name: string = '';
  member3Role: string = '';
  faq1Question: string = '';
  faq2Question: string = '';
  faq3Question: string = '';
  faqHighlight: string = '';

  // Traducciones
  translations = {
    es: {
      mainTitle: 'Utility Pay',
      mainSubtitle: '¿Qué pagamos hoy?',
      mainDescription: 'UPay es una plataforma innovadora que te permite realizar el pago de tus servicios desde la comodidad de tu hogar. Con una interfaz intuitiva y fácil de usar, puedes gestionar todos tus pagos de manera rápida, segura y sin comisiones adicionales.',
      createAccount: 'Crear cuenta',
      forYou: 'Para ti',
      resources: 'Recursos',
      helpCenter: 'Centro de ayuda',
      login: 'Ingresar',
      inputPlaceholder: 'Ingresa tu consulta...',
      servicesTitle: '¿Qué servicios puedo pagar a través de UPay?',
      servicesSubtitle: 'Puedes pagar tus servicios de luz, teléfono, cable y mucho más sin tener que salir de casa.',
      paymentTitle: 'Ahora paga tus servicios desde casa',
      paymentSubtitle: '¡con tu UPay!',
      stepsImageAlt: 'Pasos para pagar servicios',
      servicesImageAlt: 'Imagen de servicios',
      whyUPayTitle: '¿Por qué pagar mis servicios con UPay?',
      whyUPaySubtitle: 'UPay?',
      whyUPayDescription: 'Paga tus servicios de luz, teléfono, cable y mucho más a través de la página, desde cualquier lugar y 100% en línea. ¡Es totalmente gratis y seguro!',
      featureFreeTitle: 'Gratis y Seguro',
      featureFreeDescription: 'Paga tus servicios sin comisiones adicionales y de manera segura.',
      featureSafeTitle: 'Seguro y Confiable',
      featureSafeDescription: 'Tu información está protegida con las mejores medidas de seguridad.',
      featureFastTitle: 'Rápido y Fácil',
      featureFastDescription: 'Realiza tus pagos en cuestión de minutos, sin complicaciones.',
      featureOnlineTitle: '100% en Línea',
      featureOnlineDescription: 'Realiza todas tus gestiones sin salir de casa.',
      ourTeamTitle: 'Nuestro Equipo',
      faqTitle: 'Preguntas',
      faqSubtitle: 'frecuentes',
      faqDescription: 'Encuentra las respuestas a tus preguntas aquí:',
      faqButton: 'Ir al centro de ayuda',
      footerText: 'Utility Pay. Todos los derechos reservados.',
      member1Alt: 'Foto de miembro del equipo 1',
      member1Name: 'Diego avedaño',
      member1Role: 'Desarrollador',
      member2Alt: 'Foto de miembro del equipo 2',
      member2Name: 'Alely Quispe',
      member2Role: 'Desarrollador',
      member3Alt: 'Foto de miembro del equipo 3',
      member3Name: 'Wilmer Palomino',
      member3Role: 'Desarrollador',
      faq1Question: '¿Cómo puedo registrarme?',
      faq2Question: '¿Qué servicios puedo pagar?',
      faq3Question: '¿Es seguro utilizar UPay?',
    },
    en: {
      mainTitle: 'UPay',
      mainSubtitle: 'What are we paying today?',
      mainDescription: 'UPay is an innovative platform that allows you to pay your services from the comfort of your home. With an intuitive and easy-to-use interface, you can manage all your payments quickly, securely, and without additional fees.',
      createAccount: 'Create Account',
      forYou: 'For You',
      resources: 'Resources',
      helpCenter: 'Help Center',
      login: 'Login',
      inputPlaceholder: 'Enter your query...',
      servicesTitle: 'What services can I pay through UPay?',
      servicesSubtitle: 'You can pay for your electricity, phone, cable services, and much more without leaving home.',
      paymentTitle: 'Now pay your bills from home',
      paymentSubtitle: 'with your UPay!',
      stepsImageAlt: 'Steps to pay services',
      servicesImageAlt: 'Services image',
      whyUPayTitle: 'Why pay my bills with',
      whyUPaySubtitle: 'UPay?',
      whyUPayDescription: 'Pay your electricity, phone, cable, and more services through the page, from anywhere and 100% online. It is totally free and secure!',
      featureFreeTitle: 'Free and Secure',
      featureFreeDescription: 'Pay your bills with no extra fees and securely.',
      featureSafeTitle: 'Safe and Reliable',
      featureSafeDescription: 'Your information is protected with the best security measures.',
      featureFastTitle: 'Fast and Easy',
      featureFastDescription: 'Make your payments in minutes without hassle.',
      featureOnlineTitle: '100% Online',
      featureOnlineDescription: 'Manage everything without leaving your home.',
      ourTeamTitle: 'Our Team',
      faqTitle: 'Frequently',
      faqSubtitle: 'Asked Questions',
      faqDescription: 'Find the answers to your questions here:',
      faqButton: 'Go to Help Center',
      footerText: 'Utility Pay. All rights reserved.',
      member1Alt: 'Photo of team member 1',
      member1Name: 'Diego Avendaño',
      member1Role: 'Developer',
      member2Alt: 'Photo of team member 2',
      member2Name: 'Alely Quispe',
      member2Role: 'Developer',
      member3Alt: 'Photo of team member 3',
      member3Name: 'Wilmer palomino',
      member3Role: 'Developer',
      faq1Question: 'How can I register?',
      faq2Question: 'What services can I pay?',
      faq3Question: 'Is it safe to use UPay?',
    },
  };

  ngOnInit(): void {
    // Leer las preferencias desde el localStorage
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.updateTheme();

    const savedLanguage = localStorage.getItem('language') as 'es' | 'en';
    if (savedLanguage) {
      this.selectedLanguage = savedLanguage;
    }
    this.updateLanguage();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.updateTheme();
  }

  updateTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  onLanguageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const language = target.value as 'es' | 'en';
    this.selectedLanguage = language;

    localStorage.setItem('language', language);
    this.updateLanguage();
  }

  updateLanguage() {
    const translation = this.translations[this.selectedLanguage];
    this.mainTitle = translation.mainTitle;
    this.mainSubtitle = translation.mainSubtitle;
    this.mainDescription = translation.mainDescription;
    this.createAccount = translation.createAccount;
    this.forYou = translation.forYou;
    this.resources = translation.resources;
    this.helpCenter = translation.helpCenter;
    this.login = translation.login;
    this.inputPlaceholder = translation.inputPlaceholder;
    this.servicesTitle = translation.servicesTitle;
    this.servicesSubtitle = translation.servicesSubtitle;
    this.paymentTitle = translation.paymentTitle;
    this.paymentSubtitle = translation.paymentSubtitle;
    this.stepsImageAlt = translation.stepsImageAlt;
    this.servicesImageAlt = translation.servicesImageAlt;
    this.whyUPayTitle = translation.whyUPayTitle;
    this.whyUPaySubtitle = translation.whyUPaySubtitle;
    this.whyUPayDescription = translation.whyUPayDescription;
    this.featureFreeTitle = translation.featureFreeTitle;
    this.featureFreeDescription = translation.featureFreeDescription;
    this.featureSafeTitle = translation.featureSafeTitle;
    this.featureSafeDescription = translation.featureSafeDescription;
    this.featureFastTitle = translation.featureFastTitle;
    this.featureFastDescription = translation.featureFastDescription;
    this.featureOnlineTitle = translation.featureOnlineTitle;
    this.featureOnlineDescription = translation.featureOnlineDescription;
    this.ourTeamTitle = translation.ourTeamTitle;
    this.faqTitle = translation.faqTitle;
    this.faqSubtitle = translation.faqSubtitle;
    this.faqDescription = translation.faqDescription;
    this.faqButton = translation.faqButton;
    this.footerText = translation.footerText;
    this.member1Alt = translation.member1Alt;
    this.member1Name = translation.member1Name;
    this.member1Role = translation.member1Role;
    this.member2Alt = translation.member2Alt;
    this.member2Name = translation.member2Name;
    this.member2Role = translation.member2Role;
    this.member3Alt = translation.member3Alt;
    this.member3Name = translation.member3Name;
    this.member3Role = translation.member3Role;
    this.faq1Question = translation.faq1Question;
    this.faq2Question = translation.faq2Question;
    this.faq3Question = translation.faq3Question;
  }
}
