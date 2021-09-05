import { ButtonHTMLAttributes } from 'react' 
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  // var let = let it change
  //let counter = 0;
  return(
    <button className={`button ${isOutlined ? 'outlined' : ''}`} 
    {...props} 
    />
  )
}
 