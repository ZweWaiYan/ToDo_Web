import iconCheck from '../assets/icon-check.svg';
import { useState } from 'react';

import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

function new_input() {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (option) => {
        setSelectedOption(option);
        console.log(`Option ${option} selected`);
    };

    return (
        <div className='w-full max-w-md mx-auto rounded-lg m-7 lg:p-0 md:p-0 p-3'>

            <div className="flex items-center justify-between my-10">
                <h1 className="text-3xl font-bold text-white">
                    T O D O
                </h1>

                <div>
                    <img
                        src={iconMoon}
                        alt="Selected"
                        className="w-3 h-3 cursor-pointer"
                    />
                </div>
            </div>

            <div className="flex items-center px-5 p-2 border-b border-gray-300 bg-white rounded-lg">
                <label className="relative w-6 h-6 flex-shrink-0 cursor-pointer">
                    <input
                        type="radio"
                        name="price"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={() => handleRadioChange('option1')}
                        className="sr-only peer"
                    />
                    <div className="w-full h-full rounded-full bg-gray-200 peer-checked:bg-gradient-to-r peer-checked:from-blue-400 peer-checked:to-purple-600 transition-colors duration-300" />
                    <img
                        src={iconCheck}
                        alt="Selected"
                        className="w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity"
                    />
                </label>

                <input
                    id="price"
                    name="price"
                    type="text"
                    placeholder="Create a new todo..."
                    className="flex-1 py-3 pr-3 pl-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                />
            </div>
        </div >
    )
}

export default new_input;