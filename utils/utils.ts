export const normalizeDataForPoster = (
  data: any,
  {sliceFrom = 0, sliceTo = 1},
) => {
  const normalizeData = data.hits
    .slice(sliceFrom, sliceTo)
    .map(({recipe}: any) => {
      const image = recipe.images.REGULAR.url
      const label = recipe.label
      return {image, label}
    })

  return normalizeData
}
