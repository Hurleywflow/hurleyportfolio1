// import React, { useEffect } from 'react';

// export default function ComponentsMetaData({ type }) {
//   const title = `Animated ${type} for React and Tailwindcss`;
//   const content = `Access prebuilt ${type.toLocaleString()}`;
//   console.log(content);

//   const onBlur = () => {
//     document.title = `Come back! We have ${type}!`;
//   };

//   const onFocus = () => {
//     document.title = title;
//   };

//   useEffect(() => {
//     window.addEventListener('blur', onBlur);
//     window.addEventListener('focus', onFocus);

//     return () => {
//       window.removeEventListener('blur', onBlur);
//       window.removeEventListener('focus', onFocus);
//     };
//   }, []);
//   return <div>{content}</div>;
// }
