import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
    return (
        <div className='flex min-h-screen flex-col antialiased'>
            <Header />
            <h1>Cabeçalho</h1>

            <div className='flex flex-1 gap-4 p-8 pt-6'>
                <Outlet />
            </div>
        </div>
    )
}