export default function BoxLayout({children,left,right}){
    const isLoggedIn = false

    return(
        <section>
            {children}
            {isLoggedIn?left:right}
        </section>
    )
}