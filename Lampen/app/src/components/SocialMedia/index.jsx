import React from 'react'
import s from './style.module.css'
import {SlSocialVkontakte  } from "react-icons/sl";
import { AiOutlineYoutube, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

export default function SocialMedia() {
  return (
  <div className={s.social_media}>
    <a href='#'><SlSocialVkontakte /></a>
    <a href='#'><AiOutlineYoutube /></a>
    <a href='#'><AiOutlineFacebook /></a>
    <a href='#'><AiOutlineInstagram /></a> 
  </div>
  )
}