import React, { useState } from 'react'


const Section = ({title, description, isVisible, setIsvisible}) => {

    return (
        <div className='border border-black p-4 m-5 '>
            <div className='py-2 flex justify-between items-center'>
            <h3 className='font-bold text-xl'>{title}</h3>
            {(!isVisible) &&<p onClick={() => setIsvisible(true)} className='cursor-pointer'>Show</p>}
            {(isVisible) &&<p onClick={() => setIsvisible(false)} className='cursor-pointer'>Hide</p>}
            </div>
            {isVisible && <h3>{description}</h3>}
        </div>
    )
}
const Instamart = () => {
    const [visibleSection, setIsVisibleSection] = useState("about")
  return (
    <div className='w-[50%] left-auto right-auto m-auto'>
        <h1 className='text-2xl font-bold m-5'>Instamart</h1>
        <Section 
        title={"About Instamart"}
        description={`It is a long established fact that a reader will be distracted by the readable
         content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
         sometimes by accident, sometimes on purpose (injected humour and the like).`}
         isVisible = {visibleSection == "about"}
         setIsvisible = {()=> setIsVisibleSection("about")}
         />

        <Section 
        title={"Team Instamart"}
        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
         sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum`}
          isVisible = {visibleSection == "team"}
          setIsvisible = {()=> setIsVisibleSection("team")}
          />

        <Section 
        title={"company Instamart"}
        description={`The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
         Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
         their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}
         isVisible ={visibleSection == "company"}
         setIsvisible = {() => setIsVisibleSection("company")}
        />
    </div>
  )
}


export default Instamart;