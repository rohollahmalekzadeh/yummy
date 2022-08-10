import React, {FC} from 'react'

type MapComponentProps = {
  Component: FC
  data: any[]
}

const MapComponent: FC<MapComponentProps> = ({Component, data}) => {
  return (
    <>
      {data.map((item: any) => (
        <Component
          key={`${item.image} ${item?.label && item.label} ${
            item?.name && item.name
          }`}
          {...item}
        />
      ))}
    </>
  )
}

export default MapComponent
