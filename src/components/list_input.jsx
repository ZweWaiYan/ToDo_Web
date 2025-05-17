import iconCheck from '../assets/icon-check.svg';
import iconCross from '../assets/icon-cross.svg';
import { useState } from 'react';

const example_lists = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
];

function list_input() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (option) => {
        setSelectedOption(option);
        console.log(`Option ${option} selected`);
    };

    return (
        <div className='w-full max-w-md mx-auto rounded-lg shadow-lg lg:p-0 md:p-0 px-3 '>
            {
                example_lists.map((list, index) => (
                    <div key={index} className="flex items-center px-5 p-2 border-b bg-white border-gray-300">
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

                        <div>
                            <img
                                src={iconCross}
                                alt="Selected"
                                className="w-3 h-3 cursor-pointer"
                            />
                        </div>
                    </div>
                ))
            }
            <div className='w-full max-w-md rounded-lg shadow-lg'>
                <div className='p-4 text-xs bg-white text-gray-700'>

                    {/* Top Row: 1 and 3 */}
                    <div className='flex justify-between items-center mb-2 sm:mb-0 sm:flex-row'>
                        <div>5 items left</div>
                        <button className='hover:text-red-500'>Clear Completed</button>
                    </div>

                    {/* Second Row (Mobile Only): 2 */}
                    <div className='flex justify-center gap-4'>
                        <button className='hover:text-indigo-600'>All</button>
                        <button className='hover:text-indigo-600'>Active</button>
                        <button className='hover:text-indigo-600'>Completed</button>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default list_input;