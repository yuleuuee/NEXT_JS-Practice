import React from 'react'

const ProfilePage = ({params}) => {
    // console.log(params)



  // Function to capitalize the first letter of a string
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Capitalize the username
  const capitalizedUserName = capitalize(params.user_name);

  return (
    <div>
      Profile of {capitalizedUserName}
      {/* {params.user_name} */}
    </div>
  )
}

export default ProfilePage