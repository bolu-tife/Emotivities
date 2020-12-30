// import React from 'react'
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'
// // import DarkModeToggle from 'react-dark-mode-toggle'

// class MyComponent extends React.Component {
//   render() {
//     return (
//       <ThemeToggler>
//         {({ theme, toggleTheme }) => (
//             <DarkModeToggle
//             onChange={e => toggleTheme(e ? 'dark' : 'light')}
//             checked={theme === 'dark'}
//             size={80}
//             speed={2}
//           />
//         )}
//       </ThemeToggler>
//     )
//   }
// }

// export default MyComponent

import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styles from "../darkModeToggle/mycomponent.module.css";

class MyComponent extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className={`${styles.themeswitchwrapper} ${styles.hiddenlabel}`}>
          <label className={styles.themeswitch}  aria-label="light or dark theme toggle" title="light or dark theme toggle">
            Light / Dark Mood<input 
            title="light or dark theme toggle"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            <div className={`${styles.slider} ${styles.round}`}></div>
            
          </label>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default MyComponent

