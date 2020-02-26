import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      position: "fixed",
      top: "0",
      width: "100%",
      marginBottom: `1.45rem`,
      marginTop: '60px',
      paddingRight: '100px',
    }}
  >
    <div>
      <h1 style={{ float: 'right', margin: 0, }}>
        <ul>
          <Link
            to="/"
            style={{
              padding: '15px',
              fontFamily: 'Montserrat',
              color: `black`,
              textDecoration: `none`,
              fontSize: '18px',
            }}
          >
            {"Work"}
          </Link>
          <Link
            to="/"
            style={{
              padding: '15px',
              fontFamily: 'Montserrat',
              color: `black`,
              textDecoration: `none`,
              fontSize: '18px',
            }}
          >
            {siteTitle}
          </Link>
          <Link
            to="/"
            style={{
              padding: '15px',
              fontFamily: 'Montserrat',
              color: `black`,
              textDecoration: `none`,
              fontSize: '18px',
            }}
          >
            {"Contact"}
          </Link>

        </ul>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
