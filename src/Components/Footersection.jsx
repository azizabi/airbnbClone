import React from 'react';

const FooterSection = ({ title, links }) => {
  return (
    <div className="space-y-4 text-xs text-gray-800">
      <h5 className="font-bold">{title}</h5>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="block"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default FooterSection;
