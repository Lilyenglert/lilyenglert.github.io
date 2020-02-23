import PropTypes from "prop-types"
import React from "react"

const ProjectBlock = ({blockTitle, blockText}) => (
    <div style={{
      background: `white`,
      marginTop: '35%',
      marginBottom: '35%',
      marginRight: '25%',
    }}>
      <br></br>
      <h1
      style={{
        fontFamily: 'Montserrat',
        }}>
        {blockTitle}</h1>
      <p style={{
        fontFamily: 'Montserrat',
        }}>
        {blockText}
      </p>
    </div>
)

ProjectBlock.propTypes = {
}

ProjectBlock.defaultProps = {

}

export default ProjectBlock
