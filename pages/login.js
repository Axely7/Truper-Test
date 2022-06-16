import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Login = () => {

    const [user, setUser] = useState({
        name: "",
        password: "",
    });

    const router = useRouter();

    const loginSubmit = () => {
        router.push('/');
    }


  return (
    <div className='flex justify-center mt-20'>
        <div className='w-full max-w-sm'>
            <form className='bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4' onSubmit={loginSubmit}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Usuario: </label>
                    <input className='shaodw appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                        focus:outline-none focus:shadow-outline
                    ' id='user' placeholder='Ingresa Usuario'></input>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Contraseña: </label>
                    <input className='shaodw appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                        focus:outline-none focus:shadow-outline
                    ' id='password' placeholder='Ingresa contraseña' type="password"></input>
                </div>

                <input type="submit" className='bg-gray-800 w-full mt-5 p-2 text-white hover:bg-gray-900 cursor-pointer' value="Iniciar Sesión"></input>
            </form>
        </div>
    </div>
  )
}

export default Login