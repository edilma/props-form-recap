export default function NameTag(props){
    const {firstName,lastName, email, favColor,date} = props
    return(
        <>
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>favColor: {favColor}</p>
            <p>Date: {date}</p>
        </div>
        </>

    )
}