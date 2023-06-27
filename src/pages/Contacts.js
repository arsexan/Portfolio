
export const Contacts = () => {
    return(
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Moscow, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+797727659XX">+7 (977) 276-59-XX</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:arsen.lopukhin@gmail.com">Написать мне</a></p>
                    </li>
                </ul>
        </div>
    </main>
    )
}