export const normalizeDataForPoster = (
  data: any,
  {sliceFrom = 0, sliceTo = 1},
) => {
  const normalizeData = data.hits
    .slice(sliceFrom, sliceTo)
    .map(({recipe}: any) => {
      const image = recipe.images.REGULAR.url
      const label = recipe.label
      const price = Math.round(
        recipe.calories / 10 > 1 ? recipe.calories / 10 : 0,
      )
      return {image, label, price}
    })

  return normalizeData
}
