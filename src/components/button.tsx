import { ButtonHTMLAttributes } from 'react' 
import '../styles/button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  // var let = let it change
  //let counter = 0;
  return(
    <button className="button" {...props} />
  )
}
 