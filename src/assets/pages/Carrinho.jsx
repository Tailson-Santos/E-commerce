export function Carrinho({ carrinho }) {

    const total = carrinho.reduce((acc, item) => {
        return acc + item.price
    }, 0)

    return (
        <div className="p-5">

            <h1 className="text-3xl font-bold mb-5">
                Meu Carrinho
            </h1>

            <div className="flex flex-col gap-4">

                {carrinho.map((item) => (

                    <div
                        key={item.id}
                        className="
                            bg-white
                            p-4
                            rounded-lg
                            shadow
                            flex
                            gap-4
                            items-center
                        "
                    >

                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-20 object-contain"
                        />

                        <div>
                            <p className="font-bold">
                                {item.title}
                            </p>

                            <p className="text-green-600 font-bold">
                                R$ {item.price}
                            </p>
                        </div>

                    </div>

                ))}

            </div>

            <div className="mt-5 text-2xl font-bold">
                Total: R$ {total.toFixed(2)}
            </div>

        </div>
    )
}