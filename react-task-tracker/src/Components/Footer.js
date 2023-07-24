import React from 'react';

export const Footer = () => {
  let footerStyle={
    position: "relative",
    top: "20vh",
    width: "100%"

  }
  return (
    <footer className="bg-dark text-white text-center py-3" style = {footerStyle}>
      <div className="container">
        <p>Copyright &copy; Nashit Budhwani 2023.</p>
      </div>
    </footer>
  );
};
