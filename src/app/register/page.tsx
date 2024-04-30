import userRegister from "@/libs/userRegister"
import { redirect } from "next/navigation"

export default function RegisterPage() {
    const addUser = async (addCarForm:FormData) => {
        "use server"
         const name = addCarForm.get("name")
         const email = addCarForm.get("email")
         const password = addCarForm.get('password')
      //    console.log(password)
  
        if (name && email && password) {
           userRegister(name.toString(),email.toString(),password.toString())
           redirect('/')

        }

     
    }

    return (
    <main>
        <form action={addUser}>
        <div className="shadow-xl h-[300px] w-[400px] rounded-xl bg-white px-5 py-5 mx-[450px] my-20"> 
        <div className='flex items-center w-1/2 my-2'>
                 <label className="w-auto block text-gray-700 pr-4" htmlFor='name'>
                  Name</label>
                  <input type='text' required id="name" name="name" placeholder='NAME' className="bg-white text-center border border-2 border-gray-200 rounded-xl w-[350px] p-2 text-gray-700"></input>
             </div>
             <div className='flex items-center w-1/2 my-2'>
                 <label className="w-auto block text-gray-700 pr-4" htmlFor='email'>
                  Email</label>
                  <input type='text' required id="email" name="email" placeholder='EMAIL' className="bg-white text-center border border-2 border-gray-200 rounded-xl w-[350px] p-2 text-gray-700"></input>
             </div>
             <div className='flex items-center w-1/2 my-2'>
                 <label className="w-auto block text-gray-700 pr-4" htmlFor='password'>
                  Password</label>
                  <input type='text' required id="password" name="password" placeholder='PASSWORD' className="bg-white text-center border border-2 border-gray-200 rounded-xl w-[315px] p-2 text-gray-700  hover:ring-transparent"></input>
             </div>

             <button type="submit" className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold my-5 mx-[100px]"  >REGISTER</button>
             </div>
        </form>


    </main>

      );
    }