export function Card({ produto ,adicionarCarrinho}) {
    const {
        title: nome,
        price: preco,
        description: descricao,
        category: categoria,
        image: img,
    } = produto

    return (
        <div className="
            bg-white
            rounded-xl
            shadow-md
            p-4
            flex
            flex-col
            gap-3
            hover:scale-105
            transition
            duration-300
        ">
            
            <div className="flex justify-center">
                <img
                    src={img}
                    alt={nome}
                    className="h-40 object-contain"
                />
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-lg line-clamp-1">
                    {nome}
                </h2>

                <p className="text-sm text-gray-500 capitalize">
                    {categoria}
                </p>

                <p className="text-sm text-gray-700 line-clamp-3">
                    {descricao}
                </p>

                <p className="text-2xl font-bold text-green-600">
                    R$ {preco}
                </p>

                <button onClick={() => adicionarCarrinho(produto)} className="
                    bg-black
                    text-white
                    p-2
                    rounded-lg
                    hover:bg-gray-800
                    transition
                ">
                    
                    Comprar
                </button>
                <button>

                    <span class="material-symbols-outlined">
    shopping_cart_checkout
    </span>
                </button>
            </div>
        </div>
    )
}