import React, {FC, ReactComponentElement} from 'react'

type MapComponentProps = {
  Component: any
  data: any[]
}

const MapComponent: FC<MapComponentProps> = ({Component, data}) => {
  return (
    <>
      {data.map((item: any) => (
        <Component
          label={item.label}
          image={item.image}
          key={`${item.label}`}
        />
      ))}
    </>
  )
}

export default MapComponent
