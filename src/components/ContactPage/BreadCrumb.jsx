import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = () => {
  return (
    <div className="p-4 lg:p-8 lg:w-9/12 mx-auto">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/agro"}>Contact Us</Link>
            </li>
            
          </ul>
        </div>
      </div>
  )
}

export default BreadCrumb