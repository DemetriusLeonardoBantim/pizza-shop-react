import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { DialogContent, DialogFooter, DialogHeader } from './ui/dialog'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'


export function StoreProfileDialog() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil da loja</DialogTitle>
                <DialogDescription>Atualize as informações do seu estabelecimento visíveis ao seu cliente</DialogDescription>
            </DialogHeader>



            <form>
                <div className=' space-y-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label className='text-right'>
                            Nome
                        </Label>
                        <Input className='col-span-3' id='name' />
                    </div>

                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label className='text-right'>
                            Descrição
                        </Label>
                        <Input className='col-span-3' id='name' />
                    </div>


                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label className='text-right'>
                            Nome
                        </Label>
                        <Input className='col-span-3' id='name' />
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