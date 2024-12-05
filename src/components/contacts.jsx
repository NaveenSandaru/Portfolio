import {CONTACT} from "../constants";
const contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl">Gen in Touch</h1>
        <div className="text-center tracking-tighter">
            <a href="mailto:naveensandaru2@gmail.com" className="border-b my-4">{CONTACT.email}</a>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <p className="my-4">{CONTACT.address}</p>
        </div>
    </div>
  )
}

export default contacts
