import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line } from 'recharts'

const data = [
    {
        date: '10/12',
        revenue: 1200
    },
    {
        date: '11/12',
        revenue: 800
    },
    {
        date: '12/12',
        revenue: 200
    },
    {
        date: '13/12',
        revenue: 120
    },
    {
        date: '14/12',
        revenue: 2200
    },
    {
        date: '15/12',
        revenue: 200
    },
    {
        date: '16/12',
        revenue: 3200
    }
]

export function RevenueChart() {
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">
                        Receita diária
                    </CardTitle>
                    <CardDescription>
                        Receita diária no período
                    </CardDescription>
                </div>

            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart style={{ fontSize: 12 }} data={data}>
                        <Line type="linear" strokeWidth={2} dataKey="revenue" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}