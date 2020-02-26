import PropTypes from "prop-types"
import React from "react"
import './styles.scss';

const ProjectBlock = ({blockTitle, blockText, blockVarient}) => (
    <div className= {blockVarient} >
      <br></br>
      <h1 className= 'title-text'>{blockTitle}</h1>
      <p className= 'main-text'> {blockText}</p>
    </div>
)

ProjectBlock.propTypes = {
}

ProjectBlock.defaultProps = {

}

export default ProjectBlock
