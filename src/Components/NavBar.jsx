import React from 'react'
import { Link } from "react-router-dom"
import { CheckCircle } from 'lucide-react';


export default function NavBar() {
    return (
        <header className="bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                    <div className="flex items-center space-x-2">
                        <CheckCircle className="h-8 w-8 text-blue-600" />
                        <span className="text-2xl font-bold text-gray-900">TodoMaster</span>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link to={"/"} className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
                        <Link to={"/create"} className="text-gray-600 hover:text-blue-600 transition-colors">Create</Link>
                        <Link to={"/display"} className="text-gray-600 hover:text-blue-600 transition-colors">Display</Link>
                    </nav>

                </div>
            </div>
        </header>
    )
}
