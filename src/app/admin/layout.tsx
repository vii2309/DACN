import React from 'react'
import App from '.'

const AdminLayout: React.FC<{ children: React.ReactNode }> =  ({children}) => {
  return (
		<App>
			{children}
		</App>
  )
}

export default AdminLayout