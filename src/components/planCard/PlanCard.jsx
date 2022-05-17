import "./_planCard.scss"

import React from 'react'

const PlanCard = (props) => {
  return (
    <div className="plan-card" data-aos={props.dataAos}
      data-aos-easing="ease-in"
      data-aos-duration="500">
        {props.children}
    </div>
  )
}

export default PlanCard