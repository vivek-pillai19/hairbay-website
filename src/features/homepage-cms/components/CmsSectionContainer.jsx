import React from 'react';

const CmsSectionContainer = ({ children, title }) => {
  return (
    <section className="cms-section-container">
      {title && <h3>{title}</h3>}
      {children}
    </section>
  );
};

export default CmsSectionContainer;
