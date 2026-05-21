export function Nav(){
    return(
        <nav className="flex gap-5 ">
            <a href="">
            <span class="material-symbols-outlined">
                person
            </span>
            </a>


            <a href="">
                <span class="material-symbols-outlined">
                shopping_cart
                </span>

                <span className="bg-red-600 rounded-2xl text-white p-0.3">0</span>
            </a>

        </nav>
    )
}