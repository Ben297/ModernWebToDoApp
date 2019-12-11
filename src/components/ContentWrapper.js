import React from 'react'
import PropTypes from 'prop-types'

import RenderTodoList from '../containers/RenderTodoList'

const ContentWrapper = ({ todosCount, completedCount, actions }) =>
  (
      <div className="sixteen wide column">
            <RenderTodoList />
      </div>
  )

ContentWrapper.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

export default ContentWrapper;