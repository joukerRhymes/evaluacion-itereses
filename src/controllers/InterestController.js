class CalculateInterest {
  constructor () {
    this.renderQuantity = this.renderQuantity.bind(this)
  }

  getQuantity (capital, interest, age) {
    // Por cada capital interes y años vamos a calcular
    return capital * (interest / 100) * age
  }

  renderinterestForm (req, res) {
    res.render('interest-form')
  }

  renderQuantity (req, res) {
    const capital = req.body.capital
    const interest = req.body.interest
    const age = req.body.age

    res.render('calculate-interest', {
      capital,
      interest,
      age,
      total: this.getQuantity(capital, interest, age)
    })
  }
}

module.exports = CalculateInterest
