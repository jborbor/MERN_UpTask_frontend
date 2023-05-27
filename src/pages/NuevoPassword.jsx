import React from 'react'
import { Link } from 'react-router-dom'

const NuevoPassword = () => {
    return (
        <>
            <h1 className='text-sky-600 font-black text-6xl capitalize'>Reestablecer Password</h1>

            <form action="" className='my-10 bg-white shadow rounded-lg p-10'>

                <div className='my-5'>
                    <label
                        htmlFor="password"
                        className='uppercase text-gray-600 block text-xl font-bold'
                    >Nuevo Password</label>
                    <input
                        id='password'
                        type="password"
                        placeholder='Nuevo Password'
                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                    />
                </div>

                <input type="submit"
                    value="Guardar Password"
                    className='bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
                />
            </form>

        </>
    )
}

export default NuevoPassword