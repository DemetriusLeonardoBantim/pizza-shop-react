import { CardHeader, Card, CardTitle, CardContent } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'



export function MonthRevenueCard() {
    return (
        <Card>
            <CardHeader className='flex-row items-center justify-between  space-y-0 pb-2'>
                <CardTitle className="text-base font-semibold">
                    Receita Total (mêS)
                </CardTitle>
                <DollarSign className='h-4 w-4 text-muted-foreground' />
            </CardHeader>

            <CardContent className='space-y-1'>
                <span className='text-2xl font-bold tracking-tighter'>
                    R$ 1248,68
                </span>
                <p className='text-xs text-muted-foreground'>
                    <span className='text-emerald-500 dark:text-teal-400'>
                        +2%
                    </span>{' '}
                    em relação ao mês passado
                </p>
            </CardContent>
        </Card>
    )

}