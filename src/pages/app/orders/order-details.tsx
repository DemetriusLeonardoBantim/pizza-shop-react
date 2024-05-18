import { getOrderDetails } from "@/api/get-order-details";
import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import { TableCell, Table, TableBody, TableRow, TableHeader, TableFooter } from "@/components/ui/table";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

export interface OrderDetailsProps {
    orderId: string
    open: boolean
}
export function OrderDetails({ orderId, open }: OrderDetailsProps) {

    const { data: order } = useQuery({
        queryKey: ['order', orderId],
        queryFn: () => getOrderDetails({ orderId }),
        enabled: open,
    })

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Pedido: XXXXXXXX12412312
                </DialogTitle>
                <DialogDescription>
                    Detalhes do pedido
                </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">
                                Status
                            </TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">Pendente</span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">
                                Cliente
                            </TableCell>
                            <TableCell className="flex justify-end">
                                Demetrius Leonardo Bantim de Vasconcelos
                            </TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="text-muted-foreground">
                                Telefone
                            </TableCell>
                            <TableCell className="flex justify-end">
                                (88) 9 8226-7495
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">
                                Email
                            </TableCell>
                            <TableCell className="flex justify-end">
                                demetriusbantimvas@gmail.com
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">
                                Realizado há
                            </TableCell>
                            <TableCell className="flex justify-end">
                                há 3 minutos
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>


                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeader>Produto</TableHeader>
                            <TableCell className="text-right">Qtd.</TableCell>
                            <TableCell className="text-right">Preço</TableCell>
                            <TableCell className="text-right">Subtotal</TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Pizza Pepperoni Família
                            </TableCell>
                            <TableCell>
                                2
                            </TableCell>
                            <TableCell>
                                R$ 35,00
                            </TableCell>
                            <TableCell>
                                R$ 70,00
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total do pedido</TableCell>
                            <TableCell className="text-right font-medium">R$ 70,00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}