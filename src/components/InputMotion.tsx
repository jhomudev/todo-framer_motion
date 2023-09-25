import { FunctionComponent, InputHTMLAttributes } from 'react'

const InputMotion:FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = ({ className, type, placeholder, value, onChange, autoFocus }) => {
  return (
    <input autoFocus={autoFocus} className={`border-[1px] indent-3 focus:outline-mygray text-sm border-mygray rounded-md py-2 break-before-all  ${className}`} type={type} placeholder={placeholder} onChange={onChange} value={value} />
  )
}
export default InputMotion
