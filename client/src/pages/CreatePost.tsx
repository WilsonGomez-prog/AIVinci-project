import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';

import { Form as IForm } from '../interfaces'

import { FormField, Loader } from '../components';

import { designOptions, artistOptions, aspectRatioOptions } from '../utils/promptOptions'

import PromptOptionsSection from '../components/PromptOptionsSection';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<IForm>({ name: '', prompt: '', photo: '' });
  const [generatingImg, setGeneratingImg] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [designFilter, setDesignFilter] = useState("");
  const [artistFilter, setArtistFilter] = useState("");
  const [aspectFilter, setAspectFilter] = useState("");

  const handleDesignFilterChange = (filter: string) => {
    setDesignFilter(filter);
  }

  const handleArtistFilterChange = (filter: string) => {
    setArtistFilter(filter);
  }

  const handleAspectFilterChange = (filter: string) => {
    setAspectFilter(filter);
  }

  const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(form.prompt && form.photo && form.name) {
      setLoading(true);
      try {
        const response = await fetch('https://aivinci.onrender.com/api/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        });

        await response.json();
        navigate('/');
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a prompt and generate an image!');
    }

  }

  const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
    const target = (event.target as HTMLInputElement);

    setForm({ ...form, [target.name]: target.value });
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    
    setForm({ ...form, prompt: randomPrompt });
  }

  const generateImage = async () => {
    if(form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('https://aivinci.onrender.com/api/aivinci', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt: form.prompt })
        })
        if(response.ok) {
          const data = await response.json();

          if(data){          
            setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
          } else {
            console.log(response)
            throw new Error("Couldn't generate the image please try again later.");
          }
        } else {
          const errorMessage = await response.text();
          throw new Error(errorMessage);
        }
      } catch (error: any) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please enter a prompt')
    } 
  }

  const getLabelNameForField = (field: string) => {
    const fieldName = field.charAt(0).toUpperCase() + field.slice(1);
    if (field === "name") return `Your ${fieldName}`

    return fieldName;
  }

  const getPlaceholderForField = (field: string) => {
    switch (field) {
      case "name":
        return "John Doe";
      case "prompt":
        return getRandomPrompt("");    
      default:
        return "";
    }
  }

  return (
    <section>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'> Create imaginative and visually stunning images through DALL-E AI and share them with the community.</p>
      </div>      

      <form className='mt-16 max-w-3xl max-h-52' onSubmit={(e) => { handleSubmit(e) }}>
        <div className='flex flex-col gap-5'>
          {
            Object.keys(form).filter(key => key !== "photo").map((key: string) => (
              <FormField key={key} labelName={getLabelNameForField(key)} type="text" name={key} placeholder={getPlaceholderForField(key)} value={form[key as keyof IForm]} handleChange={handleChange} isSurpriseMe={key === "prompt"} handleSurpriseMe={handleSurpriseMe} />
            ))
          }
          <div className='w-[60rem] flex flex-row gap-2'>
            <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 h-80 p-30 flex justify-center items-center'>
              {
                form.photo ? (
                  <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain' />
                ) : (
                  <img src={preview} alt="preview" className='w-9/12 h-9/12 object-contain opacity-40' />
                )
              }

              {
                generatingImg && (
                  <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                    <Loader />
                  </div>
                )
              }
            </div>

              <div className='flex flex-row flex-wrap w-auto gap-2'>
                <PromptOptionsSection options={designOptions} name={"Design"} filter={""} handleFilterChange={handleDesignFilterChange} />
                <PromptOptionsSection options={artistOptions} name={"Artist"} filter={""} handleFilterChange={handleArtistFilterChange} />
                <PromptOptionsSection options={aspectRatioOptions} name={"Aspect"} filter={""} handleFilterChange={handleAspectFilterChange} />
              </div>


          </div>
        </div>
        <div className='mt-5 flex gap-5'>
            <button type='button' onClick={generateImage} className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center '>
              {generatingImg ? 'Generating...' : 'Generate'}
            </button>
        </div>
        <div className='mt-10'>
            <p className='mt-2 text-[#666e75] text-[14px]'>Once you've created the image you want, you can share it with others in the community</p>
            <button type='submit' className='my-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center '>
              {loading ? 'Sharing...' : 'Share with the community'}
            </button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost