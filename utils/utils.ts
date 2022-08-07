export const normalizeDataForPoster = (
  data: any,
  {sliceFrom = 0, sliceTo = 1},
) => {
  const normalizeData = data.hits.slice(sliceFrom, sliceTo).map((item: any) => {
    const image = item.recipe.images.REGULAR
    const label = item.recipe.label
    return {image, label}
  })

  return normalizeData
}
