"use client";

import { createContext, useContext, useState } from "react";

const translations = {
  es: {
    header: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      whyUs: "Por Qué Nosotros",
      pricing: "Planes",
      contact: "Contacto",
      cta: "Comenzar",
    },
    hero: {
      tag: "Infraestructura cloud de nueva generación",
      title: "Potencia tu negocio con la nube",
      subtitle:
        "Soluciones cloud empresariales que impulsan la transformación digital de tu organización con seguridad, escalabilidad y rendimiento superior.",
      cta1: "Explorar Servicios",
      cta2: "Contactar Ventas",
      stat1Label: "Disponibilidad",
      stat1Value: "99.99%",
      stat2Label: "Clientes activos",
      stat2Value: "2,500+",
      stat3Label: "Centros de datos",
      stat3Value: "12",
    },
    services: {
      tag: "Nuestros servicios",
      title: "Soluciones cloud integrales",
      subtitle:
        "Ofrecemos un portafolio completo de servicios en la nube, diseñado para adaptarse a las necesidades de tu empresa.",
      iaas: { title: "Infraestructura como Servicio", desc: "..." },
      paas: { title: "Plataforma como Servicio", desc: "..." },
      saas: { title: "Software como Servicio", desc: "..." },
      security: { title: "Ciberseguridad Cloud", desc: "..." },
      migration: { title: "Migración a la Nube", desc: "..." },
      consulting: { title: "Consultoría Cloud", desc: "..." },
    },
    footer: {
      desc: "Soluciones cloud empresariales que impulsan la transformación digital de organizaciones en todo el mundo.",
      services: "Servicios",
      company: "Empresa",
      legal: "Legal",
      aboutLink: "Acerca de",
      careersLink: "Carreras",
      blogLink: "Blog",
      partnersLink: "Partners",
      privacyLink: "Privacidad",
      termsLink: "Términos",
      cookiesLink: "Cookies",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    header: {
      home: "Home",
      services: "Services",
      about: "About",
      whyUs: "Why Us",
      pricing: "Pricing",
      contact: "Contact",
      cta: "Get Started",
    },
    hero: {
      tag: "Next-generation cloud infrastructure",
      title: "Power your business with the cloud",
      subtitle:
        "Enterprise cloud solutions that drive the digital transformation of your organization with security, scalability, and superior performance.",
      cta1: "Explore Services",
      cta2: "Contact Sales",
      stat1Label: "Uptime",
      stat1Value: "99.99%",
      stat2Label: "Active clients",
      stat2Value: "2,500+",
      stat3Label: "Data centers",
      stat3Value: "12",
    },
    services: {
      tag: "Our services",
      title: "Comprehensive cloud solutions",
      subtitle:
        "We offer a complete portfolio of cloud services, designed to adapt to your company's needs.",
      iaas: { title: "Infrastructure as a Service", desc: "..." },
      paas: { title: "Platform as a Service", desc: "..." },
      saas: { title: "Software as a Service", desc: "..." },
      security: { title: "Cloud Cybersecurity", desc: "..." },
      migration: { title: "Cloud Migration", desc: "..." },
      consulting: { title: "Cloud Consulting", desc: "..." },
    },
    footer: {
      desc: "Enterprise cloud solutions that drive digital transformation of organizations worldwide.",
      services: "Services",
      company: "Company",
      legal: "Legal",
      aboutLink: "About",
      careersLink: "Careers",
      blogLink: "Blog",
      partnersLink: "Partners",
      privacyLink: "Privacy",
      termsLink: "Terms",
      cookiesLink: "Cookies",
      rights: "All rights reserved.",
    },
  },
  pt: {
    header: {
      home: "Início",
      services: "Serviços",
      about: "Sobre Nós",
      whyUs: "Por Que Nós",
      pricing: "Planos",
      contact: "Contato",
      cta: "Começar",
    },
    hero: {
      tag: "Infraestrutura cloud de nova geração",
      title: "Potencialize seu negócio com a nuvem",
      subtitle:
        "Soluções cloud empresariais que impulsionam a transformação digital da sua organização com segurança, escalabilidade e desempenho superior.",
      cta1: "Explorar Serviços",
      cta2: "Contatar Vendas",
      stat1Label: "Disponibilidade",
      stat1Value: "99.99%",
      stat2Label: "Clientes ativos",
      stat2Value: "2.500+",
      stat3Label: "Data centers",
      stat3Value: "12",
    },
    services: {
      tag: "Nossos serviços",
      title: "Soluções cloud integrais",
      subtitle:
        "Oferecemos um portfólio completo de serviços em nuvem, projetados para se adaptar às necessidades da sua empresa.",
      iaas: { title: "Infraestrutura como Serviço", desc: "..." },
      paas: { title: "Plataforma como Serviço", desc: "..." },
      saas: { title: "Software como Serviço", desc: "..." },
      security: { title: "Cibersegurança Cloud", desc: "..." },
      migration: { title: "Migração para a Nuvem", desc: "..." },
      consulting: { title: "Consultoria Cloud", desc: "..." },
    },
    footer: {
      desc: "Soluções cloud empresariais que impulsionam a transformação digital de organizações em todo o mundo.",
      services: "Serviços",
      company: "Empresa",
      legal: "Legal",
      aboutLink: "Sobre",
      careersLink: "Carreiras",
      blogLink: "Blog",
      partnersLink: "Parceiros",
      privacyLink: "Privacidade",
      termsLink: "Termos",
      cookiesLink: "Cookies",
      rights: "Todos os direitos reservados.",
    },
  },
};

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState("es");

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
