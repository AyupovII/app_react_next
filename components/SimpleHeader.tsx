export default function SimpleHeader() {
    return (
        <header className="bg-gray-900 py-4 fixed w-full top-0">
            <div className=" mx-auto px-4">
                <nav className=" flex items-center justify-between">
                    <div className="text-white text-2xl font-bold">Logo</div>
                        <ul className=" flex space-x-4">
                            <a href="/" className=" text-white hover:text-blue-300">Home</a>
                            <a href="/product" className=" text-white hover:text-blue-300">Product</a>
                            <a href="/about" className=" text-white hover:text-blue-300">About</a>
                        </ul>
                    

                </nav>

            </div>

        </header>
    )
}