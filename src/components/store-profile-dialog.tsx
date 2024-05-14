import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { DialogContent, DialogFooter, DialogHeader } from './ui/dialog'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useQuery } from '@tanstack/react-query'
import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const storeProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string()
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {

    const { data: managedRestaurant, isLoading: isLoadingMannagedRestaurant } = useQuery({
        queryKey: ['managed-restaurant'],
        queryFn: getManagedRestaurant,
    })

    const { register, handleSubmit } = useForm<StoreProfileSchema>({
        resolver: zodResolver(storeProfileSchema),
        values: {
            name: managedRestaurant?.name ?? '',
            description: managedRestaurant?.description ?? ''
        }
    })

    console.log(managedRestaurant)

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil da loja</DialogTitle>
                <DialogDescription>Atualize as informações do seu estabelecimento visíveis ao seu cliente</DialogDescription>
            </DialogHeader>

            <form>
                <div className=' space-y-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label className='text-right' htmlFor='name'>
                            Nome
                        </Label>
                        <Input className='col-span-3' id='name' {...register('name')} />
                    </div>

                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label className='text-right' htmlFor='description'>
                            Descrição
                        </Label>
                        <Textarea className='col-span-3' id='description' {...register('description')} />
                    </div>
                </div>
            </form>

            <DialogFooter>
                <Button variant="ghost">Cancelar</Button>
                <Button type="submit" variant="default">Salvar</Button>
            </DialogFooter>
        </DialogContent>
    )
}