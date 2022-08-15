import React, {FC, ReactNode, useState, useEffect} from 'react'
import ReactDom from 'react-dom'

type PortalProps = {
  children: ReactNode
  id: string
}

const Portal: FC<PortalProps> = ({id, children}) => {
  const [hasMounted, setHasMounted] = useState(false)

  const portalElement = document.getElementById(id) as HTMLElement
  if (!portalElement) {
    throw new Error(`The id #${id} wasn't found`)
  }

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted ? ReactDom.createPortal(children, portalElement) : null
}

export default Portal
