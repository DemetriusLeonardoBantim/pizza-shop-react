import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie } from 'recharts'


const data = [
    {
        product: 'Pepperoni',
        amount: 40
    },
    {
        product: 'Mussarela',
        amount: 20
    },
    {
        product: 'Marguerita',
        amount: 12
    },
    {
        product: '4 queijos',
        amount: 11
    },
    {
        product: 'Frango frito',
        amount: 27
    },
]

export function PopularProductsChart() {
    return (
        <Card className="col-span-3">
            <CardHeader className="pb-8">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">
                        Produtos populares
                    </CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <PieChart style={{ fontSize: 12 }} data={data}>
                        <Pie data={data} dataKey='amount' nameKey='product' cx="50%" cy="50%" outerRadius={86} innerRadius={64} />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}