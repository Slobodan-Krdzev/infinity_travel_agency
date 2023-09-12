import Link from 'next/link'
import React from 'react'

type NavlinkElementProps = {
    to: string,
    text: string,
    noLink? : boolean
}

const NavlinkElement = ({to, text, noLink}: NavlinkElementProps) => {

  if(noLink) {
    return <span>{text}</span>
  }

  return (
    <Link href={to} style={{
        textDecoration: 'none',
        color: 'black',
        width: '100%'
    }}>{text}</Link>
  )
}

export default NavlinkElement;