import React from 'react';

export default function Footer() {
  let year = new Date().getFullYear();
  console.log(year);
  return (
    <div className="footer">
      <p className="footer_para"> © KeepNote {year} </p>
    </div>
  );
}
