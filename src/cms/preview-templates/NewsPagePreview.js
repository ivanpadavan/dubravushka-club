import React from 'react'
import PropTypes from 'prop-types'
import { NewsPageTemplate } from '../../templates/news-page'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <NewsPageTemplate
    slide={entry.getIn(['data', 'slide']).toJS()}
    content={widgetFor('body')}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
