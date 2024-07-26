import React from 'react';
import FooterSection from './Footersection';

const Footer = () => {
  const footerData = [
    {
      title: 'ABOUT',
      links: [
        { label: 'How Airbnb Works', href: '#' },
        { label: 'Newsroom', href: '#' },
        { label: 'Investors', href: '#' },
        { label: 'Airbnb Plus', href: '#' },
        { label: 'Airbnb Luxe', href: '#' },
      ],
    },
    {
      title: 'COMMUNITY',
      links: [
        { label: 'Accessibility', href: '#' },
        { label: 'This is not a real site', href: '#' },
        { label: "It's a pretty awesome clone", href: '#' },
        { label: 'Referrals accepted', href: '#' },
        { label: 'Papafam', href: '#' },
      ],
    },
    {
      title: 'HOST',
      links: [
        { label: 'Papa React', href: '#' },
        { label: 'Presents', href: '#' },
        { label: 'Zero to Full Stack Hero', href: '#' },
        { label: 'Hundreds of Students', href: '#' },
        { label: 'Join Now', href: '#' },
      ],
    },
    {
      title: 'SUPPORT',
      links: [
        { label: 'Help Centre', href: '#' },
        { label: 'Trust & Safety', href: '#' },
        { label: 'Say Hi YouTube', href: '#' },
        { label: 'Easter Eggs', href: '#' },
        { label: 'For the Win', href: '#' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      {footerData.map((section, index) => (
        <FooterSection key={index} title={section.title} links={section.links} />
      ))}
    </div>
  );
};

export default Footer;
