import './index.css'
import ConfigurationContent from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContent.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const classForFlexGrow =
        showContent === true &&
        showLeftNavbar === true &&
        showRightNavbar === true
          ? 'grow-one'
          : 'grow-zero'

      const showLeftNavbarView = () => (
        <div className={`left-navbar-container ${classForFlexGrow}`}>
          <h1 className="left-navbar-heading">Left Navbar Menu</h1>
          <ul className="left-navbar-ul-container">
            <li className="left-navbar-li">Item 1</li>
            <li className="left-navbar-li">Item 2</li>
            <li className="left-navbar-li">Item 3</li>
            <li className="left-navbar-li">Item 4</li>
          </ul>
        </div>
      )

      const showContentView = () => (
        <div className={`content-container ${classForFlexGrow}`}>
          <h1 className="left-navbar-heading">Content</h1>
          <p className="content-description">
            Lorem ipsum complete the below steps to create your development
            environment and start working on some amazing projects!
          </p>
        </div>
      )

      const showRightNavbarView = () => (
        <div className={`right-navbar-container ${classForFlexGrow}`}>
          <h1 className="right-navbar-heading">Right Navbar</h1>
          <div className="right-navbar-ul">
            <p className="right-para">Ad 1</p>
            <p className="right-para">Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar ? showLeftNavbarView() : null}
          {showContent ? showContentView() : null}
          {showRightNavbar ? showRightNavbarView() : null}
        </div>
      )
    }}
  </ConfigurationContent.Consumer>
)

export default Body
