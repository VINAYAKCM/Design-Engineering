import React from "react"
import avatar from "/Users/cmvinayak/Documents/Design Engineering/React-Learning/StatesInReact/src/assets/avatar.png"
import starEmpty from "/Users/cmvinayak/Documents/Design Engineering/React-Learning/StatesInReact/src/assets/star-empty.png"
import starfilled from "/Users/cmvinayak/Documents/Design Engineering/React-Learning/StatesInReact/src/assets/starfilled.png"


export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Use a ternary to determine which star image variable
     * should be used based on the `contact.isFavorite` property. Test 
     * your results by manually changing the isFavorite value in state.
     * 
     * `true` => starFilled
     * `false` => starEmpty
     */

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button"
                    >   
                        {contact.isFavorite ? (
                            <img
                                src={starfilled}
                                alt="filled star icon"
                                className="favorite"
                            />
                        ) : (
                            <img
                                src={starEmpty}
                                alt="empty star icon"
                                className="favorite"
                            />
                        )}
                    </button>
                        <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}
