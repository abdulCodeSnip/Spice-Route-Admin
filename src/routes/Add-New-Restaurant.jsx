import React, { useRef, useState } from 'react'
import SideBar from '../resusableComponents/SideBar';
import Header from '../resusableComponents/Header';
import { IoImageOutline } from 'react-icons/io5';

const AddNewRestaurant = () => {

    const baseURL = "http://localhost:4000";
    const [addRestaurantInfo, setAddRestaurantInfo] = useState({
        restaurant_name: "",
        restaurant_location: "",
        restaurant_image: "",
    });
    const restaurantInputsConfig = [
        {
            id: 1,
            inputLabe: "Restaurant Name",
            inputName: "restaurant_name",
            value: addRestaurantInfo.restaurant_name,
            onChange: (e) => setAddRestaurantInfo({ ...addRestaurantInfo, restaurant_name: e?.target?.value }),
            inputType: "input",
        },
        {
            id: 2,
            inputLabe: "Restaurant Location",
            inputName: "restaurant_location",
            value: addRestaurantInfo.restaurant_location,
            onChange: (e) => setAddRestaurantInfo({ ...addRestaurantInfo, restaurant_location: e?.target?.value }),
            inputType: "input",
        },
    ];
    const restaurantImageRef = useRef(null);

    // Pick restaurant image with a reference, so we can remove the input of file type
    const handlePickRestaurantImage = () => {
        restaurantImageRef.current.click();
    }

    // Upload Restaurant to server, with restaurant name, location and the image of restaurant
    const uploadRestaurantToServer = async () => {
        const formData = new FormData();
        formData.append("restaurant_name", addRestaurantInfo.restaurant_name);
        formData.append("restaurant_location", addRestaurantInfo.restaurant_location);
        formData.append("restaurant_image", addRestaurantInfo.restaurant_image);
        try {

            const apiResponse = await fetch(`${baseURL}/restaurant/add`, {
                method: "POST",
                body: formData
            });
            const result = await apiResponse.json();
            if (apiResponse.ok) {
                alert("Restaurants Added Successfully");
                console.log(result);
            } else {
                alert("Something is wrong ");
            }
        } catch (error) {
            alert("Something Went Wrong");
            console.log("Error Occured, while uploading restaurants", error.message);
        }
    }

    return (
        <div className='h-screen flex overflow-hidden'>
            <SideBar />
            <main className='flex-1'>
                <Header />
                <div className='p-6 bg-gray-50 h-[100%] flex flex-col space-y-2'>
                    <div className='space-y-2'>
                        <h2 className='text-xl font-medium text-gray-800'>
                            Add New Restaurant
                        </h2>
                        <span className='text-gray-500 text-sm'>Add new restaurant to handle food orderings!</span>
                    </div>
                    <div className='flex gap-4 items-center'>
                        {restaurantInputsConfig?.map((inputConfig) => (
                            <div key={inputConfig.id}>
                                <label htmlFor={inputConfig.id} className='font-medium text-sm text-gray-800 block my-2 ml-1'>{inputConfig.inputLabe}</label>
                                <input
                                    type={inputConfig.inputType}
                                    placeholder={inputConfig.inputLabe}
                                    name={inputConfig.inputName}
                                    id={inputConfig.id}
                                    key={inputConfig.id}
                                    onChange={(e) => inputConfig.onChange(e)}
                                    className={`border border-gray-300 rounded-lg px-3 py-2 text-sm ${inputConfig.inputType === "file" ? "hidden" : ""}`}
                                />
                            </div>
                        ))}
                        <div>
                            <label htmlFor="restaurant_image" className='block text-sm font-medium ml-1 text-gray-800 my-2'>Restaurant Image</label>
                            <button
                                onClick={handlePickRestaurantImage}
                                className='bg-gray-50 hover:bg-white transition-all text-blue-600 shadow-sm flex flex-row gap-x-2 font-medium px-3 py-2 rounded-lg border border-gray-300 text-sm cursor-pointer'>
                                <IoImageOutline size={18} />
                                <span>Pick Restaurant Image</span>
                                <input
                                    type="file" name="restaurant_image" id="restaurant_image" accept='image/*' className='hidden' ref={restaurantImageRef}
                                    onChange={(e) => setAddRestaurantInfo({ ...addRestaurantInfo, restaurant_image: e.target.files[0] })} />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row w-full items-center justify-end gap-4 p-2'>
                        <button className="bg-gray-50 text-gray-800 text-sm cursor-pointer  px-3 py-2 rounded-lg border border-gray-200">Cancel</button>
                        <button onClick={uploadRestaurantToServer} className="bg-blue-600 text-white text-sm  cursor-pointer px-3 py-2 rounded-lg border border-gray-200">Upload Restaurant</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AddNewRestaurant;
