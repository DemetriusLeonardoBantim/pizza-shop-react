import { CardHeader, Card, CardTitle, CardContent } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export function Dashboard() {
    return (
        <>
            <Helmet title='Dashboard' />
            <h1>Dashboard</h1>
            <div className='flex flex-col gap-4'>
                <h1 className="text-3xl font-bold tracking-tighter">Dashboard</h1>

                <div className='grid grid-cols-4 gap-4 justify-between pb-2'>
                    <Card>
                        <CardHeader className='flex-row items-center justify-between  space-y-0 pb-2'>
                            <CardTitle className="text-base font-semibold">
                                Receita Total (mêS)
                            </CardTitle>
                            <DollarSign className='h-4 w-4 text-muted-foreground' />
                        </CardHeader>

                        <CardContent className='space-y-1'>
                            <span className='text-2xl font-bold tracking-tighter'>
                                R$ 1248,6-
                            </span>
                            <p className='text-xs text-muted-foreground'>
                                <span className='text-emerald-500 dark:text-teal-400'>
                                    +2%
                                </span>{' '}
                                em relação ao mês passado
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>

    )
}