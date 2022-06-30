import { Typography } from "@mui/material"
import React from "react"
import profile from "../../asstes/images/1651759979315.jpg"
import CustomTimeline from "../timeline/CustomTimeline"
import "./Profile.css"

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name ">
        <Typography className="name">MD. SOBHAN HOSSAIN SEAM</Typography>
        <Typography className="title">Mern stack Developer</Typography>
      </div>
      <figure className="profile_image">
        <img src={profile} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline></CustomTimeline>
        <br />
        <button>BTN</button>
      </div>
    </div>
  )
}

export default Profile
