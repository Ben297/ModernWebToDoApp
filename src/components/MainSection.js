import React from 'react'
import PropTypes from 'prop-types'

import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({ todosCount, completedCount, actions }) =>
  (
      <div className="sixteen wide column">
            <VisibleTodoList />
    </div>
  )

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection;