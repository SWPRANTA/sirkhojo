function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 mt-16 py-10">
            <div className="container mx-auto px-6 text-center">
                <p className="text-2xl font-semibold mb-2 text-gray-200">
                    Sir Khojo
                </p>
                <p className="mb-4">
                    Connecting brilliance across borders.
                </p>
                <div className="flex justify-center space-x-4 mb-6">
                    <a className="hover:text-white" href="#">
                        <span className="material-icons">facebook</span>
                    </a>
                    <a className="hover:text-white" href="#">
                        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                    </a>
                    <a className="hover:text-white" href="#"><span className="material-icons">mail</span></a>
                </div>
                <p className="text-sm">© 2025 Sir Khojo. All rights reserved.</p>
                <p className="text-xs mt-1">
                    <a className="hover:text-white" href="#">Privacy Policy</a> | <a className="hover:text-white" href="#">Terms of Service</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer