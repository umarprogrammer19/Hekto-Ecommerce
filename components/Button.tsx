 import React from 'react'

//  type Prop = {
//   text: string;
//   size: string;
//   variant: string;
// };


// function Button({text}:Prop) {
//   return (
//     <>
//         <button className='rounded w-[163px] h-[50px] bg-[#FB2E86] text-white'>
//             {text}
//         </button>
//     </>
//   )
// }

// export default Button

type Prop = {
  text?: string; // Optional, agar sirf children ka use ho.
  size?: string; // Optional size prop
  variant?: string; // Optional variant prop
  children?: React.ReactNode; // For children prop
};

function Button({ text, children }: Prop) {
  return (
    <button
      className={`rounded w-[163px] h-[50px] bg-[#FB2E86] text-white`}
    >
      {text || children}
    </button>
  );
}

export default Button;
