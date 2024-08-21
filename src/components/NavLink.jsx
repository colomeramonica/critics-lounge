/* eslint-disable react/prop-types */
import React from 'react';

export default function NavLink({ href, iconPath }) {
  return (
    <a href={href}>
      <svg fill="none" height={36} viewBox="0 0 32 32" width={36}>
        <path d={iconPath} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}