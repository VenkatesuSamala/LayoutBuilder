import './index.css'
import ConfigurationContent from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContent.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const ToggleShowContent = () => {
        onToggleShowContent()
      }

      const ToggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const ToggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <nav className="nav-container">
          <h1 className="nav-heading">Layout</h1>
          <div className="nav-li-container">
            <input
              id="content"
              type="checkbox"
              onClick={ToggleShowContent}
              className="checkbox"
              defaultChecked
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="nav-li-container">
            <input
              id="left-navbar"
              type="checkbox"
              onClick={ToggleShowLeftNavbar}
              className="checkbox"
              defaultChecked
            />
            <label htmlFor="left-navbar" className="label">
              Left Navbar
            </label>
          </div>
          <div className="nav-li-container mar">
            <input
              id="right-navbar"
              type="checkbox"
              onClick={ToggleShowRightNavbar}
              className="checkbox"
              defaultChecked
            />
            <label htmlFor="right-navbar" className="label">
              Right Navbar
            </label>
          </div>
        </nav>
      )
    }}
  </ConfigurationContent.Consumer>
)

export default ConfigurationController
