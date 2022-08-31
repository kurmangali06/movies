import React from 'react'

export const Footer = () => {
  return (
    <footer className="page-footer teal lighten-2">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="https://github.com/kurmangali06/movies">Repo</a>
      </div>
    </div>
    </footer>
  )
}
