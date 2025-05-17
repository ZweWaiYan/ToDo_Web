import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

function title() {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">
                T O D O
            </h1>

            <div className="w-14 h-14 p-2 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                    src={iconMoon}
                    alt="Selected"
                    className="w-10 h-10 cursor-pointer"
                />
            </div>


        </div>
    );
}

export default title;