import UseRouter from '@/components/UseRouter';
import React from 'react'

const ProfilePage = ({params}) => {
    console.log(params)
    console.log(params.user_name)
    console.log(typeof(params.user_name))
    
  // Function to capitalize the first letter of a string
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Capitalize the username
  const capitalizedUserName = capitalize(params.user_name);

  return (
    <>
      {/* link to go to the Admin page */}
      <UseRouter></UseRouter>
      <br />

      Hello {capitalizedUserName}! This is your profile page.
    </>
  )
}

export default ProfilePage