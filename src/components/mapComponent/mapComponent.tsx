import React, {FC} from 'react'

type MapComponentProps = {
  Component: FC<any>
  data: any[]
}

const MapComponent: FC<MapComponentProps> = ({Component, data}) => {
  //*every element at currently api(Edamam) is without id so I'm going to make new key =))
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
