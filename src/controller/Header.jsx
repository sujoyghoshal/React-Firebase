const Header = () => {
    return (
        <>
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <nav className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">SUJOY</div>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-gray-200">Home</a></li>
                        <li><a href="#" className="hover:text-gray-200">About</a></li>
                        <li><a href="#" className="hover:text-gray-200">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;