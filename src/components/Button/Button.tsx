// import { ReactNode, FC, MouseEventHandler, ButtonHTMLAttributes } from "react";

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   onClick?: MouseEventHandler<HTMLButtonElement>;
//   children: ReactNode;
// }

// const Button: FC<ButtonProps> = ({
//   onClick,
//   type,
//   children,
//   className,
//   ...props
// }) => {
//   const defaultStyles = "py-2 px-4 bg-blue-500 text-white rounded-md";

//   return (
//     <button
//       onClick={onClick}
//       type={type || "button"}
//       className={`${defaultStyles} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
