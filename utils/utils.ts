const calculatePriceAndOff = (number: number) =>
  Math.floor(number / 10 > 1 ? number / 10 : 0)

export const normalizeDataForPoster = (
  data: any,
  {sliceFrom = 0, sliceTo = 1},
) => {
  const normalizeData = data.hits
    .slice(sliceFrom, sliceTo)
    .map(({recipe}: any, idx: number) => {
      const image = recipe.images.REGULAR.url
      const label = recipe.label
      const off = idx % 5 === 0 ? 20 : 0
      const price =
        idx % 5 === 0
          ? Math.floor(
              calculatePriceAndOff(recipe.calories) -
                calculatePriceAndOff(recipe.calories) / off,
            )
          : calculatePriceAndOff(recipe.calories)

      return {image, label, price, off}
    })

  return normalizeData
}
