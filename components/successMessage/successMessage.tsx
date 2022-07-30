import Link from '../../node_modules/next/link'
import {FC} from 'react'

type SuccessMessageProps = {
  SuccessMessage: string
  href: string
  buttonMessage?: string
  children?: JSX.Element | string
}

const SuccessMessage: FC<SuccessMessageProps> = ({
  SuccessMessage,
  href,
  buttonMessage,
  children,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-3">{SuccessMessage}</h1>

      {buttonMessage && (
        <Link href={href}>
          <a className="w-56 flex justify-center cursor-pointer text-2xl text-orange-500 hover:text-slate-100 hover:bg-orange-500  p-2 px-3 rounded-md  focus:text-slate-100 focus:bg-orange-400 transition duration-300 focus:outline-none hover:shadow-orange-400 hover:shadow-lg ">
            {buttonMessage}
          </a>
        </Link>
      )}
      {children}
    </div>
  )
}

export default SuccessMessage
