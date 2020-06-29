var App = (function(global) {
  const document = global.document

  const DEFAULTS = {
    carbExchangeRate: 5,
    lowerBound: 150,
    upperBound: 300,
    scaling: 25,
  }

  const carbExchangeRateInput = document.querySelector(
    "input[name=carb-exchange-rate]"
  )
  const lowerBoundInput = document.querySelector("input[name=lower-bound]")
  const upperBoundInput = document.querySelector("input[name=upper-bound]")
  const scalingInput = document.querySelector("input[name=scaling]")
  const carbsInput = document.querySelector("input[name=carbs]")
  const glucoseInput = document.querySelector("input[name=glucose]")
  const calcButton = document.getElementById("calc-button")
  const insulinDoseResults = document.getElementById("insulin-dose")

  function calculate() {
    const carbExchange = parseInt(carbExchangeRateInput.value)
    const lowerBound = parseInt(lowerBoundInput.value)
    const upperBound = parseInt(upperBoundInput.value)
    const scaling = parseInt(scalingInput.value)
    const carbs = parseInt(carbsInput.value)
    const glucose = parseInt(glucoseInput.value)
    const dosage =
      calculateBase(carbs, carbExchange) +
      calculateAdditional(glucose, lowerBound, upperBound, scaling)
    insulinDoseResults.innerText = dosage
  }

  function calculateBase(carbs, rate) {
    if (isNaN(carbs) || carbs < 1) {
      return 0
    }

    return carbs / rate
  }

  function calculateAdditional(glucose, lower, upper, scale) {
    if (isNaN(glucose) || glucose < 1 || glucose < lower) {
      return 0
    }

    if (glucose > upper) {
      glucose = upper
    }

    return (glucose - lower) / scale
  }

  function init() {
    carbExchangeRateInput.value = DEFAULTS.carbExchangeRate
    lowerBoundInput.value = DEFAULTS.lowerBound
    upperBoundInput.value = DEFAULTS.upperBound
    scalingInput.value = DEFAULTS.scaling
    calcButton.addEventListener("click", calculate)
    return true
  }

  return {
    init,
  }
})(window)
