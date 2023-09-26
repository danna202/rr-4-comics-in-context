import React from "react"
import CollectorButton from './CollectorButton'
import SubmitForm from './SubmitForm'

export default function UserInterface () {
  return (
    <div>
      <h2>We carry the latest and greatest editions of your favorite comic books!</h2>
      <h2>Are you a collector?</h2>
      <CollectorButton />

      <h2>Have a special request? Click the button for fill out form</h2>
      <SubmitForm />
    </div>
  )
}