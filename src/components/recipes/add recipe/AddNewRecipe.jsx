import React, { useRef, useState } from 'react'
import SideBar from '../../../resusableComponents/SideBar'
import Header from '../../../resusableComponents/Header'
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

const AddNewRecipe = () => {

    const formData = new FormData();
    const [addRecipeInformation, setAddRecipeInformation] = useState({
        recipeName: "", recipeDesc: "", recipeDifficulty: "", recipeCookingTime: "", recipePreparationTime: "",
        recipeCompleteInformation: "", recipeIngredients: "", recipeIngredientNames: "", recipeMealType: "",
        recipeNutritionalInfo: "", recipeImage: "", recipeServing: "",
    });
    // for all inputs to work with, its for avoiding duplication of code
    const inputConfigs = [
        { id: 'recipeName', label: 'Recipe Name', required: true, placeholder: 'Recipe Name' },
        { id: 'recipeDesc', label: 'Recipe Description', required: true, placeholder: 'Recipe Description' },
        { id: 'recipeCookingTime', label: 'Cooking time in min', required: true, placeholder: 'Cooking Time', type: 'number' },
        { id: 'recipePreparationTime', label: 'Preparation Time in min', required: true, placeholder: 'Preparation Time', type: 'number' },
        { id: 'recipeServing', label: 'Recipe Servings', required: true, placeholder: 'Recipe Servings', type: 'number' }
    ];

    // for all textarea to work with, its for avoiding duplicating the code.
    const textareaConfigs = [
        { id: 'recipeCompleteInformation', label: 'Complete Recipe Detail', placeholder: 'Recipe complete detail' },
        { id: 'recipeIngredients', label: 'Recipe Ingredients', placeholder: 'Ingredients with quantity' },
        { id: 'recipeNutritionalInfo', label: 'Nutritional Information', placeholder: 'e.g. calories, proteins, carbs' },
        { id: 'recipeIngredientNames', label: 'All Ingredient Names', placeholder: 'All ingredients used' }
    ];

    const recipeImageReference = useRef(null);

    const pickRecipeImage = () => {
        recipeImageReference.current?.click();
    }

    const uploadRecipeToServer = async () => {
        const formData = new FormData();

        formData.append("recipename", addRecipeInformation.recipeName);
        formData.append("recipeDesc", addRecipeInformation.recipeDesc);
        formData.append("difficulty", addRecipeInformation.recipeDifficulty);
        formData.append("cookingTime", addRecipeInformation.recipeCookingTime);
        formData.append("preparingTime", addRecipeInformation.recipePreparationTime);
        formData.append("servings", addRecipeInformation.recipeServing);
        formData.append("completeInfo", addRecipeInformation.recipeCompleteInformation);
        formData.append("ingredients", addRecipeInformation.recipeIngredients);
        formData.append("nutritionFacts", addRecipeInformation.recipeNutritionalInfo);
        formData.append("mealType", addRecipeInformation.recipeMealType);
        formData.append("ingredientName", addRecipeInformation.recipeIngredientNames);
        formData.append("recipeImage", addRecipeInformation.recipeImage); // Important: file

        try {
            const res = await fetch("http://localhost:4000/recipes/add", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (res.ok) {
                alert("Recipe uploaded successfully!");
            } else {
                alert("Upload failed: " + data.message);
            }
        } catch (err) {
            console.error("Error uploading recipe:", err);
            alert("Upload failed due to network/server error.");
        }
    };

    return (
        <div className='h-screen flex'>
            <SideBar />
            <div className='flex-1 bg-gray-50 overflow-y-auto'>
                <Header />
                <div className='max-w-7xl p-6'>

                    {/* Input values to upload new Recipe */}
                    <div className='space-y-5'>
                        <div className='space-y-2'>
                            <h2 className='font-medium text-2xl'>Upload Recipes</h2>
                            <span className='text-xs text-gray-500 my-2'>Upload recipes with complete information. Fields with * are mandatory</span>
                        </div>


                        <div className='space-y-5 my-5'>
                            <div>
                                <h2 className='font-medium text-lg my-5'>Basic Information</h2>
                            </div>
                            <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5'>
                                {inputConfigs.map((config, index) => (
                                    <FormInput
                                        key={index}
                                        id={config.id}
                                        label={config.label}
                                        required={config.required}
                                        placeholder={config.placeholder}
                                        type={config.type}
                                        value={addRecipeInformation[config.id]}
                                        onChange={(e) => setAddRecipeInformation({ ...addRecipeInformation, [config.id]: e.target.value })}
                                    />
                                ))}
                            </div>
                            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-10'>
                                {textareaConfigs.map((config, index) => (
                                    <FormTextArea
                                        key={index}
                                        id={config.id}
                                        label={config.label}
                                        placeholder={config.placeholder}
                                        value={addRecipeInformation[config.id]}
                                        onChange={(e) => setAddRecipeInformation({ ...addRecipeInformation, [config.id]: e.target.value })}
                                    />
                                ))
                                }
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <div>
                                    <button
                                        onClick={pickRecipeImage}
                                        className='bg-gray-200 border border-gray-300 rounded-lg shadow-sm px-3 py-2 cursor-pointer'>
                                        <span>Pick Recipe Image</span>
                                        <input
                                            type="file"
                                            accept=".png, .jpeg, .jpg, .gif"
                                            onChange={(e) => setAddRecipeInformation({ ...addRecipeInformation, recipeImage: e.target.files[0] })}
                                            className='hidden' ref={recipeImageReference} />
                                    </button>
                                </div>
                                <div className='flex flex-row gap-5'>
                                    <button className='text-gray-600 font-medium px-3 py-2 rounded-lg border border-gray-300 text-sm cursor-pointer'>Cancel</button>
                                    <button
                                        disabled={
                                            addRecipeInformation.recipeName === "" ||
                                            addRecipeInformation.recipeDesc === "" ||
                                            addRecipeInformation.recipeImage === ""
                                        }
                                        onClick={uploadRecipeToServer}
                                        className='text-white bg-blue-600 rounded-lg px-4 py-2 font-medium text-sm 
                                        disabled:cursor-not-allowed disabled:opacity-90 cursor-pointer'>
                                        Upload Recipe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewRecipe
