import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { DialogContent, DialogFooter, DialogHeader } from './ui/dialog'
import { Button } from './ui/button'


export function StoreProfileDialog() {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil da loja</DialogTitle>
                <DialogDescription>Atualize as informações do seu estabelecimento visíveis ao seu cliente</DialogDescription>
            </DialogHeader>


            <DialogFooter>
                <Button>Cancelar</Button>
                <Button type="submit">Salvar</Button>
            </DialogFooter>
        </DialogContent>
    )
}