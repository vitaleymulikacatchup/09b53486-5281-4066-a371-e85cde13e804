"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardThree from '@/components/sections/metric/MetricCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { CreditCard, Facebook, Heart, Instagram, Quote, Settings, Shield, Smile, Sparkles, Star, Stethoscope, TrendingUp, Twitter, UserCheck, Users, Zap } from 'lucide-react';

export default function DentalClinicPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="default"
      sizing="default"
      background="default"
      cardStyle="default"
      primaryButtonStyle="default"
      secondaryButtonStyle="default"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Services", id: "features" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SmileCare Dental"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Your Smile, Our Priority"
          description="Comprehensive dental care with advanced technology and compassionate service for the whole family"
          tag="Quality Dental Care"
          tagIcon={Heart}
          buttons={[
            { text: "Book Appointment", href: "contact" },
            { text: "Our Services", href: "features" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652589574-44cpg2fa.jpg",
              imageAlt: "Modern dental clinic interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652591197-wqll2q9u.jpg",
              imageAlt: "Professional dental cleaning"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652592560-tqp9petl.jpg",
              imageAlt: "Dental implant procedure"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652594034-11dooqk1.jpg",
              imageAlt: "Orthodontic treatment with braces"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652595430-5lymejbu.jpg",
              imageAlt: "Cosmetic dentistry results"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About Us"
          description="At SmileCare Dental, we combine state-of-the-art technology with personalized care to deliver exceptional dental experiences. Our team of experienced professionals is committed to helping you achieve optimal oral health and the confident smile you deserve."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFive
          title="Our Dental Services"
          description="Comprehensive dental care tailored to your individual needs"
          tag="Services"
          tagIcon={Stethoscope}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            { title: "General Dentistry", icon: Shield },
            { title: "Cosmetic Dentistry", icon: Sparkles },
            { title: "Orthodontics", icon: Smile },
            { title: "Oral Surgery", icon: Zap }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Dental Solutions"
          description="Advanced dental equipment and treatments for optimal care"
          tag="Equipment"
          tagIcon={Settings}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "SmileCare Pro",
              name: "Digital Imaging System",
              price: "Advanced Diagnostics",
              rating: 5,
              reviewCount: "500+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652596655-a1d53jy1.jpg",
              imageAlt: "Digital dental imaging system"
            },
            {
              id: "2",
              brand: "ComfortPlus",
              name: "Premium Dental Chair",
              price: "Patient Comfort",
              rating: 5,
              reviewCount: "300+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652597545-c5mdiyp9.jpg",
              imageAlt: "Premium dental treatment chair"
            },
            {
              id: "3",
              brand: "DiagnosticMax",
              name: "3D X-Ray Scanner",
              price: "Precision Imaging",
              rating: 5,
              reviewCount: "250+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652598870-c8lhorht.jpg",
              imageAlt: "3D dental x-ray scanner"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Treatment Plans"
          description="Flexible pricing options for all your dental care needs"
          tag="Pricing"
          tagIcon={CreditCard}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Essential Care",
              badgeIcon: Shield,
              price: "$150",
              subtitle: "Basic dental checkup and cleaning",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "features" }
              ],
              features: [
                "Comprehensive examination",
                "Professional cleaning",
                "Oral health consultation",
                "X-rays if needed"
              ]
            },
            {
              id: "advanced",
              badge: "Popular Choice",
              badgeIcon: Sparkles,
              price: "$350",
              subtitle: "Complete dental care package",
              buttons: [
                { text: "Book Now", href: "contact" },
                { text: "Learn More", href: "features" }
              ],
              features: [
                "Everything in Essential",
                "Fluoride treatment",
                "Oral cancer screening",
                "Personalized care plan",
                "Follow-up consultation"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Patient Satisfaction"
          description="Results that speak for themselves"
          tag="Statistics"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "1", icon: Users, title: "Happy Patients", value: "5,000+" },
            { id: "2", icon: Star, title: "Satisfaction Rate", value: "98%" },
            { id: "3", icon: Shield, title: "Years Experience", value: "15+" },
            { id: "4", icon: Heart, title: "Successful Treatments", value: "10,000+" }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Experienced professionals dedicated to your oral health"
          tag="Our Doctors"
          tagIcon={UserCheck}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Dr. Sarah Johnson",
              role: "Lead Dentist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652600162-w53ny4ux.jpg",
              imageAlt: "Dr. Sarah Johnson, Lead Dentist"
            },
            {
              id: "2",
              name: "Dr. Michael Chen",
              role: "Orthodontist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652601156-fx8ua4po.jpg",
              imageAlt: "Dr. Michael Chen, Orthodontist"
            },
            {
              id: "3",
              name: "Dr. Emily Davis",
              role: "Dental Hygienist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652602559-c1u9b1z1.jpg",
              imageAlt: "Dr. Emily Davis, Dental Hygienist"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Patients Say"
          description="Real experiences from our valued patients"
          tag="Patient Reviews"
          tagIcon={Quote}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Miller",
              role: "Patient",
              company: "Marketing Director",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652603909-yu8iinkp.jpg",
              imageAlt: "Jennifer Miller patient testimonial"
            },
            {
              id: "2",
              name: "Robert Anderson",
              role: "Patient",
              company: "Business Owner",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652605111-qc1qlx1p.jpg",
              imageAlt: "Robert Anderson patient testimonial"
            },
            {
              id: "3",
              name: "Lisa Thompson",
              role: "Patient",
              company: "Teacher",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652606388-scoxogj4.jpg",
              imageAlt: "Lisa Thompson patient testimonial"
            },
            {
              id: "4",
              name: "William Brown",
              role: "Patient",
              company: "Retired",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652607283-su4kt5jd.jpg",
              imageAlt: "William Brown patient testimonial"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted Partners"
          description="Working with leading healthcare organizations and insurance providers"
          tag="Partners"
          tagIcon={Users}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652608233-ml49higb.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652609468-wu11b4bv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652610413-bf2zpls0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652611696-8nni20xg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652612967-zj059osr.jpg"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Schedule Your Appointment"
          description="Get in touch with us to book your consultation or ask any questions about our services"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your dental needs or preferred appointment time...",
            rows: 4,
            required: true
          }}
          buttonText="Book Appointment"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763652616019-wf56qz35.jpg"
          imageAlt="SmileCare Dental office reception area"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="SmileCare Dental"
          copyrightText="© 2025 SmileCare Dental. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "General Dentistry", href: "features" },
                { label: "Cosmetic Dentistry", href: "features" },
                { label: "Orthodontics", href: "features" },
                { label: "Oral Surgery", href: "features" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Team", href: "team" },
                { label: "Patient Reviews", href: "testimonials" },
                { label: "Contact Us", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Appointment Booking", href: "contact" },
                { label: "Insurance Information", href: "contact" },
                { label: "Oral Health Tips", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}