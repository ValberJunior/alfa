import "./_planCard.scss"

import React from 'react'

const PlanCard = ({children}) => {
  return (
    <div className="plan-card">
        {children}
    </div>
  )
}

export default PlanCard